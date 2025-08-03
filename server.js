const express = require("express")
const app = express()
const PORT = 3000 
const cors = require("cors");

app.use(express.json()); 

app.use(cors({
  origin: ["http://localhost:5173", "https://niroggyanclient.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


const {connectDB} = require("./src/config/database")

const doctorsRouter = require("./src/routers/doctorsDetails")
const appointmentsRouter = require("./src/routers/appointmentsRouter")


app.use("/", doctorsRouter)
app.use("/", appointmentsRouter)



connectDB().then(() => {
    console.log("Databse connected succesfully!!")
    app.listen(PORT , () => {
        console.log(`SERVER RUNNING ON http://localhost:${PORT}`)
    })
}).catch(() => {
    console.log("FAILED TO CONNECT SERVER!!")
})





