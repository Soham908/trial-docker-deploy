const axios = require("axios");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.agify.io/?name=John");
    console.log(response.data); // Access the response data
    res.send("Second try, recall memory test: " + response.data.age); // Send the response
  } catch (error) {
    console.error('Error fetching age prediction:', error);
    res.status(500).send("Error fetching age prediction");
  }
});

app.listen(3000, () => {
  console.log("Server started, second try baby gurl");
});
