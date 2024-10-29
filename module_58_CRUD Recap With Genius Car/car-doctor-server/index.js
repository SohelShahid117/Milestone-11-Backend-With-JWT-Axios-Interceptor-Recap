const express = require('express')
const app = express()

//why use cors?-->collect ans from chatgpt,google,youtube
const cors = require('cors');

//why use dotenv & config()
require('dotenv').config()
const port = process.env.PORT || 5000;

const jwt = require('jsonwebtoken');

//why use 'cookie-parser' & what is cookie?
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

//this is from mongoDB
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

//abar middleware banao nije nije
const logger = async(req,res,next)=>{
  // console.log("call korlam : ",req.host,req.originalUrl);
  console.log("call korlam : ",req.hostname,req.originalUrl);
  next();
}

const verifyToken = async(req,res,next)=>{
  console.log(req.cookies)
  const tokenNow = req.cookies?.tokennn;
  console.log("token in middleware--->server side:",tokenNow);
  if(!tokenNow){
    // return res.send({message:"not authorized"});
    return res.status(401).send({message:"not authorized"});
  }
  jwt.verify(tokenNow,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
    //err
    if(err){
      console.log("err is :",err)
      return res.status(401).send({message:"not authorized"});
    }
    //decoded--->if token is valid then it would be decoded
    // console.log("value in the token:",tokenNow)
    console.log("value in the token:",decoded)
    req.user = decoded;
    next();
  })
  // next();
}

//this is from mongoDB
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('Car_Doctor_Recap_DB').collection('services')
    // console.log(serviceCollection);

    //app.post("/bookingOrders",async(req,res)=>{...}
    const bookingOrdersCollection = client.db('Car_Doctor_Recap_DB').collection('bookingOrders')

   //auth related API
   //axios.post("http://localhost:5000/jwt",user,{withCredentials:true}) from Login Component
   app.post("/jwt",logger,async(req,res)=>{
    const user = req.body;
    console.log('user is-',user)
    // const token = jwt.sign(user,'secret', {expiresIn:'1h'});
    // res.send(user)
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'3h'});
    
    res
    .cookie('tokennn',token,{
      httpOnly:true,
      secure:false,    //http://localhost:5000/--->https nai tai secure:false
      // sameSite:'none'  //coz client & server both r running in different port
    })
    .send({success:true})
    // res.send(token)
   })
   
   //service related API
   //fetch('http://localhost:5000/services') from Home repo Service component
    app.get("/services",logger,async(req,res)=>{
      const result = await serviceCollection.find().toArray();
      res.send(result);
    })

    //loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`) from main.jsx & Checkout component
    app.get("/services/:id",async(req,res)=>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)}
      const options = {projection: { _id: 1,service_id:1,img:1, title: 1, price:1 },}
      //1 dile data t DB teke asbe r 0 dile asbena;img:1-->img asbe
      // const result= await serviceCollection.findOne(query)
      const result= await serviceCollection.findOne(query,options)
      res.send(result)
    })

    //fetch("http://localhost:5000/bookingOrders",{...} from  Checkout component
    app.post("/bookingOrders",async(req,res)=>{
      const bookingOrders = req.body;
      console.log(bookingOrders)
  
      const result = await bookingOrdersCollection.insertOne(bookingOrders)
      res.send(result)
    })

    //const url = `http://localhost:5000/bookingsOrder?email=${user?.email}`; from BookingsOrder Component
    app.get("/bookingsOrder",logger,verifyToken,async(req,res)=>{
      console.log("query email is:",req.query.email)
      // console.log("token is:",req.cookies.token)
      // console.log("token is:",req.cookie.token)
      // console.log("token is:",req.cookies)   //.cookie('tokennn',token,{}
      console.log("token is:",req.cookies.tokennn)   //.cookie('tokennn',token,{}
      // const  query ={email:req.query?.email}
      // console.log("from verifyToken decoded user is:",req.user)
      console.log("from verifyToken decoded user is:",req.user.email)

      if(req.query.email !=req.user.email){
        return res.status(403).send({message:"forbidden access"})
      }
      let query = {};
      if(req.query?.email){
        // let query ={email:req.query.email}
       query ={email:req.query.email}
      }
      const result = await bookingOrdersCollection.find(query).toArray();
      res.send(result)
    })

    //fetch(`http://localhost:5000/bookingsOrder/${_id}`,{...} from BookingsOrder Component
    app.delete("/bookingsOrder/:id",async(req,res)=>{
      const id = req.params.id;
      let query = {_id : new ObjectId(id)};
      // const query = { _id : new ObjectId (id)};
      const result = await bookingOrdersCollection.deleteOne(query);
      res.send(result);
      console.log(result)
    })

    //fetch(`http://localhost:5000/bookingsOrder/${id}`,{...}  from BookingsOrder Component
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