const app = require('./app');

const server = app.listen(8888, () => {
    console.log('--- Express is running on port 8888 ---')
})
