const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");
const app = express();

app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "20mb" }));

const macroRoutes = require("./routes/macroRoutes");

const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/macro", macroRoutes);


// const options = {
//   key: fs.readFileSync('./scfx0vp99'),
// cert: fs.readFileSync('./scfx0vp99'),
//   //ca: fs.readFileSync('/opt/psa/var/certificates/scfqdiDyQ') // si tienes un archivo CA bundle
// };


//   https.createServer(options, app).listen(6000, () => {
//     console.log(`server listening on port 6000`);
//   });

app.listen(3050, () => {
  console.log(`server listening on port 3050`);
});
