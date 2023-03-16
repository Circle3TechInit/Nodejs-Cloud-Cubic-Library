// Package Import
import {
    describe,
    it
} from 'mocha';
import {
    expect,
    assert,
    should
} from 'chai';
import Cubic from '../module/index.js';


// Vars
import {
    obj,
    objDel,
    objFolder,
    objDelFolder,
    objDelFoldFile,
    files,
    token
} from '../data.js';

// Init Cubic Class
const cubicHandler = new Cubic(token);
const cubicHandler1 = new Cubic();


describe('Test Cubic Delivery API Library.', () => {
    beforeEach((done) => { //Before each test we empty the database
        console.log('Unit Testing Beginning ...') 
        done()  
    });
    /*
     * Test the Get all Cubics Function
     */
    describe('Get Cubics.', () => {

        context('Should return error', function () {
            it('It should return Object, with keys: success and error', async () => {
                const res = await cubicHandler1.getAllCubics();
                // console.log(res)
                expect(res)
                    .to.be.an('object')
                    .to.have.all.keys('status', 'route', 'cubics');
                expect(res.status).to.be.an('string');
                expect(res.route).to.be.an('string');
                expect(res.cubics).to.be.an('array');
            }).timeout(10000);
        })
    })

    describe('Get Cubic.', () => {
        it('It should return Object, with keys: success, data or error',async () => {
            try {
                const res = await cubicHandler.getCubic(obj.cubicId);
                console.log(res);
                expect(res).to.be.an('object');
                expect(res).to.have.all.keys('status', 'route', 'cubic');
            } catch (error) {
                expect(error).to.be.an('object');
            }
        });
    });

    describe('Get Cubic Section.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.getCubicSection(obj.cubicId, 'image');
            console.log(res);
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'route', 'cubicName', 'sectionName', 'sectionContents');
        }).timeout(10000);
    });

    describe('Get Cubic Section Single.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.getCubicSectionSingle(obj.cubicId, 'image');
            console.log(res);
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'route', 'cubicId', 'cubicName', 'cubicSection', 'cubicSectionTitle', 'singlesFolderContents');
        }).timeout(10000);
    });

    describe('Get Cubic Section Folders.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.getCubicSectionFolders(obj.cubicId, 'image');
            console.log(res);
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'route', 'cubicId', 'cubicName', 'cubicSectionName', 'cubicSectionTitle', 'titleContents');
        }).timeout(10000);
    });

    describe('Get Cubic Section Folder.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.getCubicFolder(obj.cubicId, 'image', 'Party');
            console.log(res)
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'route', 'cubicId', 'cubicName', 'sectionName', 'cubicSectionTitle', 'folder');
        }).timeout(10000);
    });

    describe('Cubic Create Folder.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.createFolder(obj);
            console.log(res);
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'message', 'newFolder');
        }).timeout(10000);
    });

    describe('Cubic Delete Folder.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.deleteFolder(objDel);
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'message');
        }).timeout(10000);
    });

    describe('Cubic Upload Files To Singles Folder.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.uploadSectionSingle(obj, 'eImage', files);
            console.log(res)
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'message', 'uploaded');
        }).timeout(10000);
    });

    describe('Cubic Upload Files To Folders Folder.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.uploadSectionFolder(objFolder, 'eImage', files);
            console.log(res)
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'message', 'cubicId', 'cardName', 'sectionName', 'sectionTitle', 'folderName', 'folderId', 'uploaded');
        }).timeout(10000);
    });

    describe('Delete File in Singles Folder.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.singleDeleteFile(objDelFolder);
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'message');
        }).timeout(10000);
    });

    describe('Delete File in Folders Folder.', () => {
        it('It should return Object, with keys: success, data',async () => {
            const res = await cubicHandler.folderDeleteFile(objDelFoldFile);
            console.log(res)
            expect(res).to.be.an('object');
            expect(res).to.have.all.keys('status', 'message');
        }).timeout(10000);
    });

});