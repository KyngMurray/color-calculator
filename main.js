const prompt = require('prompt-sync')();

let option = Number(prompt("Enter [1] for Color Construction or [2] for Color Deconstruction: "));
    if (option === 1){
        console.log("Available Colors are: Red, Blue, and Yellow: ")

        let color1 = (prompt("Enter the 1st Color: "));
        let color2 = (prompt("Enter the 2nd Color: "));

        if (color1 === "Red" && color2 == "Blue" || color1 === "Blue" && color2 === "Red"){
            console.log("Purple");
        } else if (color1 === "Red" && color2 === "Yellow" || color1 === "Yellow" && color2 === "Red"){
            console.log("Orange");
        } else if (color1 === "Blue" && color2 === "Yellow" || color1 === "Yellow" && color2 === "Blue"){
            console.log("Green");
        } else {
            console.log("ERROR");
        }
    } else if (option === 2){
        console.log("Available Colors are Purple, Orange, and Green: ")
        
        let color3 = (prompt("Enter a Color to Deconstruct: "))
        if (color3 === "Purple"){
            console.log("Red & Blue");
        } else if (color3 === "Orange"){
            console.log("Red & Yellow");
        } else if (color3 === "Green"){
            console.log("Blue & Yellow")
        } else {
            console.log("ERROR");
        }
    }
