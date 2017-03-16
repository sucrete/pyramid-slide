

var heightElem = document.getElementById("rangey");
var blockType = document.getElementById("supaoptions");
//var formElem = document.getElementById("draw-form");
//document.getElementById("myInput").addEventListener("change", myFunction);
// set a handler function for the form's submission event
formElem.onsubmit = function() {






    drawPyramid();
}



function drawPyramid() {
    var height = heightElem.value;

    var block = blockType.value;

    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += block;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
