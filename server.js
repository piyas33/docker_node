const app = require("./app");
const port = process.env.PORT || 8002;


// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});