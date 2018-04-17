
function mockCacheMessage() {
    console.log(JSON.stringify(arguments))
}

function mockLogMessage() {
    console.log(JSON.stringify(arguments))
}

function mockTrackerDetectedMessage() {
    console.log(JSON.stringify(arguments))
}

var webkit = {

    messageHandlers: {

        cacheMessage: { postMessage: mockCacheMessage },
        log: { postMessage: mockLogMessage},
        trackerDetectedMessage: {postMessage: mockTrackerDetectedMessage}

    }

}
