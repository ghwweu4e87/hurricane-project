if (input.acceleration(Dimension.X) > 120) {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.pause(100)
}
basic.forever(function () {
    radio.setGroup(10)
})
