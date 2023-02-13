
// Change line color when button is clicked
function buttonClicked(){
    let line = document.getElementById("line-element");
    line.setAttribute("style", "stroke:red;stroke-width:15");
}

// Get circle div
let circle = document.getElementById("circle")

// Set color when moused over
function mouseOver(){
    circle.setAttribute("fill" , "orange")
}

// Set color back when mouse out
function mouseOut(){
    circle.setAttribute("fill", "pink")
}