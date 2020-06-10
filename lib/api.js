const fs = require('fs')
const request = require('request')
const xml2js = require('xml2js');
const moment = require('moment');

/**
 * 
 * @param {*} xml 
 */
function parseXML(xml) {
    return xml2js.parseStringPromise(xml /*, options */)
}

function createStudy(study) {

    //TODO make new submission xml

    const holdDate = moment().add(1, 'years').subtract(1, 'days').format('YYYY-MM-DD')

    const study = `
    `

    const submission = `
    <?xml version = '1.0' encoding = 'UTF-8'?>
<SUBMISSION alias="NGS-RGCB_waterPolo" center_name="EBI">
	<ACTIONS>
		<ACTION>
			<VALIDATE source="study.xml" schema="study"/>
		</ACTION>
		<ACTION>
			<HOLD HoldUntilDate="2015-03-07Z"/>
		</ACTION>
	</ACTIONS>
</SUBMISSION>
`

        //TODO make study.xml file
        //TODO make submission.xml file

        `curl -u username:password -F "SUBMISSION=@submission.xml" -F "STUDY=@study.xml" "https://wwwdev.ebi.ac.uk/ena/submit/drop-box/submit/"`

}

// /**
//  * 
//  * @param {username, password} auth 
//  * @param {submission, study, sample, experiment, run} paths 
//  */
// function post(auth, { submission, study, sample, experiment, run }) {

//     return new Promise((good, bad) => {

//         const formData = {};

//         if (submission) {
//             formData['SUBMISSION'] = fs.createReadStream(submission)
//         }
//         if (study) {
//             formData['STUDY'] = fs.createReadStream(study)
//         }
//         if (sample) {
//             formData['SAMPLE'] = fs.createReadStream(sample)
//         }
//         if (experiment) {
//             formData['EXPERIMENT'] = fs.createReadStream(experiment)
//         }
//         if (run) {
//             formData['RUN'] = fs.createReadStream(run)
//         }

//         const options = {
//             method: "POST",
//             url: `https://wwwdev.ebi.ac.uk/ena/submit/drop-box/submit/?auth=ENA%20${auth.username}%20${auth.password}`,
//             port: 443,
//             headers: {
//                 "Content-Type": "multipart/form-data"
//             },
//             formData: formData
//         };

//         request(options, function (err, res, body) {

//             if (err) {
//                 return bad(err);
//             }

//             const receipt = body;

//             parseXML(receipt)
//                 .then(receiptJson => {
//                     good(receiptJson)
//                 })
//                 .catch(err => {
//                     bad(err);
//                 })

//         });
//     })
// }

module.exports = {

    // /**
    //  * 
    //  * @param {username, password} auth 
    //  * @param {submission, study, sample, experiment, run} paths 
    //  */
    // submit(auth, files) {
    //     return post(auth, files)
    // },
    // update() {

    // },
    // publish() {

    // }

}