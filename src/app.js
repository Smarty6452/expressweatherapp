const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express();
const port = process.env.PORT ||  9000 ;

//public static path
// console.log(path.join(__dirname, "../public"))
const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")




// using hbs 
app.set('view engine', 'hbs');  //engine
app.set('views', template_path );  //default views changed to tmplates
hbs.registerPartials(partials_path) //to use partials first register

app.use(express.static(static_path))

//routing
app.get("" ,(req, res)=> {
    res.render("index")
}) 

app.get("/about" ,(req, res)=> {
    res.render("about")
}) 

app.get("/weather" ,(req, res)=> {
    res.render("weather")
}) 
app.get("*" ,(req, res)=> {
    res.render("404error", {
        errorMsg :  'Opss! Page NOt Found'
    })
}) 

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})