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

  type AuthPayload {
    token: String
    user: User
  }

  input NewPost {
    title: String!
    content: String!
    author: ID!
  }

  input NewUser {
    name: String!
    surname: String!
    email: String!
    password: String!
  }

  input Credentials {
    email: String!
    password: String!
  }

  type Mutation {
    signup (user: NewUser): User
    login (credentials: Credentials): AuthPayload
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
