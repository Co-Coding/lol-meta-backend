const dayjs = require('dayjs')

export const timeProcess = (matches: any) => {

    const timeProcessed = matches.map((match: any) => {
        const date = dayjs.unix(match.info.gameDuration)
        const gameDurationMinSec = `${date.$m}m ${date.$s}s`
        match.info.gameDurationMinSec = gameDurationMinSec
        return match
    })

    return timeProcessed

}