let userDB;
let tokenDB;

module.exports = (injectedUserDB, injectedTokenDB) => {
    userDB = injectedUserDB;
    tokenDB = injectedTokenDB;

    return {
        getClient,
        saveAccessToken,
        getUser,
        grantTypeAllowed,
        getAccessToken,
    };
};

function getClient(clientID, clientSecret, cbFunc) {
    const client = {
        clientID,
        clientSecret,
        grants: null,
        redirectUris: null,
    };

    cbFunc(false, client);
}

function grantTypeAllowed(clientID, grantType, cbFunc) {
    cbFunc(false, true);
}

function getUser(username, password, cbFunc) {
    userDB.getUser(username, password, cbFunc);
}

function getAccessToken(bearerToken, cbFunc) {
    tokenDB.getUserIDFromBearerToken(bearerToken, (userID) => {
        const accessToken = { 
            user: {
                id: userID,
            },
          expires: null,
        };

        cbFunc(userID === null, userID === null ? null : accessToken);
    });
}

/* For each of its default actions, we need to provide our own implementation that calls our database repository 
to save a new user, as well as a new access token to retrieve them or get the client application.*/