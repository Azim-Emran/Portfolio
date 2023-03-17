/* HISTORY FUNCTION */

let historyArray = [];

let input = document.getElementById('historyInput');
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("display-history").click();
    }
});

function getDateAndTime() {
    let now = new Date();
    let date = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return date + ' ' + time;
}

function dw(message) {
    document.writeln(message);
}

function createTable(objArray) {
    let headings = Object.keys(objArray[0]);
    let tableContent = "";

    tableContent = "<table class='history-table'><thead>"
        + addHeading(headings)
        + "</thead><tbody>"
        + addBodyData(headings, objArray)
        + "</tbody></table>";

    return tableContent;

}



function addBodyData(headings, objArray) {
    let temp = objArray.map((object) => addRow(object, headings))
    //console.log(temp)
    let newData = temp.join('');
    //console.log(newData)
    return newData;
}

function addRow(obj, headings) {


    let rowData = "";
    //rowData = "<tr>";
    //rowData += headings.map((heading) => "<td>" + obj[heading] + "</td>")
    //rowData += "</tr>"
    let temp = headings.map((heading) => obj[heading])
    //console.log(temp)
    rowData = "<tr><td>";
    rowData += temp.join("</td><td>");
    rowData += "</td></tr>"
    return rowData;

}

function addHeading(dataArray) {
    let headingRow = "";
    // headingRow = "<tr>"

    // headingRow += dataArray.map((x) => "<th>" + x.toUpperCase() + "</th>")
    // headingRow += "</tr>"

    headingRow = "<tr><th>"
    let temp = dataArray.map((x) => x.toUpperCase())
    //console.log(temp)
    headingRow += temp.join("</th><th>")
    headingRow += "</th></tr>"

    return headingRow;

}

let arrayID = 0;

function displayHistory(inputID, displayID) {
    //console.log(historyArray.length)
    let userInput = document.getElementById(inputID).value;

    //Get the timestamp when you already have the date object
    let newRow = {
        id: ++arrayID,
        date: getDateAndTime(),
        message: userInput
    }
    historyArray.unshift(newRow);
    //console.log(saveArray[0])
    document.getElementById(displayID).innerHTML = "";
    document.getElementById(inputID).value = "";
    //document.writeln(createTable(saveArray))
    checkForLimit();
    document.getElementById(displayID).innerHTML = createTable(historyArray);
    //saveArray.map((x) => document.getElementById(displayID).innerHTML
    //     += x.id + ", " + x.date + ", " + x.message + "<br>")
}

function checkForLimit(){
    if(historyArray.length > 10){
        historyArray.pop();
    }
}

function clearHistory(inputID, displayID){
    document.getElementById(displayID).innerHTML = "<h3>History cleared!</h3>";
    document.getElementById(inputID).value = "";
    historyArray.splice(0);
    arrayID = 0;
}

function generateRandomColor(){
    var letters = "0123456789ABCDEF";
    var colorCode = "#";
    for (var i = 0; i < 6; i++) {
      colorCode += letters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}

function changeColor(){
    var colorDiv = document.getElementById("colorBg");
    var colorBtn = document.getElementById("colorButton");

    var color1 = generateRandomColor();
    var color2 = generateRandomColor();
    var color3 = generateRandomColor();

    colorDiv.style.backgroundColor = color1;
    colorBtn.style.backgroundColor = color2;
    colorBtn.style.color = color3;

}

