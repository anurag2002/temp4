const express = require('express')
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const path = require("path");
const UserRoutes = require("./routes/userRoutes")
const DB = "mongodb+srv://anurag2002:9810541660@minorprojectg9.cxzyv.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(DB);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "html");

app.use("/", UserRoutes);

app.use(express.static(path.join(__dirname)));
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, "views")));

//Rendering Embedded JavaScript
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// app.set('views', path.join(__dirname, ''));


app.get("/register", (req, res) => res.sendFile(__dirname + "/registration_page.html"));
app.get('/home', (req, res) => res.sendFile(__dirname + "/home.html"));
app.get("/1984", (req, res) => res.sendFile(__dirname + "/1984.html"));
app.get("/chamber_of_secret", (req, res) => res.sendFile(__dirname + "/chamber_of_secret.html"));
app.get("/diary_of_a_young_girl", (req, res) => res.sendFile(__dirname + "/diary_of_a_young_girl.html"));
app.get("/dune", (req, res) => res.sendFile(__dirname + "/dune.html"));
app.get("/eclipse_review", (req, res) => res.sendFile(__dirname + "/eclipse_review.html"));
app.get("/harrypotter_sorcerer_stone", (req, res) => res.sendFile(__dirname + "/harrypotter_sorcerer_stone.html"));
app.get("/list_of_books", (req, res) => res.sendFile(__dirname + "/list_of_books.html"));
app.get("/order_of_phoneix", (req, res) => res.sendFile(__dirname + "/order_of_phoneix.html"));
app.get("/philosopher's_stone", (req, res) => res.sendFile(__dirname + "/philosopher's_stone.html"));
app.get("/relativity", (req, res) => res.sendFile(__dirname + "/relativity.html"));
app.get("/twilight_review", (req, res) => res.sendFile(__dirname + "/twilight_review.html"));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
