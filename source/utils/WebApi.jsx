var request = require('browser-request');

module.exports = {

    getVast(uri, success, failure) {

        request(uri, function(error, response) {

            if(!error && response.statusCode == 200) {

                success(response);

            } else {

                failure(error);

            }

        });

    }

};