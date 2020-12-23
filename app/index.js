const app = require('./src/app');
const port = process.env.PORT || 3300;

app.listen(port, () => {
    console.log("=========================================");
    console.log(`Node server is listening on port: ${port}`);
    console.log("=========================================");
})
