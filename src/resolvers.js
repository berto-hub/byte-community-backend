//import {tasks} from "./sample";
//import User from "./models/User";
//import Video from "./models/Video";
const User = require("./models/User");
const Video = require("./models/Video");

const resolvers = {
    Query: {
        hello: () => {
            return "Hello World";
        },
        greet(root, {name}, context) {
            console.log(context);
            
            return `hello ${name}`;
        },
        tasks() {
            return tasks;
        },
        async showUsers(){
            const users = await User.find();
            return users;
        }
    },

    Mutation: {
        createTask(_, {input}) {
            input._id = tasks.length;
            tasks.push(input);
            console.log(input);
            return input;
        },
        async createUser(_, {input}){
            const user = new User(input);
            console.log(user);
            await user.save();
            return user;
        },
        async addVideo(_, {input}) {
            var date = new Date(input.date)
            const video = new Video({
                _id: input._id,
                title: input.title,
                author: input.author,
                url: input.url,
                date: date,
                description: input.description,
                comments: input.comments,
            });
            console.log(video);
            await video.save();
            return video;
        },
    }
};

module.exports = {resolvers};