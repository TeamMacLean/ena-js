const fs = require('fs')
const request = require('request')

/**
 * 
 * @param {username, password} auth 
 * @param {submission, study, sample, experiment, run} paths 
 */
function post(auth, { submission, study, sample, experiment, run }) {

    return new Promise((good, bad) => {

        const formData = {};

        if (submission) {
            formData['SUBMISSION'] = fs.createReadStream(submission)
        }
        if (study) {
            formData['STUDY'] = fs.createReadStream(study)
        }
        if (sample) {
            formData['SAMPLE'] = fs.createReadStream(sample)
        }
        if (experiment) {
            formData['EXPERIMENT'] = fs.createReadStream(experiment)
        }
        if (run) {
            formData['RUN'] = fs.createReadStream(run)
        }

        const options = {
            method: "POST",
            url: `https://wwwdev.ebi.ac.uk/ena/submit/drop-box/submit/?auth=ENA%20${auth.username}%20${auth.password}`,
            port: 443,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            formData: formData
        };

        request(options, function (err, res, body) {

            if (err) {
                return bad(err);
            }
            return good(body);
        });
    })
}

module.exports = {

    /**
     * 
     * @param {username, password} auth 
     * @param {submission, study, sample, experiment, run} paths 
     */
    submit(auth, files) {
        return post(auth, files)
            .then(body => {
                console.log(body);
            })
            .catch(err => {
                console.error(err);
            })
    },
    update() {

    },
    publish() {

    }

}