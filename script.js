const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true
speech.interimResults = false

function setup() {
  speech.start()
}
function parseResult() {
    if(speech.resultValue) {
        const color = speech.resultString.split(' ').pop().toUpperCase()
        document.getElementById('lol').style.backgroudColor = color
}
}