const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcrypt');
const authService = require('../services/jwt');

const resolvers = {
  Mutation: {
    signup: async (_, args) => await User.create({
      name: args.user.name,
      surname: args.user.surname,
      email: args.user.email,
      password:  await bcrypt.hash(args.user.password, 10),
    }),
    login: async (_, args) => {
      const user = await User.findOne({ email: args.credentials.email });
      if (!user) throw new Error('Usuario NO encontrado');
      const valid = await bcrypt.compare(args.credentials.password, user.password);
      if (!valid) throw new Error('Contraseña incorrecta');
      const token = authService.encode(user);
      return { token, user };
    },

    addPost: async (_, args) => await Post.create(args.post),
  },
  Query: {
    users: async () => await User.find(),
    user: async (_, args) => await User.findById(args.id),
    posts: async () => await Post.find(),
    post: async (_, args) => await Post.findById(args.id),
  },
  User: {
    posts(user) {
      return Post.find({ author: user._id });
    },
  },
  Post: {
    author(post) {
      return User.findOne({ _id: post.author });
    },
  },
};

module.exports = resolvers;
