const express = require('express');

const router = express.Router();

//Problem 1

router.get('/movies', function (req, res) {
    let movies = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']

    res.send(movies)
})

//Problem 2&3

router.get('/movies/:indexNumber', function (req, res) {
    let movies = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    const i = req.params.indexNumber

    if(i<movies.length){
        res.send(movies[i])
    } else {
        'Enter a valid indexNumber'
    }
})

//problem 4

router.get('/films', function (req, res) {
    
    let films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       
           res.send(films)

})

//problem 5

router.get('/films/:filmId', function (req, res) {
    let id = req.params.filmId
    let i = id-1
    let films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       if (i < films.length) {
           res.send(films[i])
       } else {
           'No movie exists with this id'
       } 

})



    

module.exports = router;

// adding this comment for no reason 