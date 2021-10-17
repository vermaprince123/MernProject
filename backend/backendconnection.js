
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
const mongo = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/mydb";

mongo.connect(url, function (err, db) {

  //for showing record of user:- profile
  app.get("/getalldata", (req, res) => {
    const database_mongo = db.db("mydb")
    const collection_mongo = database_mongo.collection("model")
    collection_mongo.find({}).toArray((function (err, result) {
      if (err) throw err;
      res.json(result);
    }))
  })

  //for singup page
  app.get("/insertdata/:firstname/:lastname/:personemail/:personmobile/:password", (req, response) => {
    if (err) throw err;
    const database_mongo = db.db("mydb")
    const collection_mongo = database_mongo.collection("model")

    const myobj = {
      person_first_name: req.params.firstname,
      person_last_name: req.params.lastname,
      person_email: req.params.personemail,
      person_mobile_number: req.params.personmobile,
      person_passwaord: req.params.password
    };
    
    collection_mongo.findOne({},(req,result)=>{
        if(myobj.person_email==result.person_email){
          response.json(result)
        }else{
          collection_mongo.insertOne(myobj,(req,res)=>{
            response.json(result);
          })
        }
    })
    
   })
  
 //for login page
  app.get("/loginvalue/:email/:password", (req,response)=>{
    const getvaluebyurl = {person_email:req.params.email,person_passwaord:req.params.password
    }
    const database_mongo = db.db("mydb")
    const collection_mongo = database_mongo.collection("model")
    collection_mongo.findOne(getvaluebyurl, (err,result)=>{
      if(err){
        console.log(err);
      }
      else if((result==null)){
        response.json({"person_email":"abc@gmail.com", "person_passwaord":req.params.password});
      }
      else if((getvaluebyurl.person_email==result.person_email) && (getvaluebyurl.person_passwaord==result.person_passwaord)){
         response.json(result);
      }
    })
  })

  app.listen(port, function () {
    console.log(`listening on ${port}`)
  });


});