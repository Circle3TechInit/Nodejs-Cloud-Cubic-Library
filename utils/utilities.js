
// Functions

// Sort Section name for dynamic requests.
const sortSectionName = (sectionNameValue) => {
    switch (sectionNameValue) {
        case 'image':
            return 'image';
        case 'music':
            return 'music';
        case 'video':
            return 'video';
        case 'files':
            return 'file';
        default:
            throw new Error('Section name is not valid !!!');
    }
};

// Check http response for errors
const checkResStatus = (response) => {
    const { status, error } = response;
    if (status === 'error' || status === 'false')
        throw new Error(error);
};


// Check Values validity

const checkGetAllCubics = (token,appID) => {
    if (token == '' || typeof token !== 'string')
        throw new Error('Token is missing !!!')
    if (appID == '' || typeof appID !== 'string')
        throw new Error('AppId is missing !!!')
}

const checkDelObjectValues = (objectValue) => {
    if (objectValue == null || typeof objectValue !== 'object')
        throw new Error('Provide valid data object ...!');
    if (objectValue.sectionName == null || typeof objectValue.sectionName !== 'string')
        throw new Error('Provide valid section name ...!');
}

const checkCubicSingleValues = (cubicId, cubicSectionName) => {
    if (cubicId == null || typeof cubicId !== 'string' || cubicId === '' || cubicId === '')
        throw new Error('Provide valid cubic ID ...!');
    if (cubicSectionName == null || typeof cubicSectionName !== 'string' || cubicSectionName === '')
        throw new Error('Provide cubic section name you wish to access ...!');
}

const checkGetFolderValues = (cubicId, cubicSectionName, folderName) => {
    if (cubicId == null || typeof cubicId !== 'string' || cubicId === '')
        throw new Error('Provide valid cubic ID ...!');
    if (cubicSectionName == null || typeof cubicSectionName !== 'string' || cubicSectionName === '')
        throw new Error('Provide cubic section name you wish to access ...!');
    if (folderName == null || typeof folderName !== 'string')
        throw new Error('Provide valid Folder name ...!');
}

const checkCreateFolderValues = (dataObject) => {
    if (dataObject == null || typeof dataObject !== 'object')
        throw new Error('Provide valid object argument ...!');
    if (dataObject.cubicId == null || typeof dataObject.cubicId !== 'string' || dataObject.cubicId === '')
        throw new Error('Provide valid cubic ID ...!');
    if (dataObject.cubicName == null || typeof dataObject.cubicName !== 'string' || dataObject.cubicName === '')
        throw new Error('Provide valid cubic name ...!');
    if (dataObject.sectionName == null || typeof dataObject.sectionName !== 'string' || dataObject.sectionName === '')
        throw new Error('Provide valid section name ...!');
    if (dataObject.folderName == null || typeof dataObject.folderName !== 'string' || dataObject.folderName === '')
        throw new Error('Provide valid folder name ...!');
}

const checkDeleteFolderValues = (fieldsData) => {
    if (fieldsData == null || typeof fieldsData !== 'object')
        throw new Error('Provide valid data object ...!');
    if (fieldsData.cubicId == null || typeof fieldsData.cubicId !== 'string' || fieldsData.cubicId === '')
        throw new Error('Provide valid cubic ID ...!');
    if (fieldsData.cubicName == null || typeof fieldsData.cubicName !== 'string' || fieldsData === '')
        throw new Error('Provide valid cubic name ...!');
    if (fieldsData.sectionName == null || typeof fieldsData.sectionName !== 'string' || fieldsData.sectionName === '')
        throw new Error('Provide valid section name ...!');
    if (fieldsData.folderName == null || typeof fieldsData.folderName !== 'string' || fieldsData.folderName === '')
        throw new Error('Provide valid folder name ...!');
    if (fieldsData.folderId == null || typeof fieldsData.folderId !== 'string' || fieldsData.folderId === '')
        throw new Error('Provide valid folder ID ...!');
}

const singleUploadCheckValues = (meta, fieldname, fileArray) => {
    if (meta == null || typeof meta !== 'object')
        throw new Error('Provide valid meta data object ...!');
    if (fieldname == null || typeof fieldname !== 'string' || fieldname === '')
        throw new Error('Provide valid file field name ...!');
    if (fileArray == null || typeof fileArray !== 'object')
        throw new Error('Provide valid array of files ...!');
}

const folderUploadCheckValues = (meta, fieldname, fileArray) => {
    if (meta == null || typeof meta !== 'object')
        throw new Error('Provide valid meta data object ...!');
    if (fieldname == null || typeof fieldname !== 'string')
        throw new Error('Provide valid file field name ...!');
    if (fileArray == null || typeof fileArray !== 'object')
        throw new Error('Provide valid array of files ...!');
}



// Exports
export {
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
};