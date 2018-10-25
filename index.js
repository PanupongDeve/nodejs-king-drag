const App = require('./app');
const Config = require('./config');

const config = new Config(process.env.NODE_ENV);
const app = new App(config);

app.start();