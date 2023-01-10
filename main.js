let body = document.querySelector("body");
document.body.setAttribute("style","background-color:gray;margin: 0;padding: 0;")
//We create two div elements and append them to the body, the first is the color area and the second is drawinf area
body.appendChild(document.createElement('div'))
body.appendChild(document.createElement('div'))

// we create two vars to take each div 
let divColor=document.getElementsByTagName('div')[0]
let divDraw=document.getElementsByTagName('div')[1]

//We set a id for each div
divColor.setAttribute("id","buttonRange")
divDraw.setAttribute("id","DrawSection")


//for color area we define the grid 
divColor.setAttribute("style","display: grid;grid-gap: 4px;grid-template-columns: repeat(3, 1fr);grid-template-rows:repeat(8, 1fr);height: 100vh;width: 20%;float: left;background-color: gray;padding: 5px;")
//for Drawing area we define the grid 
divDraw.setAttribute("style","display: grid;grid-template-columns: repeat(60, 1fr);height: 100vh;padding: 5px 5px 5px 0;")

//We create a button and append it to the color area 
divColor.appendChild(document.createElement('button'))
//like a button take a great space a use the grid to structure well 
document.querySelector('button').setAttribute("id","clear")
document.querySelector('button').setAttribute("style","font-size: 31px;border: 1px black solid;grid-column: 1/4;border-radius: 16px;background-color: white;")
//We give a text for button
document.querySelector('button').textContent="Clear"

//let create a array that contains all color

let ColorArray=["red","orangered","orange","yellow","yellowgreen","lightgreen","green",
"turquoise","cyan","lightskyblue","dodgerblue","blue","darkblue","indigo","darkmagenta",
"violet","lightpink","lightgray","gray","black","white"]

// For each color we create a div and append it to the div area color 
ColorArray.forEach(element => {
// We create a div
    let color=document.createElement('div')
// we set a backgound color that correspond of position in array colorArray
    color.setAttribute("style","background-color:"+element+";border: 1px black solid;")
    divColor.appendChild(color);
});


// We create a var that is the number of square in drawing area
let OfNumber=1440;
//We use a for loop for create each div square 
for (let index = 0; index < OfNumber; index++) {
    let createToSquare=document.createElement('div')
// we set a border and a background color
    createToSquare.setAttribute("style","border: 1px lightgray solid;background-color: white;")
//we append it to drawing area div
    divDraw.appendChild(createToSquare);
}





// We create a var color to take the color the user select 
let color = null;
// We create a var IsDown to check if the mouse is down by default is a boolean and take false
let IsDown = false;


// We use the css selector to take all color in color area by querySelectorAll
let buttonRange = document.querySelectorAll("#buttonRange > *");
// We use the css selector to take all square in color area by querySelectorAll
let DrawSection = document.querySelectorAll("#DrawSection > *");
//we take the button clear 
let buttonClear = document.getElementById('clear');

//We add a event to button if is clicked he change the background color of all element in drawing area  to white
buttonClear.addEventListener("click", function(){
// We navigate each element of drawing area and change his color
    for (draw of DrawSection){
        draw.style.backgroundColor = "white";
    }
});



//we add a event to body mouseup
body.addEventListener("mouseup", function(){
    IsDown = false;
})
//we add a event to body mousedown
body.addEventListener("mousedown", function(){
    IsDown = true;
})


//For the color selected we put it in the var color
for (colorDraw of buttonRange){
    colorDraw.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

// For drawing we check if color is null or not
// if color is not null we change the color all square we will select
for (draw of DrawSection ){

    draw.addEventListener("mousedown", function(event){
        if (color != null) {
            event.target.style.backgroundColor = color;
        }
    });
    draw.addEventListener("mouseover", function(event){
        if (IsDown && color != null) {
            event.target.style.backgroundColor = color;
        }
    });
}