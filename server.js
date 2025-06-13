const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com", // your email
      pass: "your_app_password", // use an App Password for Gmail
    },
  });

  // Email options
  let mailOptions = {
    from: email,
    to: "your_email@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Email failed to send." });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
