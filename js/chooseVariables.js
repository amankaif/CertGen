var throwarr = [];
var varArr = [];
var idCount = 1;
var buttonIdArr = [];
var format = "";


if (localStorage.getItem("templates") == null) {
  console.log("reset localStorage");
  localStorage.setItem("templates", JSON.stringify([]));
} else {
  var templatesArray = JSON.parse(localStorage.getItem("templates"));
  console.log(templatesArray);
}
console.log("initial check");
console.log(JSON.parse(localStorage.getItem("templates")));

class Template {
  constructor(name, format, variables, image) {
    this.name = name;
    this.format = format;
    this.variables = variables;
    this.image = image;
  }
}

// vararr.push("test")
var selectedTextButton = function getSelectedTextToButton() {
  var selectedText = null;
  // window.getSelection
  if (window.getSelection) {
    selectedText = window.getSelection();
    throwarr.push(selectedText);
    varArr.push(selectedText.toString().trim());
  }
  // document.getSelection
  else if (document.getSelection) {
    selectedText = document.getSelection();
    throwarr.push(selectedText);
    varArr.push(selectedText.toString().trim());
  }
  // document.selection
  else if (document.selection) {
    selectedText = document.selection.createRange().text;
    throwarr.push(selectedText);
    varArr.push(selectedText.toString().trim());
  } else return;

  if (selectedText != null && selectedText.toString() != "") {
    let btn = document.createElement("button");
    btn.innerHTML = selectedText.toString();
    btn.id = idCount.toString();
    btn.className = "btn btn-info mx-2 variableButton";
    idCount++;
    buttonIdArr.push(btn.id);
    // btn.onclick = removeButton();
    document.getElementById("buttonPool").appendChild(btn);
    selectedText = null;
  } else {
    alert("Select something");
  }
};

var undoButton = function () {
  try {
    // varArr.splice(varArr.indexOf(document.getElementById(buttonIdArr.pop()).innerHTML), 1);
    varArr.pop();
    document.getElementById(buttonIdArr.pop()).remove();
  } catch {
    alert("No more selections");
  }
};

var confirmTemplate = function () {
  templatesArray = JSON.parse(localStorage.getItem("templates"));

  var name = document.getElementById("name").value
  var format = document.getElementById("format").value;
  var image = document.getElementById("imageUpload").files[0];
  if (varArr.length > 0 && format.trim().length > 0) {
    let namesArr = templatesArray.map((obj) => obj.name);
    console.log(templatesArray);
    console.log("This is the array of all the names of the templates")
    console.log(namesArr);

    if (namesArr.includes(name)){
      alert("Name already taken");
    }
    else{
    if (confirm("Proceed to create template?")) {
      console.log(varArr, format, image);
      localStorage.setItem(
        "templates",
        JSON.stringify(
          JSON.parse(localStorage.getItem("templates")).concat([
            new Template(name, format, varArr, image),
          ])
        )
      );
      console.log("check after update");
      console.log(JSON.parse(localStorage.getItem("templates")));

      removeAllChildNodes(document.getElementById("buttonPool"));
    }
  } 
}
else {
  alert("Choose at least one variable or valid format");
}};

//TODO: Fix the menu collapsing when clicked anywhere.

var collapseCollapsible = function (event) {
  console.log("entered click event");
  var $collapsible = $(".collapse");
  var _opened = $collapsible.hasClass("in");
  if (_opened === true) {
    console.log("entered toggle");
    $collapsible.collapse("toggle");
  }
};

var removeAllChildNodes = function(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function clearLocalStorage() {
  localStorage.setItem("templates", JSON.stringify([]));
  console.log(JSON.parse(localStorage.getItem("templates")));
}

