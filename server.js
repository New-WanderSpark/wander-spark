const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const logger = require( 'morgan' );
const routes = require( './routes' );
const passport = require( 'passport' );
const path = require( 'path' );

/*
* Configure Express Sever
*/ 
const PORT = process.env.PORT || 3001;
const app = express();
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( passport.initialize() );
app.use( function ( req, res, next ) {
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );

    if ( req.method === 'OPTIONS' ) {
        res.send( 200 );
    } else {
        return next();
    }
} );

/*
* Load passport strategies
*/ 
const localSignupStrategy = require( './passport/local-signup' );
const localLoginStrategy = require( './passport/local-login' );
passport.use( 'local-signup', localSignupStrategy );
passport.use( 'local-login', localLoginStrategy );

/*
* Pass the authenticaion checker middleware
*/ 
const authCheckMiddleware = require( './middleware/auth-check' );
app.use( '/api', authCheckMiddleware );

/*
* Connect mongoose to database
*/ 
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/wanderSpark_dev',
    { 'useMongoClient': true }
);

/*
* Setup routing
*/ 
app.use( express.static( path.join( __dirname, 'client/build' ) ) );
app.use( '/', routes );
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}

app.listen( PORT, () => {
    console.log( `🌎 ==> Server now on port ${PORT}!` );
} );
