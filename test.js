const { PollScrap } = require("./pollscrap");
require("dotenv").config();
let test = async () => {
    let pollScrap = new PollScrap(process.env.EMAIL_ADDRESS, process.env.PASSWORD);
    console.log(pollScrap.password);
    
    await pollScrap.initiate();
    console.log(pollScrap.token)

    //Get Election Types
   // let _g = await pollScrap.getElectionTypes();
    //console.log(_g)

    //Get submitted Document Stats e.g Presdential Election (63f8f25b594e164f8146a213)
    //Check the amount of documents submitted
    //PS : the id is the doc_id from election types
    let _stats = await pollScrap.getDocumentStats("63f8f25b594e164f8146a213");
    console.log(_stats);

    //Get Polling Unit Document
    let pollingDoc = await pollScrap.getPollingUnitDocument("63f8f25b594e164f8146a213","63f8f92c594e164f814a745e");
    console.log(pollingDoc)
}

test();