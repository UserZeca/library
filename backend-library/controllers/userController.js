'use strict'

const firebase = require('firebase/app');
const firebaseAuth = require('firebase/auth');
//const firebase = require('firebase');
const User = require('../models/user');
const db = require('../db');
const { cloudinary } = require('../utils/cloudinary');
const firestore = db.firestore();



const addUser = async (req, res) => {
    try{

        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.send('Data saved successfully');
    } catch(error){

        res.status(400).send(error.message);

    }
    

}


const getAllUsers = async (req, res, next) => {

    try{

        const users = await firestore.collection('users');
        const data = await users.get();
        const usersArray = [];

        if(data.empty){
            res.status(404).send('No users record found');

        }else{
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().name,
                    doc.data().email,
                    doc.data().password,
                    doc.data().profilePhotoPath,
                    doc.data().bookList

                );

                usersArray.push(user);

            });
            res.send(usersArray);
        }


    } catch {

        res.status(400).send(error.message);

    }


}


const getUser = async(req,res,next) =>{
    
    try {

      
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();

        if(!data.exists){
           res.status(404).send(req.params.id); 
         
        }else{

            res.send(data.data());

        }

        
    } catch (error) {
        
        res.status(400).send(error.message);

    }

}

const updateUser = async(req, res, next) => {
    try{

        const id = req.params.id;

        const data = req.body;
        const user = await firestore.collection('users').doc(id);

        await user.update(data);
        res.send('User record updated successfuly');


    }catch (error){

        res.status(400).send(error.message);

    }


}


const deleteUser = async (req, res, next) => {

    try {
        const id = req.params.id;
        await firestore.collection('users').doc(id).delete();
        res.send('Record deleted successfuly');

    } catch (error) {
        
        res.status(400).send(error.message);
    }


}


const uploadProfileImage = async (req, res, next) => {


    try{

        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary
        .uploader
        .upload(fileStr, {
            folder: 'library-users-profile-picture/',
            upload_preset: 'ml_default',
            

        });

        console.log(uploadedResponse);
        res.json({msg: "Success! Image uploads to Cloudinary server.", idImage: uploadedResponse.public_id})
        
        

        
    }catch (error){
        console.error(error);
        res.status(500).json({err: 'Something went wrong when trying to upload the image to Cloudinary server'});
    }

    

}


const getProfileImage = async(req, res, next) => {

    console.log(req.params.id);

    try {
       
        const {resources} = await cloudinary.search
        .expression(`public_id:library-users-profile-picture/${req.params.id}`)
        .sort_by('public_id','desc')
        .max_results(30)
        .execute();

       console.log(resources);

       res.json({msg: "Success! Image get from Cloudinary server.", resource: resources[0].url })
        

        
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Something went wrong when trying get the image from Cloudinary server'});
    }

}




// dkgxwlji4

module.exports = {

    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    uploadProfileImage,
    getProfileImage,
    
}