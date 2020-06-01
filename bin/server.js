const app = require("../app");
const http = require("http");

const todoRouter = require("../routes/todo_routes")
const userRoutes = require("../routes/user_routes")
console.log(__dirname)
app.use("/todo",todoRouter)
app.use("/user",userRoutes)
app.get("/",(req,res)=>{
    res.render("index",
    {
      
    })
});

port=8080;
const server = http.createServer(app)
server.listen(port)

server.on("listening",onListen)
server.on("error",onError)

function onError(error){
    console.log(error)
}
function onListen(){
    console.log(`listening on ${server.address().port}`)
}