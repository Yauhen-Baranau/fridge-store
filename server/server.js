
const express = require("express");
const webserver = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

const port = 8080;

const corsOptions = {
  origin: ["https://holodcentr.by", "http://localhost:3000"],
};

webserver.use(cors(corsOptions));
webserver.use(express.json());
webserver.use(express.urlencoded({ extended: true }));

webserver.post("/api/send-email", async (req, res) => {
  const { name, phone } = req.body;


  if (name && phone) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "dzianislysionak@gmail.com",
        pass: "kdlw bmds wtsh atio",
      },
    });

    const mailOptions = {
      from: "dzianislysionak@gmail.com",
      to: "yauhen.baranau1@gmail.com",
      subject: "New message from LESA",
      text: `Имя: ${name}\nТелефон: ${phone}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(400);
    }
  }


});

webserver.listen(port, () => {
  console.log("Web server running on port " + port);
});