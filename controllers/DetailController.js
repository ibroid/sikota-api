const TabayunResponse = require("./TabayunResponse");

const TabayunResponse = require('../models/Tabayun_response')
const TabayunRequest = require('../models/Tabayun_request')

class DetailController {
    constructor() {

    }
    async totalRequest() {
        const result = await TabayunRequest.count({

        })
    }
}