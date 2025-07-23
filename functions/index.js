const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {initializeApp} = require("firebase-admin/app");

exports.getStates = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Only POST allowed");
    }

    try {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({country: "Nigeria"}),
      });

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({error: "Failed to fetch states"});
    }
  });
});
