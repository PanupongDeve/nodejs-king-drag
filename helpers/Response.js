class Response {
    async push(res, data, status) {
        return await res.status(status).send(data);
    }
}

module.exports = new Response();