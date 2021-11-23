vararr = [];
disparr = [];
var idCount = 1;
var buttonIdArr = [];

// vararr.push("test")
var selectedTextButton = function getSelectedTextToButton() {
  var selectedText = null;
  // window.getSelection
  if (window.getSelection) {
    selectedText = window.getSelection();
    vararr.push(selectedText);
    disparr.push(selectedText.toString().trim());
  }
  // document.getSelection
  else if (document.getSelection) {
    selectedText = document.getSelection();
    vararr.push(selectedText);
    disparr.push(selectedText.toString().trim());
  }
  // document.selection
  else if (document.selection) {
    selectedText = document.selection.createRange().text;
    vararr.push(selectedText);
    disparr.push(selectedText.toString().trim());
  } else return;

  if (selectedText != null && selectedText.toString() != "") {
    let btn = document.createElement("button");
    btn.innerHTML = selectedText.toString();
    btn.id = idCount.toString();
    btn.className = "btn btn-info mx-2 variableButton"
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
    document.getElementById(buttonIdArr.pop()).remove();
  } catch {
    alert("No more selections");
  }
};
