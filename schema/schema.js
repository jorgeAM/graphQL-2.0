const typeDefs = `
  type User {
    id: ID!
    name: String!
    surname: String!
    email: String!
    password: String!
    role: String!
    image: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  input NewPost {
    title: String!
    content: String!
    author: ID!
  }

  type Mutation {
    signup (name: String!, surname: String!, email: String!, password: String!): User
    addPost (post: NewPost): Post
  }

  type Query {
    user(id: ID): User
    users: [User]
    post(id: ID): Post
    posts: [Post]
  }
`;

module.exports = typeDefs;
