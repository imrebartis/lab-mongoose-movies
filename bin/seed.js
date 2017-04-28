/*jshint esversion: 6*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab-celebs');
const Celeb = require('../models/celeb');
const Movie = require('../models/movie');



const celebs = [
  {
    name: 'Morgan Freeman',
    occupation: "Actor",
    catchPhrase: 'Gotcha'
  },
  {
    name: 'Humpty Dumpty',
    occupation: 'egghead',
    catchPhrase: 'wild horses'
  },
  {
    name: 'Archie McFern',
    occupation: "Joggler",
    catchPhrase: 'figueres'
  }
];

// Celeb.create(celebs, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//   docs.forEach((celeb) => {
//     console.log(celeb.name);
//   });
//   mongoose.connection.close();
// });

const movies = [
{
title: 'Crybaby',
genre: "comedy",
plot: 'irrelevant'
},
{
title: 'Baraka',
genre: "documentary",
plot: 'none whatsoever'
},
{
title: 'Silver lining',
genre: "romantic comedy",
plot: 'Kind of a love story'
}
];
Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(movie.title);
  });
  mongoose.connection.close();
});
