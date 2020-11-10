const nodemailer = require('nodemailer'),
      {EMAIL, PASSWORD} = process.env;

module.exports = {
    sendContact: async(req, res) => {
        const { email, name, message } = req.body;
        try {
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            service: "gmail",
            secure: false,
            requireTLS: true,
            auth: {
              user: EMAIL,
              pass: PASSWORD,
            },
          });

          let info = await transporter.sendMail(
            {
              from: `Portfolio <${EMAIL}>`,
              to: "dayneglen@gmail.com",
              subject: "Portfolio Contact Message",
              text: `${message}`,
              html: `<p>${name} at ${email} sent you an email!</p>
                      <p>${message}</p>`,
            },
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
                res.status(200).send(info);
              }
            }
          );
          res.sendStatus(200);
        } catch (err) {
          res.status(500).send(err);
        }
    }
}