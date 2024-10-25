const express = require('express')
const app = express()
const cors = require('cors');

require('dotenv').config()
const port = process.env.PORT || 5000;

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


//middleware
// app.use(cors());

//for token,here add origin & credentials
app.use(cors(
  {
    origin:['http://localhost:5173'],
    credentials:true
  }
));
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')

  //https://expressjs.com/en/resources/middleware/cookie-parser.html
  console.log('Cookies: ', req.cookies)
  console.log('Signed Cookies: ', req.signedCookies)
})

// console.log(process.env)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
console.log(process.env.ACCESS_TOKEN_SECRET)


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

   //auth related API
   app.post("/jwt",async(req,res)=>{
    const user = req.body;
    console.log('user is-',user)
    // const token = jwt.sign(user,'secret', {expiresIn:'1h'});
    // res.send(user)
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'3h'});
    res
    .cookie('token',token,{
      httpOnly:true,
      secure:false,    //http://localhost:5000/--->https nai tai secure:false
      // sameSite:'none'  //coz client & server both r running in different port
    })
    .send({success:true})
    // res.send(token)
   })
   
   //service related API
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
      console.log("token is:",req.cookies.token)
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

/*
1.what is JWT & what is the importance of JWT
2.How use JWT?
3.what is Access Token & what is refresh Token?
4.
*/