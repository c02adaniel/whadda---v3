input.onButtonPressed(Button.A, function () {
    led2 += 1
    if (led2 > 26) {
        led2 = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    program += 1
    if (program == 2) {
        program = 0
    }
    basic.showNumber(program)
})
input.onButtonPressed(Button.B, function () {
    szin += 1
    if (szin > 8) {
        szin = 0
    }
})
let szin = 0
let led2 = 0
let program = 0
let color = 0
program = 0
let strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
led2 = 0
strip.showBarGraph(0, 255)
basic.pause(1000)
strip.clear()
for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        basic.pause(100)
    }
}
for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
        led.unplot(x, y)
        basic.pause(100)
    }
}
basic.forever(function () {
    if (szin == 0) {
        if (program == 0) {
            for (let index = 0; index <= led2; index++) {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
            }
        }
    }
    if (szin == 1) {
        if (program == 0) {
            for (let index2 = 0; index2 <= led2; index2++) {
                strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Red))
            }
        }
    }
    if (szin == 2) {
        if (program == 0) {
            for (let index3 = 0; index3 <= led2; index3++) {
                strip.setPixelColor(index3, neopixel.colors(NeoPixelColors.Orange))
            }
        }
    }
    if (szin == 3) {
        if (program == 0) {
            for (let index4 = 0; index4 <= led2; index4++) {
                strip.setPixelColor(index4, neopixel.colors(NeoPixelColors.Yellow))
            }
        }
    }
    if (szin == 4) {
        if (program == 0) {
            for (let index5 = 0; index5 <= led2; index5++) {
                strip.setPixelColor(index5, neopixel.colors(NeoPixelColors.Green))
            }
        }
    }
    if (szin == 5) {
        if (program == 0) {
            for (let index6 = 0; index6 <= led2; index6++) {
                strip.setPixelColor(index6, neopixel.colors(NeoPixelColors.Blue))
            }
        }
    }
    if (szin == 6) {
        if (program == 0) {
            for (let index7 = 0; index7 <= led2; index7++) {
                strip.setPixelColor(index7, neopixel.colors(NeoPixelColors.Indigo))
            }
        }
    }
    if (szin == 7) {
        if (program == 0) {
            for (let index8 = 0; index8 <= led2; index8++) {
                strip.setPixelColor(index8, neopixel.colors(NeoPixelColors.Violet))
            }
        }
    }
    if (szin == 8) {
        if (program == 0) {
            for (let index9 = 0; index9 <= led2; index9++) {
                strip.setPixelColor(index9, neopixel.colors(NeoPixelColors.Purple))
            }
        }
    }
    strip.show()
})
