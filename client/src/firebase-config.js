

const dotenv = require('dotenv');
const assert = require('assert');


dotenv.config();

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;



assert(API_KEY, 'Error: Missing information needed to complete action');
assert(AUTH_DOMAIN, 'Error: Missing information needed to complete action');
assert(APP_ID, 'Error: Missing information needed to complete action');
assert(MEASUREMENT_ID, 'Error: Missing information needed to complete action')

module.exports = {
    
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID
    }

}