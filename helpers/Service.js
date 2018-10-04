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

    async generateToken(emp) {
        return await this.jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1),
            employeeId: emp.id,
            roleId: emp.roleId
        }, 'p@sSw0rd');
    }
}

module.exports = new Service();