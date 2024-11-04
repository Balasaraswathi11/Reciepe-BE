import multer from "multer"; // Middleware for file uploads
import path from "path"; // For handling file paths

// Configure storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now(); // Use a timestamp for unique filenames
        const extName = file.originalname.split(".").pop(); // Extract the file extension
        const fileName = `${timestamp}.${extName}`; // Create filename with timestamp and extension
        cb(null, fileName); // Save the file with the unique name
    }
});

// Set up Multer with the defined storage configuration
export const uploadFiles = multer({ storage }).single("image"); // Adjust "file" based on your form field name
