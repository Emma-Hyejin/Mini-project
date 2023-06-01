var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function printColor(color) {
    switch (color) {
        case Color.Red:
            console.log(Color.Red);
            break;
        case Color.Green:
            console.log('Green');
            break;
        case Color.Blue:
            console.log('Blue');
            break;
        default:
            console.log('Unknown color');
            break;
    }
}
//A
printColor(Color.Red); // 출력: Red
// //B
// printColor(Color.Green); // 출력: Green
// //C
// printColor(Color.Blue); // 출력: Blue
// //D
// printColor(10); // 출력: Unknown color
