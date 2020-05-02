function myFunction1() {
  var checkBox = document.getElementById("myCheckbox");
  var text = document.getElementById("text1");
  if (checkBox.checked == false){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
