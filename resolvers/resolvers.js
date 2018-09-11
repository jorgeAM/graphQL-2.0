const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcrypt');

const resolvers = {
  Mutation: {
    signup: async (_, args) => await User.create({
      name: args.name,
      surname: args.surname,
      email: args.email,
      password:  await bcrypt.hash(args.password, 10),
    }),
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
