import express from "express";

const app = express();
const port = 3000;

// Path to our public directory
app.use(express.static('public'))

// Create a virtual path prefix for files that are served by the express.static function
//app.use('/static', express.static('public'))

//Settig EJS  as the view engine
app.set('view engine','ejs')

app.get("/",(req,res)=>{
  res.render("index")
})

app.get("/about",(req,res)=>{
  res.render("about")
})

app.get("/contact", (req,res)=>{
  res.render("contact")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

