import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "email",
  port: 1025,
});

app.post("/email", async (req, res) => {
  const { from, to, subject, text } = req.body;
  if (!from || !to || !subject || !text) {
    return res.status(400).send("Missing required fields");
  }
  const email = {
    from,
    to,
    subject,
    html: text,
  };

  try {
    await transporter.sendMail(email);
    return res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to send email");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
