module.exports = class Config {

    constructor(env) {
        this.env = env;
        /**
        * This for production
        * @param  {String} address Host database address
        * @param  {Number} port Host database port
        * @param  {String} username Host database username
        * @param  {String} password Host database password
        * @param  {String} database Host database name
        */
        this.address = '167.99.77.10';
        this.port = 6440;
        this.username = 'kingdrag';
        this.password = 'password';
        this.database = 'kingdrag';
    }

    getAddress() {
        /**
         * Get database host address
         */
        if (this.env === 'production') return this.address;
        else return '167.99.77.10';
    }

    getPort() {
        /**
         * Get port 
         */
        if (this.env === 'production') return this.port;
        else return 3000;
    }

    getUsername() {
        /**
         * Get username
         */
        if (this.env === 'production') return this.username;
        else return 'kingdrag';
    }

    getPassword() {
        /**
         * Get password 
         */
        if (this.env === 'production') return this.username;
        else return 'www.google.com';
    }

    getDatabase() {
        /**
         * Get database name
         */
        if (this.env === 'production') return this.database;
        else return 'kingdrag';
    }
}