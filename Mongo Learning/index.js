const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

//create schema
const productSchema=new mongoose.Schema({
  tittle:String,
  price:Number,
  description:String,
 createdAt: {
  type: Date,
  default: Date.now
}

});
//create model
const product=mongoose.model("Products",productSchema)


// mongoose
// .connect('mongodb://127.0.0.1:27017/testProductBd')
//   .then(() => console.log('Connected!'));

const connectDB=async ()=>{
  try{
   await mongoose.connect('mongodb://127.0.0.1:27017/testProductBd')
    console.log('db is connected');
    
  }catch(error){
    console.log('Db is not connected');
    console.log(error.mongoose);

    process.exit(1);
  }
};

app.listen(port, async() => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});

app.get('/', (req, res) => {
  res.send('Hello from MongoDB backend!');
});


