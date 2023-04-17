//print the value in screen
function display(num){
    document.getElementById('output').value += num;
}

//operations
function calculate(){
    //try and catch come in pairs
    try{
        document.getElementById("output").value = eval(document.getElementById("output").value);
    }
    catch(err){
        alert("Invalid")
    }
}

//clear all the printed value from screen
function Clear() {
    var inp = document.getElementById('output');
    inp.value = '';
}

//delete
function Back(){
    var goBack = document.getElementById('output');
    goBack.value = goBack.value.slice(0,-1);
}
function checkNumbers() {
    if (event.charCode >= 48 && event.charCode <= 57) {
    } else {
        document.getElementById("output").value = ""
        alert("Only numbers are allowed")
        
    }
  }