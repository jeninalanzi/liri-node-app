# LIRI Node App

## Project Summary
To create a successful Language Interpretation & Recognition Interface (LIRI) that's a command-line input version of SIRI (where voice is the input). LIRI will take your commands and give you back data requested - particularly information on concerts, movies, and songs.

## Objectives
- Exercise newfound skills in node.js - MET
- Utilizing ES6 for code that is easier to read and write with the same (or better) functionality. - MET
- Implementation of NPM to create dependencies, and install crucial files, in order for the app to be fully operable. - MET
- Using "dotenv" and ".gitignore" to protect sensitive data, particularly Spotify API keys. -MET
- Using Axios to retrieve data from the OMDB (movies) Database as well as Bands In Town (concerts). -MET
- Using the Node Spotify API to retrieve data for songs, thus learning a new library and a different way to obtain JSON. - MET
- Using core Node package "fs" to enable the app to read a file (random.txt), which contains one command, and one string value - and having our app read and run whichever command is written inside that file. - MET

# How To Use LIRI!
1. Open the directory "liri-node-app", which contains all the files necessary for LIRI to work.

1. Open "liri.js" to initiate the program and open your Terminal (make sure you're in the correct directory).

1. Before ANY command, always type this into the terminal first!:
    * `node liri.js`
      
1. Type any of the following commands *after* to form a complete command line:
    >`movie-this <insert movie title here>`
    * If title left blank, LIRI will search OMDB for information on the movie, "Mr. Nobody."

    * If you do type a movie in, LIRI will tell you all about that movie!

    >`concert-this <insert artist/band name here>`
    * Type an artist or a band you like and LIRI will show you all the concerts lined up for that band, as well as the dates, venues, and locations of those events!
    * Data provided by Bands In Town
    
    >`spotify-this-song <insert song title/track here>`
    * Using this command tells LIRI to show you:
        * The artist or band of your chosen song
        * The album it belongs in
        * A link to preview that song

    > `do-what-it-says`
    * No extra command line input needed
    * LIRI will read the random.txt file (included in the directory) and run the command inside! The search query it runs will also be in the file
    * Any of our pre-existing commands above can be edited in the .txt file and used!



    # What I Learned (+ Issues & Comments)

    Through this exercise, I learned how to really extract the capabilities of node.js to retrieve data. I learned better, and more efficient, ways to write commonly used coding algorithms (such as switch statements, and loops). 
    
    I fully understand the importance of storing our valuable keys (aka the sensitive API keys data) in a `const` as opposed to the very lenient `var` (which can be potentially changed down the line, which can break the code). I also now understand the purpose of .gitignore in order to prevent these keys from being uploaded into the public domain of a GitHub repository.

    I learned even more ways that data can be stored, and how to retrieve from multiple different databases. The concept of APIs and JSON is much more solidified in my mind now, and I picture myself creating my own databases very soon -- as I can now start to mentally preview database structures that I would want to create in the future, and the infinite kinds of data that I can push into these types of structures.

    In a way, this project successfully broadened my horizons in such a SHORT amount of time -- due to the fact that many challenges arose from this.

    For one, the SPOTIFY API was difficult to navigate - I copied the JSON data published in the Developer Spotify API documentation (on their website) and into a blank .js file. I noticed many syntax errors and inconsistencies with the data structure that made it quite tricky to pull data.

    Second, having to remember to install ALL npm packages prior to application use is a skill yet to be made into a second-nature habit. 

    On a broader scale, working on LIRI has shown me that, no matter how challenging and foreign the objectives are, there is always a way to solve them. I am growing more comfortable (inch by inch, but progress nonetheless) with asking questions - not just to my instructors, but to my peers who worked on this project as well.
    
    I was even able to help some fellow students when they got stuck on a problem, and was able to explain the how and why the solution was an integral part of the entire code's functionality. The fact that I was able to assist them in their understanding, when we are all students, is a ray of light for me in terms of my future in web development.

    This is probably my longest README.md and is becoming a journal entry, but I want to really convey the growth and the scope of understanding I am innately downloading on a daily basis, as I complete projects like this. I hope this file gets you to understand the use of the app, as well as demonstrates the potential I have to comprehend programming and web development concepts even well into the future.

    (Written by Jenina Lanzi.)