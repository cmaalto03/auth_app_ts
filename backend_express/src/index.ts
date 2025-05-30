import app from "./app";
import config from "./config/config";
import api from "./api_v1";

app.use("/api", api);
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
