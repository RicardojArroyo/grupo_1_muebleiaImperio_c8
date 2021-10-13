module.exports = (req, res, next) => {
    if(req.cookies.userimperio) {
        req.session.user = req.cookies.userimperio
        res.locals.user = req.session.user
    }
    next()
}