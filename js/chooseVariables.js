var throwarr = [];
var varArr = [];
var idCount = 1;
var buttonIdArr = [];
var format = "";

window.localStorage;

class Template {
  constructor(format, variables, image) {
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
    console.log(buttonIdArr);
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

var confirmVariables = function () {
  var format = document.getElementById("format").value;
  if (varArr.length > 0 && format.trim().length > 0) {
    if (confirm("Proceed to create template?")) {
      console.log(varArr, format);
    }
  }
  else{
    alert("Choose at least one variable or valid format");
  }
};

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
