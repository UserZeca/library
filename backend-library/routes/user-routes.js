const express = require('express');

const { 
    addUser, 
    getAllUsers,
    getUser, 
    updateUser, 
    deleteUser, 
    uploadProfileImage,
    getProfileImage,
   
} = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/user/profile-image/upload', uploadProfileImage);
router.get('/user/profile-image/:id', getProfileImage);


module.exports = {
    routes: router

}