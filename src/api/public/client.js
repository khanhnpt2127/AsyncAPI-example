console.log('Client-side code running');

window.onload = function() {
// Read current status

const colorPicker = document.getElementById("html5colorpicker");
colorPicker.addEventListener("change", watchColorPicker, false);

for (i = 0; i < 64; i++) {
	ledMatrix[i] = "";
}
resetAll();
}


var color = "#ff0000";
var lastColor = "";

function resetAll() {
  lastColor = "";

  for (i = 0; i < 64; i++) {
    ledMatrix[i] = "";
  }


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://192.168.31.127:3000", true);
		xhttp.setRequestHeader("Content-type", "application/json");

		var data = '{"ledmatrixdata":"\\nTK & Mac"}';
		xhttp.onreadystatechange = function() { // Call a function when the state changes.
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
					// Request finished. Do processing here.
      }
    }
		xhttp.send(data);
}

var ledMatrix = [];

function setLedMatrix(id,colorString) {
	ledMatrix[id] = colorString;
	console.log(ledMatrix[id]);
}

function getLedMatrixLastColor() {
	lastColor = "";

	for (i = 0; i < 64; i++) {
		if(ledMatrix[i] != "") {
			lastColor += ledMatrix[i];
		}
	}
}

function watchColorPicker(event) {
    color = event.target.value;
};


function sendMatrixData(id,x,y) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://192.168.31.127:3000", true);
		xhttp.setRequestHeader("Content-type", "application/json");

		var data_raw = "\\n" + x + ',' + y + ',' + color;

		setLedMatrix(id, data_raw);
		getLedMatrixLastColor();



		console.log(lastColor);
		if(lastColor === "") {
			var data = '{"ledmatrixdata": "'  +  "\\n" + x + ',' + y + ',' + color + '"}';
		} else {
			var data = '{"ledmatrixdata": "'  + lastColor  + '"}';
		}
		console.log(data);
		xhttp.onreadystatechange = function() { // Call a function when the state changes.
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
					// Request finished. Do processing here.
          var stylebg = "background-color: " + color;
					setLedMatrix(id, data_raw);
					getLedMatrixLastColor();
          console.log(lastColor);
          document.getElementById(id).style = stylebg;
			}
		}
		xhttp.send(data);
}

