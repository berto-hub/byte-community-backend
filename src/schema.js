//import {resolvers} from "./resolvers";
const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
        showUsers: [User]
    }

    type Task {
        _id: ID,
        title: String!,
        description: String!,
        number: Int
    }

    type User {
        _id: ID,
        name: String!,
        email: String!,
        password: String!
    }

    type Video {
        _id: ID,
        url: String!,
        author: String!,
        title: String!,
        date: String!,
        description: String,
        comments: [String],
    }

    type Mutation {
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
        addVideo(input: VideoInput): Video
    }

    input TaskInput {
        title: String!,
        description: String!,
        number: Int
    }

    input UserInput {
        name: String!,
        email: String!,
        password: String!
    }

    input VideoInput{
        url: String!,
        author: String!,
        title: String!,
        date: String!,
        description: String,
        comments: [String],
    }
`;

module.exports = {typeDefs};
