const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true
speech.interimResults = false

function setup() {
  speech.start()
}