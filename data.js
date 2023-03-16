// Data Vars

//* Please note values here apply only if you want to run test.

// Insert your token and app id that you get in your cloud cubic account
const token = '';
const appID = '';

// Change the values to the values that coresponds with the content-delivery cubic you wish to access
const obj1 = {
    cubicId: "", // the id of the content delivery cubic you wish to access, to find id use getAllCubics method first
    cubicName: "",// the name of the cubic you wish to access
    sectionName: "", // image, video, music, file
    sectionTitle: "Singles",
    folderName: "", // the name of the folder in the cubic you wish to access
}
const obj = {
    cubicId: "",// the id of the content delivery cubic you wish to access, to find id use getAllCubics method first
    cubicName: "",// the name of the cubic you wish to access
    sectionName: "",// image, video, music, file
    sectionTitle: "Singles",
}

const objDel = {
    "cubicId": "",
    "cubicName": "",
    "sectionName": "",// image, video, music, file
    "folderName": "",
    "folderId": "",
}
const objFolder = {
    "cardId": "",
    "cardName": "",
    "sectionName": "",// image, video, music, file
    "sectionTitle": "folders",
    "folderName": "",
    "folderId": "",
}
const objDelFolder = {
    "cubicId": "",
    "cubicName": "",
    "sectionName": "",// image, video, music, file
    "sectionTitle": "Singles",
    "fileName": "",
}
const objDelFoldFile = {
    "cubicId": "",
    "cubicName": "",
    "sectionName": "",
    "folderName": "",// image, video, music, file
    "folderId": "",
    "fileName": "",
}




//* Files Array, change the values with files that are in your system
const files = [
    {
        originalFilename: 'StreamOBS.jpg', 
        size: 45056, 
        filepath: 'C:\\Users\\SHE_PC\\Desktop\\Workstation\\Staticsresorces\\StreamOBS.jpg',
        mimetype: 'image/jpeg', 
        originalname: 'StreamOBS.jpg'
    },
    {
        originalFilename: 'mountains-5946500.jpg', 
        size: 6324224, 
        filepath: 'C:\\Users\\SHE_PC\\Desktop\\Workstation\\Staticsresorces\\mountains-5946500.jpg', 
        mimetype: 'image/jpeg', 
        originalname: 'mountains-5946500.jpg'
    }
];



















// Export
export {
    obj,
    obj1,
    objDel,
    objFolder,
    objDelFolder,
    objDelFoldFile,
    files,
    token,
    appID
}