
// Package Imports
import FormData from 'form-data';
import fs from 'fs';


// Vars


// Functions
const createForm = (keysObject, fieldname, fileArray) => {
    try {
        const formToPost = new FormData();
        let headers;
        // Append keysObject Value to the the Form.
        for(let key in keysObject) {
            formToPost.append(key, keysObject[key]);
        }
        // Append files Value to the the Form.
        fileArray.forEach(file => {
            const {originalFilename, size, filepath, mimetype, newFilename} = file;
            formToPost.append(fieldname, fs.createReadStream(filepath), {
                filename: originalFilename,
                contentType: mimetype,
                knownLength: size,
            });
        });
        // Extract form header for http request.
        headers = formToPost.getHeaders();
        return {status: true,formToPost, headers};
    } catch (error) {
        return {
            status: false,
            error: error.message
        }
    }
}



// Exports
export { createForm };