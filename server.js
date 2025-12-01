const app = require('./src/app');
const connectDB = require('./src/config/db.config');

const PORT = process.env.PORT || 5000;


// connect to database
connectDB()
.then(()=>{
   app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
   })
   console.log('Connected to MongoDB Successfully');  
})
.catch((error)=>{
    console.log('Failed to connect MongoDB', error);

})

app.get('/',(req,res)=>{
    res.send('CourseMaster Backend is running');
})

