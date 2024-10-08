//Database imports
const pgPool = require('./db/pgWrapper');
const tokenDB = require('./db/tokenDB')(pgPool);
const userDB = require('./db/userDB')(pgPool);

//OAuth imports
const oAuthService = require('./auth/tokenService')(userDB, tokenDB);
const oAuth2Server = require('node-oauth2-server');

//Express
const express = require('express');
const app = express();
app.oauth = oAuth2Sever({
    model: oAuthService,
    grants: ['password'],
    debug: true,
});

const testAPIService = require('./test/testAPIService');
const authenticator = require('./auth/authenticator');
const testAPIRoutes = require('./auth/routes')(
    express.Router(),
    app,
    authenticator
);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(app.oauth.errorHandler());
app.use('/auth', routes);
app.use('/test', testAPIRoutes);
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});