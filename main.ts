input.onButtonPressed(Button.A, function () {
    send.push(".")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (send.join('')))
})
radio.onReceivedString(function (receivedString) {
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
    morsePos = letters.indexOf(receivedString)
    morseRec = morse[morsePos]
    if (morseRec == send.join('')) {
        basic.showString(receivedString)
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == 'Resend') {
        basic.showString('RESENDING')
        radio.sendString("" + (send.join('')))
    }
})
input.onButtonPressed(Button.B, function () {
    send.push("-")
})
input.onGesture(Gesture.Shake, function () {
    send = [""]
})

let morseRec = ""
let morsePos = 0
let morse: string[] = []
let letters = ""
let send: string[] = []
radio.setGroup(251)
send = [""]
