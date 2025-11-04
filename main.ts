function showTreasure () {
    basic.clearScreen()
    hunterx = 0
    huntery = 0
    treasurex = randint(1, 4)
    treasurey = randint(1, 4)
    led.plotBrightness(hunterx, huntery, 20)
    led.plotBrightness(treasurex, treasurey, 255)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    huntery += 1
    led.plotBrightness(hunterx % 5, huntery % 5, 20)
})
input.onButtonPressed(Button.AB, function () {
    if (hunterx % 5 == treasurex && huntery % 5 == treasurey) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
    showTreasure()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    hunterx += 1
    led.plotBrightness(hunterx % 5, huntery % 5, 20)
})
// Treasure Hunter v1.0 by Phil Greene
// 
// Problem/Task: Use one LED (hunter) to find the second LED's (treasure) position on the grid. 
// 
// 
// 1. Decomposition
// - Set the hunter LED (0,0) position (dim)
// - Set the treasure LED random position (bright)
// - Move the hunter LED with right and down movements using buttons A and B
// - Show a happy/sad face if the treasure is found
// 
// 2. Abstract
// - Use 'position' x, y variables to keep track of moving hunter LED position
// - Use 'target' x, y variables to keep track of random treasure LED position
// 
// 3. Logic/Pattern
// - Button A moves hunter down one y position
// - Button B moves hunter right one x position
// 
// 4. Algorithm
// - Start in the top left corner represented by a dimly lit LED
// - Display a randomly placed treasure LED on the map
// - Using the treasure position, navigate the hunter to it using button A to go down and button B to go right
// - Once you think you are on top of treasure LED press A+B to dig for result
// - If you find it, display :-)
// - If you missed it, display :-(
// - Try again/restart game
let treasurey = 0
let treasurex = 0
let huntery = 0
let hunterx = 0
showTreasure()
