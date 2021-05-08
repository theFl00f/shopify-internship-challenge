import axios from "axios";

export default class MovieDao {
  async searchMovies(title) {
    return await axios.get("http://www.omdbapi.com/", {
      params: {
        s: title,
        type: "movie",
        r: "json",
        apikey: process.env.REACT_APP_APIKEY,
      },
    });
  }
}
