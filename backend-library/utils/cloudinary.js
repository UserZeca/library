'use strict';

const dotenv = require('dotenv');
const assert = require('assert');
const cloudinary = require('cloudinary').v2;


const {
    CLOUD_NAME,
    API_KEY_CLOUDINARY,
    API_SECRET_CLOUDINARY
} = process.env;

assert(CLOUD_NAME, 'Error: Missing information to connect to Cloudinary');
assert(API_KEY_CLOUDINARY, 'Error: Missing information to connect to Cloudinary');
assert(API_SECRET_CLOUDINARY, 'Error: Missing information to connect to Cloudinary')

dotenv.config();


cloudinary.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: API_KEY_CLOUDINARY,
    api_secret: API_SECRET_CLOUDINARY 
});
  
module.exports = {cloudinary}