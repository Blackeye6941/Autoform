require('dotenv').config();

const { google} = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const {fs} = require('fs');
const path = require('path');
const {express} = require('express');

const PORT = 3000;
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

const SCOPES = [
    'https://www.googleapis.com/auth/forms.body',
    'https://www.googleapis.com/auth/forms.responses.readonly'
];

