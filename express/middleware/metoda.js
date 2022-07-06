let metoda = (req, res, next) => {
    next()
    let methodName = "Metoda: " + req.metoda
    let sciezka = "Scieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(sciezka)
    //res.send(sciezka);
}

module.exports = metoda
