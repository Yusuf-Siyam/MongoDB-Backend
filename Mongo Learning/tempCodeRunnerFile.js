mongoose.connect('mongodb://127.0.0.1:27017/test');
.then(()=>console.log("db is connect"));
.catch((error)=>{
console.log('db is not connect ');
console.log(error);
process.exit(1);
});