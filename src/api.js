import axios from "axios";

// Make a request for a user with a given ID
const getData = async (category, entry) =>
  axios
    .get("https://guileless-sopapillas-50e236.netlify.app/articles.json")
    .then(function (response) {
      // handle success
      console.log("response", response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log("error!", error);
      return error;
    });

export { getData };
