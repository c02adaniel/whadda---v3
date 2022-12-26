def on_button_pressed_a():
    global led2
    led2 += 1
    if led2 > 26:
        led2 = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global szin, color
    szin += 1
    if szin == 0:
        color = "neopixel.colors(NeoPixelColors.White)"
    if szin == 1:
        color = "neopixel.colors(NeoPixelColors.Red)"
    if szin == 2:
        color = "neopixel.colors(NeoPixelColors.Yellow)"
    if szin == 3:
        color = "neopixel.colors(NeoPixelColors.Green)"
    if szin == 4:
        color = "neopixel.colors(NeoPixelColors.Blue)"
    if szin == 5:
        color = "neopixel.colors(NeoPixelColors.Indigo)"
    if szin == 6:
        color = "neopixel.colors(NeoPixelColors.Violet)"
    if szin == 7:
        color = "neopixel.colors(NeoPixelColors.Purple)"
    if szin > 10:
        szin = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

color = "white"
szin = 0
led2 = 0
strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
led2 = 0
program = 0
szin = 0
strip.show_color(neopixel.colors(NeoPixelColors.WHITE))

def on_forever():
    index = 0
    while index <= led2:
        strip.set_pixel_color(index, color)
        index += 1
    strip.show()
basic.forever(on_forever)
