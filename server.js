import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

//import routes
import tutorialRoutes from "./routes/tutorial.routes.js";

dotenv.config()

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Test Server Express API with Swagger",
            version: "0.1.0",
            description: `This is a simple CRUD API application made with Express and documented with Swagger. [Swagger Specification](http://localhost:8000/swagger-json)`,
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Janith Gamage",
                url: "https://janith-gamage.netlify.app",
                email: "janithgamage1.ed@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true, })
);
app.use('/tutorials', tutorialRoutes);


app.get('/', (req, res) => {
    res.send(`Test Server up and running on PORT : ${PORT}`)
})
app.get("/swagger-json", (req, res) => {
    res.json(specs);
});

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.azyqjuo.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`))
    })
    .catch((error) => {
        console.log(error.message)
    });