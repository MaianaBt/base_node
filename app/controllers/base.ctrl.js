function getStart(req, res) {
    res.status(200);
    res.json({respone: "Requisição bem sucedida! "});
}

module.exports = {
    getStart: getStart,
};