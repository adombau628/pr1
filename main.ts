input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (numero + 10 > numeroadivinar) {
        basic.showIcon(IconNames.Angry)
    } else {
        numero += 10
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (numero + 1 > numeroadivinar) {
        basic.showIcon(IconNames.Angry)
    } else {
        numero += 1
    }
    
})
let numero = 0
let numeroadivinar = 0
numeroadivinar = randint(0, 100)
console.log(numeroadivinar)
basic.forever(function on_forever() {
    let numeroadivinar: number;
    if (numero != numeroadivinar) {
        control.waitMicros(1000000)
        basic.showNumber(numero)
    } else {
        basic.showIcon(IconNames.Heart)
        control.waitMicros(5000000)
        numeroadivinar = randint(0, 100)
        console.log(numeroadivinar)
    }
    
})
