require("dotenv").config();

//Commands
//Concert-this
//Spotify-this-song
//movie-this
//do-what-it-says
const runApp = (command, input) => {
  switch (command) {
    case "concert-this":
      getArtist(input);
      break;
    case "spotify-this-song":
      break;
    case "movie-this":
      break;
    case "do-what-it-says":
      break;
  }
};

getArtist = () => {};
