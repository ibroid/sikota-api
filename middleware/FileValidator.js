
class FileValidator {
    constructor() {
    }
    validateFormatAndSize(req, res, next){
        const format = req.files.doc.mimetype;
        const allowFormat = [
            'image/jpg', 'image/jpeg', 'application/pdf', 'application/rtf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]; 
        if (allowFormat.indexOf(format).toString() == "-1") return res.status(403).json({icon:"error",message:"File tidak di perbolehkan",titile:"Gagal",status:403});

        const allowSize = 3410285; 
        if (allowSize.indexOf(req.files.doc.mimetype).toString() == '-1') res.status(403).json({status: 403,message: 'Format File is Forbidden'});

        next()
    }
}

module.exports = new FileValidator()