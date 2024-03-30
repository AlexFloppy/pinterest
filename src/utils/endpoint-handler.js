function endpointHandler (fn) {
    return async function(req, res, next) {
        try {
            await fn(req, res, next);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = endpointHandler;