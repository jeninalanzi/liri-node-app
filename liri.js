// This will enable the DOTENV
require("dotenv").config();

// This will import the spotify keys within keys.js
const keys = require("./keys.js");


// ============ ALL THE DEPENDENCIES WE NEED TO MAKE THIS APP WORK ================== //

// Axios (OMDB + Bands In Town)
const axios = require("axios");

// Spotify
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// Moment.js
const moment = require("moment");

// fs for reading and writing files
const fs = require("fs");


// ============================================================================== //


// Storing our commands and search query inputs into variables
const command = process.argv[2];
const nodeArgs = process.argv;

// Saving the search query into a variable
var search = process.argv.slice(3).join(" ");




// ====================================== TEST CODE HERE ============================================= //

// console.log("You searched for: " + search);

// console.log("Today is: " + date.format("MMMM D YYYY"));
// console.log("|=========================|")


// spotify.search({type: 'track', query: 'I Want It That Way'}, function(err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }

//     console.log("Preview link here: " + data.tracks.items[0].preview_url);
//     console.log("Album: " + data.tracks.items[0].album.name)
//     // Album name is in line 59 of the Albums API
// });

// ======================================== END TEST ================================================= //



// BEGIN SWITCH STATEMENT THAT ALLOWS US TO USE MULTIPLE COMMANDS
switch (command) {

    // ===== Command for movie-this ===== //
    case "movie-this":

        // Will need to repeat this function later for retrieving movie data from OMDB
        function getMovie() {

            // Save movieURL into a variable to retrieve JSON
            let movieURL = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`;
            console.log(movieURL);

            axios.get(movieURL).then(
                function (response) {

                    // This prints our data findings into the console.
                    console.log(" ");
                    console.log("--------------------------------------------------------------------------")
                    console.log("Movie Title: " + response.data.Title + "\nRelease Year: " + response.data.Year
                        + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Score: " + response.data.Ratings[1].Value
                        + "\nCountry where the movie was produced: " + response.data.Country + "\nLanguage: " + response.data.Language
                        + "\nMovie Plot: " + response.data.Plot + "\nStarring: " + response.data.Actors);
                    console.log("--------------------------------------------------------------------------");
                    console.log(" ");
                }
            );
        };

        // If user leaves input blank we will search "Mr. Nobody" by default
        if (search.trim().length === 0) {
            search = "mr+nobody";
            getMovie();
        }
        // Otherwise commence normal search for movie-this
        else {
            getMovie();
        };

        break;


    // ===== Command for concert-this ===== //
    case "concert-this":

        // Save concertURL into a variable to retrieve JSON
        let concertURL = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`;
        console.log(concertURL);

        axios.get(concertURL).then(
            function (response) {

                // This prints our data findings into the console.
                console.log(" ");
                console.log("Events Available For: " + response.data[0].lineup[0]);

                // For-loop in order to print out EVERY concert/event for the artist/band
                for (let i in response.data) {
                    console.log("--------------------------------------------------------------------------")
                    console.log("Venue: " + response.data[i].venue.name);
                    console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " | " + response.data[i].venue.country);

                    // Assigning date of concert into a MOMENT.JS variable
                    const date = moment(response.data[i].datetime);
                    console.log("Event Date: " + date.format("MMMM D YYYY"));
                    console.log("--------------------------------------------------------------------------")
                };
                console.log(" ");
            }
        );

        break;


    // ===== Command for spotify-this-song ===== //
    case "spotify-this-song":

        // This will need to be repeated later - basic search function for Spotify API
        function searchSpotify() {
            spotify.search({ type: "track", query: search }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                // This prints our findings to the console.
                console.log(" ");
                console.log("-----------------------------------------------------------------");
                console.log("Artist/Band Name: " + data.tracks.items[0].artists[0].name)
                console.log("Song Title: " + data.tracks.items[0].name);
                console.log("Preview Link Here: " + data.tracks.items[0].preview_url);
                console.log("Album: " + data.tracks.items[0].album.name);
                // Note: Album name is in line 59 of the Albums API
                console.log("-----------------------------------------------------------------");
                console.log(" ");
            });

        };

        // If our user leaves the input blank, default search to "The Sign" by Ace of Base
        if (search.trim().length === 0) {
            search = "The Sign Ace of Base";
            searchSpotify();
        }
        // Otherwise commence normal search for spotify-this-song
        else {
            searchSpotify();
        };

        break;


    // Case statement for do-this
    case "do-what-it-says":

        // Function that allows us to read the random.txt file
        fs.readFile("random.txt", "utf8", function (error, data) {
            //If code errors out it will be logged to the console.
            if (error) {
                return console.log(error);
            }

            // Storing that read data into a split array variable
            let dynamicData = data.split(",");
            console.log("You've chosen to: " + dynamicData[0]);

            // ===== SWITCH STATEMENT FOR READING THE COMMANDS IN RANDOM.TXT! ===== //
            switch (dynamicData[0]) {

                // CASE 1: SPOTIFY
                case "spotify-this-song":

                    // Begin spotify search using index[1] of the random.txt data as a query
                    spotify.search({ type: "track", query: dynamicData[1] }, function (err, data) {
                        if (err) {
                            return console.log('Error occurred: ' + err);
                        }
                        // This prints our findings to the console.
                        console.log(" ");
                        console.log("-----------------------------------------------------------------");
                        console.log("Artist/Band Name: " + data.tracks.items[0].artists[0].name)
                        console.log("Song Title: " + data.tracks.items[0].name);
                        console.log("Preview Link Here: " + data.tracks.items[0].preview_url);
                        console.log("Album: " + data.tracks.items[0].album.name);
                        // Note: Album name is in line 59 of the Albums API
                        console.log("-----------------------------------------------------------------");
                        console.log(" ");
                    });
                    break;

                // CASE 2: MOVIE-THIS
                case "movie-this":

                    // Saving index[1] of random.txt into a usable query variable
                    let dynamicSearch = dynamicData[1];
                    let movieURL = `http://www.omdbapi.com/?t=${dynamicSearch}&y=&plot=short&apikey=trilogy`;
                    console.log(movieURL);

                    axios.get(movieURL).then(
                        function (response) {

                            // This prints our data findings into the console.
                            console.log(" ");
                            console.log("--------------------------------------------------------------------------")
                            console.log("Movie Title: " + response.data.Title + "\nRelease Year: " + response.data.Year
                                + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Score: " + response.data.Ratings[1].Value
                                + "\nCountry where the movie was produced: " + response.data.Country + "\nLanguage: " + response.data.Language
                                + "\nMovie Plot: " + response.data.Plot + "\nStarring: " + response.data.Actors);
                            console.log("--------------------------------------------------------------------------");
                            console.log(" ");
                        }
                    );

                    break;

                // CASE 3: CONCERT-THIS
                case "concert-this":

                    // Saving index[1] of random.txt into a usable query variable
                    let dynamicConcertQuery = dynamicData[1];
                    let concertURL = `https://rest.bandsintown.com/artists/${dynamicConcertQuery}/events?app_id=codingbootcamp`;
                    console.log(concertURL);

                    axios.get(concertURL).then(
                        function (response) {

                            // This prints our data findings into the console.
                            console.log(" ");
                            console.log("Events Available For: " + response.data[0].lineup[0]);

                            // For-loop in order to print out EVERY concert/event for the artist/band
                            for (let i in response.data) {
                                console.log("--------------------------------------------------------------------------")
                                console.log("Venue: " + response.data[i].venue.name);
                                console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " | " + response.data[i].venue.country);

                                // Assigning date of concert into a MOMENT.JS variable
                                const date = moment(response.data[i].datetime);
                                console.log("Event Date: " + date.format("MMMM D YYYY"));
                                console.log("--------------------------------------------------------------------------")
                            };
                            console.log(" ");
                        }
                    );
                    break;


            }

        });

        break;


};
