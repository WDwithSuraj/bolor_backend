const express = require('express');
const cors = require('cors')
const FormRoutes = require("./router/formRoutes");
const connection = require("./db/connection")

const app = express();


app.use(cors())
app.use(express.json())

app.use('/form', FormRoutes)


app.use('/', (req, res) => {
    res.json({ "msg": 'Welcome to  form builder api' })
})

app.listen('8080', async () => {
    try {
        await connection;
        console.log("db had been connected.")
        console.log("server is running.")
    } catch (error) {
        console.log(error.message)
    }

})