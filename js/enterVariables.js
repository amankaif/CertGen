var templatesArray = JSON.parse(localStorage.getItem("templates"));
var currentTemplate = localStorage.getItem("currentTemplate");
const reader = new FileReader();


for (template in templatesArray) {
  if (templatesArray[template].name == currentTemplate) {
    currentTemplate = templatesArray[template];
  }
}

function serveDownloads() {
  var csv = document.getElementById("csvUpload").files[0];

  // console.log(reader.readAsText(csv));

  downloadURL("data:text/html,"+currentTemplate.format, currentTemplate.name+"_"+"format.txt");
  // downloadURI(reader.readAsText(csv), "csv.txt");
  downloadURL(window.URL.createObjectURL(csv), currentTemplate.name + "_csv.csv");

}

function downloadURL(url, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  // delete link;
}

function createVariableButtons() {
  for (variableNo in currentTemplate.variables) {
    console.log("variable");
    console.log(variableNo);
    let btn = document.createElement("button");
    btn.innerHTML = currentTemplate.variables[variableNo];
    btn.className = "btn btn-info mx-2 variableButton";
    // btn.onclick = removeButton();
    document.getElementById("buttonPool").appendChild(btn);
    
  }
}


createVariableButtons();

