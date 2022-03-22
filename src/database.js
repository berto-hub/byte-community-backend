/*import {MongoClient} from "mongodb";

const client = new MongoClient();
export async function connect() {
    try{
        await client.connect(
            'mongodb+srv://BertoNebrija:haydn7878@cluster0.cg1wd.mongodb.net/ByteCommunity?retryWrites=true&w=majority',
        ).then(
            (db) => console.log(`Mongo connected ${db.connection.host}`)
        );

    }catch(e){
        console.log("Something wrong.");
    }
}*/

/*async function main() {
    const MongoClient = require('mongodb').MongoClient;
    const uri =
      'mongodb+srv://BertoNebrija:nebrija@cluster0.cg1wd.mongodb.net/ByteCommunity?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect((err) => {
      //const collection = client.db('ByteCommunity').collection('videosCollection');
      // perform actions on the collection object
      console.log(err);
      client.close();
    });
  }

  main().catch(console.error);*/

//var MongoClient = require('mongodb').MongoClient;
const {connect} = require("mongoose");
var url = "mongodb+srv://BertoNebrija:nebrija@cluster0.cg1wd.mongodb.net/ByteCommunity?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
        await connect(url, {
            useNewUrlParser: true, useUnifiedTopology: true
        }
        /*function(err, db) {
        if (err) throw err;
        var dbo = db.db("ByteCommunity");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("videoCollection").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });}
        ).then(() => console.log("okii")*/).then(()=> console.log("Base de datos conectada"))
        .catch(e => console.log(e));
        
    }catch(e){
        console.log(e);
    }
}

module.exports = {connectDB};

/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://BertoNebrija:nebrija@cluster0.cg1wd.mongodb.net/ByteCommunity?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("ByteCommunity").collection("videosCollection");
  // perform actions on the collection object
  console.log("conectado");
  console.log(collection);
  console.log("Error: " + err);
  client.close();
});*/
