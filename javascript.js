var nam1 = + prompt("Enter The First Number")
var nam2 = + prompt("Enter The Second Number")

var sum = nam1 + nam2


document.write(" the sum =" + sum + "<br>")

var nam = + prompt("Enter The   Number")
var modu = nam % 2
if (modu == 0) {
    document.write(" the number is even" + "<br>");
} else {
    document.write(" the number is odd" + "<br>");
}

if (nam1 > nam2) {
    document.write("nam1 is the max" + "<br>");
}
else if (nam1 < nam2)  {
    document.write("nam2 is the max" + "<br>");
}
else{
    document.write("2 number is equel" + "<br>");
}
var month = + prompt("Enter The month")
var day
switch (month) {
    case 1:
        day = 31;
        break;
    case 2:
        day = 28;
        break;
    case 3:
        day = 31;
        break;
    case 4:
        day = 30;
        break;
    case 5:
        day = 31;
        break;
    case 6:
        day = 30;
        break;
    case 7:
        day = 31;
        break;
    case 8:
        day = 31;
        break;
    case 9:
        day = 30;
        break;
    case 10:
        day = 31;
        break;
    case 11:
        day = 30;
        break;
    case 12:
        day = 31;
        break;


}
document.write("Number of days   " + day + "<br>");

var letter1 = prompt("Enter The  letter")
switch (letter1) {
    case 'a':
    case 'o':
    case 'e':
    case 'i':
    case 'u':
    case 'A':
    case 'O':
    case 'E':
    case 'I':
    case 'U':

        document.write("character vowel " + "<br>");

        break;
    default:
        document.write("character constant " + "<br>");

}

