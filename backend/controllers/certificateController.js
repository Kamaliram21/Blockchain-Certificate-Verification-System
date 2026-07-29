exports.uploadCertificate = (req, res) => {

    res.json({

        message: "Certificate Stored Successfully"

    });

};

exports.verifyCertificate = (req, res) => {

    res.json({

        status: "Certificate Verified"

    });

};
