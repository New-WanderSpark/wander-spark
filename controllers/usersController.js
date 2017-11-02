const User = require( '../models/users' );

// Defining methods for the tripsController
module.exports = {
    'create': function ( req, res ) {
        console.log( 'create' );
        User
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'update': function ( req, res ) {
        console.log( 'update' );
        console.log( req.user, req.body );
        // User
        //     .findOneAndUpdate( { '_id': req.user._id }, req.body )
        //     .then( dbModel => res.json( dbModel ) )
        //     .catch( err => res.status( 422 ).json( err ) );
    },
    'remove': function ( req, res ) {
        console.log( 'remove' );
        User
            .findById( { '_id': req.user._id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'findOne': function ( req, res ) {
        console.log( 'find one' );
        User
            .findOne( { 'userName': req.body.userName, 'password': req.body.password } )
            .then( dbModel => {
                if ( dbModel ) return res.json( dbModel );
                return res.send( 'User name and password not found' );
            } )
            .catch( err => res.status( 422 ).json( err ) );
    }
};
