const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    jwt.verify(token, "secretKey", (err, decoded) => {

        if (err)
            return res.sendStatus(403);

        req.user = decoded;

        next();

    });

}

module.exports = verifyToken;
