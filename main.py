def on_button_pressed_a():
    global numero
    if numero+10 >numeroadivinar:
        basic.show_icon(IconNames.ANGRY)
    else:
        numero += 10
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global numero
    if numero+1 >numeroadivinar:
        basic.show_icon(IconNames.ANGRY)
    else:
        numero += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

numero = 0
numeroadivinar = 0
numeroadivinar = randint(0, 100)
print(numeroadivinar)

def on_forever():
    
    if numero != numeroadivinar:
        control.wait_micros(1000000)
        basic.show_number(numero)
    else:
        basic.show_icon(IconNames.HEART)
        control.wait_micros(5000000)
        
        numeroadivinar = randint(0, 100)
        print(numeroadivinar)
basic.forever(on_forever)
