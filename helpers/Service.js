const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

class Service {

    constructor() {
        this.bcrypt = bcrypt;
        this.jwt = jwt;
    }

    async encrpytPassword(password) {
        return await this.bcrypt.hashSync(password);
    }

    async comparePassword(password, comparePassword) {
        try {
            const result = this.bcrypt.compareSync(password.toString(), comparePassword.toString());
            return await result ? true : false;
        } catch (ex) {
            return await false;
        }
    }

    async generateToken(user) {
        return await this.jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1),
            userId: user.id || user.userId,
            group: user.group
        }, 'p@sSw0rd');
    }

    async refershToken(token) {
       try {
        const result = await this.jwt.verify(token, 'p@sSw0rd');
        const newToken = await this.generateToken(result);
        return newToken;
        
       } catch (error) {
           throw error;
       } 
    }

    async verifyToken(token) {
        try {
            const result = await this.jwt.verify(token, 'p@sSw0rd');
            return await result ? true : false;
        } catch (ex) {
            return await false;
        }
    }

    async decodeToken(token) {
        return await this.jwt.decode(token);
    }
}

module.exports = new Service();