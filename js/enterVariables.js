var templatesArray = JSON.parse(localStorage.getItem("templates"));
var currentTemplate = localStorage.getItem("currentTemplate");
const reader = new FileReader();

console.log(templatesArray);

for (template in templatesArray) {
  console.log(template, currentTemplate);
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

