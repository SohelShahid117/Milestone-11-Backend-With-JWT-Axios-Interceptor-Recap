const express = require('express')
const app = express()
const cors = require('cors');

require('dotenv').config()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// console.log(process.env)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
/*
const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.hfhifix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
*/
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hfhifix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('Car_Doctor_Recap_DB').collection('services')
    // console.log(serviceCollection);
    const bookingOrdersCollection = client.db('Car_Doctor_Recap_DB').collection('bookingOrders')

    app.get("/services",async(req,res)=>{
      const result = await serviceCollection.find().toArray();
      res.send(result);
    })

    app.get("/services/:id",async(req,res)=>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)}
      const options = {projection: { _id: 1,service_id:1,img:1, title: 1, price:1 },}
      //1 dile data t DB teke asbe r 0 dile asbena;img:1-->img asbe
      // const result= await serviceCollection.findOne(query)
      const result= await serviceCollection.findOne(query,options)
      res.send(result)
    })

    app.post("/bookingOrders",async(req,res)=>{
      const bookingOrders = req.body;
      console.log(bookingOrders)
  
      const result = await bookingOrdersCollection.insertOne(bookingOrders)
      res.send(result)
    })

    app.get("/bookingsOrder",async(req,res)=>{
      console.log(req.query)
      // const  query ={email:req.query?.email}
      if(req.query?.email){
        // let query ={email:req.query.email}
       query ={email:req.query.email}
      }
      const result = await bookingOrdersCollection.find(query).toArray();
      res.send(result)
    })

    app.delete("/bookingsOrder/:id",async(req,res)=>{
      const id = req.params.id;
      let query = {_id : new ObjectId(id)};
      // const query = { _id : new ObjectId (id)};
      const result = await bookingOrdersCollection.deleteOne(query);
      res.send(result);
      console.log(result)
    })

    app.patch("/bookingsOrder/:id",async(req,res)=>{
      const updateBooking = req.body;
      console.log(updateBooking)
      const id = req.params.id;
      // const query = {_id : new ObjectId(id)};
      const filter = {_id : new ObjectId(id)};

      // const filter = { title: "Random Harvest" };
      const updateDoc = {
        $set: {
          status:updateBooking.status
        },
      };
      // const options = { upsert: true };
      // const result = await bookingOrdersCollection.updateOne(filter, updateDoc, options);
      const result = await bookingOrdersCollection.updateOne(filter, updateDoc);
      res.send(result)


    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`my server is running at :http://localhost:${port}`)
})