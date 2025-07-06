require('dotenv').config();

const { google} = require('googleapis');
const { OAuth2Client, OAuth2Client } = require('google-auth-library');
const {fs} = require('fs');
const path = require('path');
const {express} = require('express');

const PORT = 3000;
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

const SCOPES = [
    'https://www.googleapis.com/auth/forms.body',
    'https://www.googleapis.com/auth/forms.responses.readonly'
];

const app = express();

async function loadCredentials() {
    const OAuth2Client = new OAuth2Client(
        process.env.OAUTH_CLIENT_ID,
        process.env.OAUTH_CLIENT_SECRET,
        REDIRECT_URI
    );
    console.log('OAuth2Client initialized with client ID and secret');
}

async function saveToken(tokens){

};

async function loadSavedToken() {
    
};

async function authorizeUser(){

};

async function getAuthenticatedClient(){
    await loadCredentials();
    let client = OAuth2Client;

    if(!client || !await loadSavedToken()){
        console.log("No valid tokens found. Initiating user authorization flow...");
        client = await authorizeUser();
    }else if( client.credentials && client.credentials.expiry_date > Date.now() + 60*1000 ){
        console.log("Token expired.");
        try {
            
        } catch (err) {
            
        }
    }
