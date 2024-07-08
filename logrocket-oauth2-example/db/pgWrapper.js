// This code is used as a Postgres wrapper to encapsulate the queries we'll make in the db folder

const Pool = require('pg').Pool;

function query(queryString, cbFunc) {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'logrocket_oauth2',
        password: 'postgres',
        port: 5432,
    });
    pool.query(queryString, (error, results) => {
        cbFunc(setResponse(error,results));
    });
}

function setResponse(error, results) {
    return {
        error: error,
        results: results ? results : null,
    };
}

module.exports = {
    query,
};

/* The most important part of this code is the query() function. Instead of throwing
the Postgres connection pool object everywhere, we're going to centralize it in this file and export the function.*/