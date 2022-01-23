const dayjs = require('dayjs')

const timeProcess = (matches) => {

    const timeProcessed = matches.map( match => {
        const date = dayjs.unix(match.info.gameDuration)
        const gameDurationMinSec = `${date.$m}m ${date.$s}s`
        match.info.gameDurationMinSec = gameDurationMinSec
        return match
    })
    
    return timeProcessed

}


module.exports = timeProcess