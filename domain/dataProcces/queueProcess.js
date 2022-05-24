const queueProcess = async (matches, queuesData) => {

    const queueProcessed = matches.map( match => {
        const queueData = queuesData.find( queue => queue.queueId === match.info.queueId )
        match.info.queueData = queueData
        return match
    } )

    return queueProcessed
}


module.exports = queueProcess;