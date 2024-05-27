const express = require("express");
const app = express();
const con = require("./utils/dbconnect");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); 
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hamzaakhoon009@gmail.com",
    pass: "qoxxyewozzepxzdk",
  },
});
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/user/register", (req, res) => {
  const { email, password, dob, dor,status } = req.body;
  const checkUserQuery = `SELECT COUNT(*) AS count FROM users WHERE email = ?`;

  con.query(checkUserQuery, [email], (err, result) => {
      if (err) {
          return res.status(400).send(err.message);
      }
      if (result[0].count > 0) {
          return res.status(500).send("User already exists");
      } else {
          const query = `INSERT INTO users(email, password, dob, dor,status) VALUES(?,?,?,?,?)`;
          con.query(query, [email, password, dob, dor,status], (err, result) => {
              if (err) {
                  return res.status(400).send(err.message);
              }
              const mailOptions = {
                from: 'hamzaakhoon009@gmail.com',
                to: email,
                subject: 'Thank you for Joing us!',
                html: `
                <h1>Welcome to FoodServer</h1>
                <p>Thank you for registering with us. Your account has been created successfully.</p>
                <p>Here are your account details:</p>
                <p>Email: ${email}</p>
                <p>Date of Birth: ${dob}</p>
                <p>Date of Registration: ${dor}</p>
                <p>
                  <a href="http://localhost:4000/user/verify?email=${email}&status=1">Click here to login</a>
                </p>
                `,
              };
              transporter.sendMail(mailOptions, async(error, info) => {
                if (error) {
                  console.log(error);
                  res.status(500).send('Error sending email');
                }
              });
              res.status(200).send("User registered successfully");
          });
      }
  });
});

app.get("/user/verify", (req, res) => {
  const { email, status } = req.query;
  const query = `UPDATE users SET status = ? WHERE email = ?`;
  con.query(query, [status, email], (err, result) => {
      if (err) {
          return res.status(400).send(err.message);
      }
      const link = '<a href="http://localhost:3000/account">Click here to continue</a>';
      res.send(`User verified successfully. ${link}`);
  });
});

app.post("/user/login", (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  con.query(query, [email, password], (err, result) => {
      if (err) {
          return res.status(400).send(err.message);
      }
      if (result.length > 0) {
          if (result[0].status == 1) {
              res.status(200).send({
                data: result[0],
              });
          } else {
              res.status(401).send("User not verified");
          }
      } else {
          res.status(401).send("Invalid credentials");
      }
  });
})



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})

