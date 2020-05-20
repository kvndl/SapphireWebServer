const app = require('./app');

var port = 8888;

const server = app.listen(port, () => {
    console.log(`--- Express Running: Port ${port} ---`)
})
