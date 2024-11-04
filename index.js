import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import routing from "./Router/ReciepeRouter.js";
import connectDb from "./Database/Dbconfig.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connectDb();

// Route for recipes
app.use("/api/reci", routing);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error details to the console
    res.status(500).json({ error: 'Something went wrong!' });
});

// Set the port and start the server
const PORT = process.env.PORT || 5000; // Default to 5000 if not set
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
