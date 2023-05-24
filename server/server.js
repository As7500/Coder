const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

app.listen(8000, () => {
  console.log("sever is listening on port 8000");
});
