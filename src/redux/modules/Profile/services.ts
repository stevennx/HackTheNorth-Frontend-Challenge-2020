import axios from "axios";

export default () =>
  axios({
    method: "get",
    url: "https://hackthenorth.netlify.com/api/fe-challenge-attendee"
  });
