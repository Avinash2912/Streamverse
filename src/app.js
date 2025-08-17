import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
        credentials: true,
        
    })
);

app.use(express.json({ limit: "10mb" }));

app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(express.static("public"));


app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export { app };
