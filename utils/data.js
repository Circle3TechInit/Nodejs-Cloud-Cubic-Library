// Data Vars
const obj1 = {
    cubicId: "628c8b12a7a22dabe38a70c0",
    cubicName: "ShepherdMedia",
    sectionName: "image",
    sectionTitle: "Singles",
    folderName: "TestFinalTwo",
}
const obj = {
    cubicId: "628c8b12a7a22dabe38a70c0",
    cubicName: "ShepherdMedia",
    sectionName: "image",
    sectionTitle: "Singles",
}

const objDel = {
    "cubicId": "628c8b12a7a22dabe38a70c0",
    "cubicName": "ShepherdMedia",
    "sectionName": "image",
    "folderName": "TestFinal",
    "folderId": "629db29cbff85e0cc2ef28d8",
}

const objFolder = {
    "cardId": "628c8b12a7a22dabe38a70c0",
    "cardName": "ShepherdMedia",
    "sectionName": "image",
    "sectionTitle": "folders",
    "folderName": "Test",
    "folderId": "6295d8871d51e9358864cdc2",
}
const objDelFolder = {
    "cubicId": "628c8b12a7a22dabe38a70c0",
    "cubicName": "ShepherdMedia",
    "sectionName": "image",
    "sectionTitle": "Singles",
    "fileName": "eImage-1653992433775.jpg",
}
const objDelFoldFile = {
    "cubicId": "628c8b12a7a22dabe38a70c0",
    "cubicName": "ShepherdMedia",
    "sectionName": "image",
    "folderName": "Test",
    "folderId": "6295d8871d51e9358864cdc2",
    "fileName": "eImage-1654000499940.jpg",
}


const files = [
    // {
    //     originalFilename: 'StreamOBS.jpg', 
    //     size: 45056, 
    //     filepath: 'C:\\Users\\SHE_PC\\Desktop\\Workstation\\Staticsresorces\\StreamOBS.jpg',
    //     // filepath: '/home/knightbuilt/Desktop/WorkStation/hari.jpg', 
    //     mimetype: 'image/jpeg', 
    //     originalname: 'StreamOBS.jpg'
    // },
    {
        originalFilename: 'mountains-5946500.jpg', 
        size: 6324224, 
        filepath: 'C:\\Users\\SHE_PC\\Desktop\\Workstation\\Staticsresorces\\mountains-5946500.jpg', 
        // filepath: '/home/knightbuilt/Desktop/WorkStation/hari.jpg', 
        mimetype: 'image/jpeg', 
        originalname: 'mountains-5946500.jpg'
    },
    // {
    //     originalFilename: 'technology.jpg', 
    //     size: 20480, 
    //     filepath: 'C:\\Users\\SHE_PC\\Desktop\\Workstation\\Staticsresorces\\technology.jpg', 
    //     // filepath: '/home/knightbuilt/Desktop/WorkStation/hari.jpg', 
    //     mimetype: 'image/jpeg', 
    //     originalname: 'technology.jpg'
    // },
    // {
    //     originalFilename: 'download.jpg', 
    //     size: 4096, 
    //     filepath: 'C:\\Users\\SHE_PC\\Desktop\\Workstation\\Staticsresorces\\download.jpg', 
    //     // filepath: '/home/knightbuilt/Desktop/WorkStation/hari.jpg', 
    //     mimetype: 'image/jpeg', 
    //     originalname: 'technology.jpg'
    // },
];



const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2N1YmljLnNpbXNrbmlnaHRjbG91ZHNlcnZpY2VzLmNvLnphIiwic3ViIjoiY29udGFjdEBzaW1za25pZ2h0Y2xvdWRzZXJ2aWNlcy5jby56YSIsImF1ZCI6Imh0dHBzOi8vY3ViaWMuc2ltc2tuaWdodGNsb3Vkc2VydmljZXMuY28uemEiLCJkYXRhIjp7InVzZXJJZCI6IjYwOThmNGMxZGViMmY5MTQ5OGNjYWQ2MyIsInVzZXJuYW1lIjoiQnJpYW4gTWFubmluZyIsImVtYWlsIjoiYnJpYW5AZ21haWwuY29tIiwiZGF0ZSI6IjIvMTAvMjAyMyJ9LCJpYXQiOjE2NzYwMjgwMjd9.Han88puzTEOg18up3AKeFyBNDNuOB1BHJ0PBDV36iofxNkrEGa7-7VbVF7FG4n2mu36Psql-vf4WgP27u4733A';

const appID = '6098f4c1deb2f91498ccad63';

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