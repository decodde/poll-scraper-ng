let Constants = {
    URLS : {
        LOGIN : "https://lv001-g.inecelectionresults.ng/api/v1/login",
        ELECTION_TYPES : "https://lv001-abia.inecelectionresults.ng/api/v1/election-types",
        STATS : (id) =>  `https://ncka74vel8.execute-api.eu-west-2.amazonaws.com/abuja-prod/elections/${id}/result/stats`,
        PU_DOCUMENT : (electionType, pollingUnitId) => `https://lv001-abia.inecelectionresults.ng/api/v1/elections/${electionType}/pu/${pollingUnitId}`
    }
}


exports.Constants = Constants;
