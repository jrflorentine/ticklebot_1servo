input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(65)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(110)
})
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        servos.P1.setAngle(65)
        basic.pause(200)
        servos.P1.setAngle(110)
        basic.pause(200)
    }
})
