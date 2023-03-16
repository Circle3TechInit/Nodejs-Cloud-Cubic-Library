// Package Imports
import fetch from 'node-fetch';
import axios from "axios";
import process from 'node:process';


// Global Vars
const abortController = new AbortController();

// Helper functions
import { createForm } from '../utils/form.js';
import { 
    sortSectionName, 
    checkResStatus, 
    checkGetAllCubics,
    checkDelObjectValues, 
    checkCubicSingleValues,
    checkGetFolderValues,
    checkCreateFolderValues,
    checkDeleteFolderValues,
    singleUploadCheckValues,
    folderUploadCheckValues 
} from '../utils/utilities.js'



// Fn
/**
    ** Get a specific section from the Cubic eg: 'image', 'music', 'video', 'files'.
    * @param {string}  token The token from cloud cubic account.
    * @param {string}  appID The from cloud cubic account .
    * @param {number}  timeout The time to take before a request is aborted .
    * @return {object}  Returns a cubic object with methods to interact with your cubic .
    */
class Cubic {
    constructor(token,appID,timeout) {
        this.token = token;
        this.appID = appID;
        this.timeout = timeout;
        this.signalTimeout = function(timeToOut) {
            return setTimeout(() => abortController.abort(), timeToOut);
        }
    }

    
    /**
    ** Get all Delivery Cubics.
    * @param {null}    No parameter.
    * @return {array} Returns an array with the with each cubic as an object, returns empty array if no cubic .
    */
    async getAllCubics() {
        try {
            checkGetAllCubics(this.token,this.appID)
            
            const url = `https://cubic.simsknightcloudservices.co.za/api/v1/cubic_cdn/all`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Get specific cubic by id.
    * @param {string}    cubicId The id of .
    * @return {object}     Returns an object representing the cubic .
    */
    async getCubic(cubicId) {
        try {
            checkGetAllCubics(this.token,this.appID);
            if (cubicId == null || typeof cubicId !== 'string' || cubicId === '')
                throw new Error('Provide valid cubic ID ...!');
            const url = `https://cubic.simsknightcloudservices.co.za/api/v1/cubic_cdn/single/${cubicId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Get a specific section from the Cubic eg: 'image', 'music', 'video', 'files'.
    * @param {string}  cubicId The id of the cubic your wish to access.
    * @param {string}  cubicSectionName The section of the cubic you wish to access, eg: 'image', 'music', 'video', 'files'.
    * @return {object}  Returns an object .
    */
    async getCubicSection(cubicId, cubicSectionName) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkCubicSingleValues(cubicId, cubicSectionName);

            const url = `https://cubic.simsknightcloudservices.co.za/api/v1/cubic_cdn/single/section/${cubicId}/${cubicSectionName}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Get singles folder section from the Cubic eg: 'image', 'music', 'video', 'files'.
    * @param {string}  cubicId The id of the cubic your wish to access.
    * @param {string}  cubicSectionName The section of the cubic you wish to access, eg: 'image', 'music', 'video', 'files'.
    * @return {object}  Returns an object .
    */
    async getCubicSectionSingle(cubicId, cubicSectionName) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkCubicSingleValues(cubicId,cubicSectionName)
        
            const url = `https://cubic.simsknightcloudservices.co.za/api/v1/cubic_cdn/single/section/${cubicId}/${cubicSectionName}/singles`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Get folders section from the Cubic eg: 'image', 'music', 'video', 'files'.
    * @param {string}  cubicId The id of the cubic your wish to access.
    * @param {string}  cubicSectionName The section of the cubic you wish to access, eg: 'image', 'music', 'video', 'files'.
    * @return {object}  Returns an object .
    */
    async getCubicSectionFolders(cubicId, cubicSectionName) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkCubicSingleValues(cubicId,cubicSectionName);

            const url = `https://cubic.simsknightcloudservices.co.za/api/v1/cubic_cdn/folder/section/${cubicId}/${cubicSectionName}/folders`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Get single folder section from the Cubic .
    * @param {string}  cubicId The id of the cubic your wish to access.
    * @param {string}  cubicSectionName The section of the cubic you wish to access, eg: 'image', 'music', 'video', 'files'.
    * @param {string}  folderName The name of the folder you wish to access.
    * @return {object}  Returns an object .
    */
    async getCubicFolder(cubicId, cubicSectionName, folderName) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkGetFolderValues(cubicId, cubicSectionName, folderName);

            const url = `https://cubic.simsknightcloudservices.co.za/api/v1/cubic_cdn/folder/section/${cubicId}/${cubicSectionName}/folders/${folderName}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data)
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Get single folder section from the Cubic .
    * @param {object}  dataObject The object with keys: "cubicId" "cubicName" "sectionName" "folderName".
    * @return {object}  Returns an object .
    */
    async createFolder(dataObject) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkCreateFolderValues(dataObject);

            const url = "https://cubic.simsknightcloudservices.co.za/backend/api/v1/cdelivery/card/add/folder";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                body: JSON.stringify(dataObject),
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Delete folder in the Cubic .
    * @param {object}  fieldsData The id of the cubic your wish to access.
    * @return {object}  Returns an object .
    */
    async deleteFolder(fieldsData) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkDeleteFolderValues(fieldsData);

            const { sectionName } = fieldsData;
            const sortedSectionValue = sortSectionName(sectionName);
            const url = `https://cubic.simsknightcloudservices.co.za/backend/api/v1/cdelivery/${sortedSectionValue}/folder/delete/full`;
            const dataToServer = fieldsData;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                body: JSON.stringify(dataToServer),
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Upload file to singles folder inside the Cubic .
    * @param {object}  meta A object with keys "cardId" "cardName" "sectionName" "sectionTitle".
    * @param {string}  fieldname The upload name of the files u wish to upload, eg: 'eImage', 'eMusic', 'eFideo', 'eFile'.
    * @param {array}  fileArray The name of the folder you wish to access.
    * @return {object}  Returns an object .
    */
    async uploadSectionSingle(meta, fieldname, fileArray) {
        try {
            checkGetAllCubics(this.token,this.appID);
            singleUploadCheckValues(meta, fieldname, fileArray);

            const { cubicId, cubicName, sectionName, sectionTitle } = meta;
            const newMeta = { cardId: cubicId, cardName: cubicName, sectionName, sectionTitle };
            const sortedSectionValue = sortSectionName(sectionName);
            const url1 = `https://cubic.simsknightcloudservices.co.za/backend/api/v1/cdelivery/${sortedSectionValue}/singles/upload`;
            const { status, formToPost, headers, error } = createForm(newMeta, fieldname, fileArray);
            if (error) throw new Error(error);
            const uploader = await axios.post(url1, formToPost, {
                'maxContentLength': Infinity,
                'maxBodyLength': Infinity,
                headers: {
                    ...headers,
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            clearTimeout(this.signalTimeout(this.timeout));
            if (uploader.status !== 201)
                throw new Error(uploader.statusText);
            return uploader.data
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    /**
    ** Upload file to folder in the Cubic .
    * @param {object}  meta A object with keys "userId" "cardId" "cardName" "sectionName" "sectionTitle".
    * @param {string}  fieldname The upload name of the files u wish to upload, eg: 'eImage', 'eMusic', 'eFideo', 'eFile'.
    * @param {array}  fileArray The name of the folder you wish to access.
    * @return {object}  Returns an object .
    */
    async uploadSectionFolder(meta, fieldname, fileArray) {
        try {
            checkGetAllCubics(this.token,this.appID);
            folderUploadCheckValues(meta, fieldname, fileArray);

            const { sectionName } = meta;
            const sortedSectionValue = sortSectionName(sectionName);
            const url1 = `https://cubic.simsknightcloudservices.co.za/backend/api/v1/cdelivery/${sortedSectionValue}/folder/upload`;
            const { status, formToPost, headers, error } = createForm(meta, fieldname, fileArray);
            if (error) throw new Error(error);
            const uploader = await axios.post(url1, formToPost, {
                'maxContentLength': Infinity,
                'maxBodyLength': Infinity,
                headers: {
                    ...headers,
                    'Authorization': `${this.token}`
                },
                signal: abortController.signal
            });
            clearTimeout(this.signalTimeout(this.timeout));
            
            if (uploader.status !== 200)
                throw new Error(uploader.statusText);

            return uploader.data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };

    /** 
        * @param {object}  dataObject A object with keys "userId" "cardId" "cardName" "sectionName" "sectionTitle".
        * @return {object}  Returns an object .
    */
    async singleDeleteFile(dataObject) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkDelObjectValues(dataObject);
            const { sectionName } = dataObject;
            const sortedSectionValue = sortSectionName(sectionName);
            const url = `https://cubic.simsknightcloudservices.co.za/backend/api/v1/cdelivery/${sortedSectionValue}/singles/delete`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                body: JSON.stringify(dataObject),
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            console.log(error)
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };


    // cubicId,cubicName,sectionName,sectionTitle,fileName,fileSize,folderId,folderName.
    /**
     * 
     * @param {object} dataObject A object with keys "userId" "cardId" "cardName" "sectionName" "sectionTitle"
     * @returns {object}  Returns an object .
    */
    async folderDeleteFile(dataObject) {
        try {
            checkGetAllCubics(this.token,this.appID);
            checkDelObjectValues(dataObject);

            const { sectionName } = dataObject;
            const sortedSectionValue = sortSectionName(sectionName);
            const url = `https://cubic.simsknightcloudservices.co.za/backend/api/v1/cdelivery/${sortedSectionValue}/folder/delete`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.token}`
                },
                body: JSON.stringify(dataObject),
                signal: abortController.signal
            });
            const data = await response.json();
            checkResStatus(data);
            clearTimeout(this.signalTimeout(this.timeout));
            return data;
        } catch (error) {
            if (error.name === 'AbortError')
                throw new Error('Request timed out...!');
            else
                throw new Error(error.message);
        }
    };
};







// Export the class
export default Cubic;