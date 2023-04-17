//print the value in screen
function display(num){
    document.getElementById('result').value += num;
}

//operations
function calculate(){
    //try and catch come in pairs
    try{
        document.getElementById("result").value = eval(document.getElementById("result").value);
    }
    catch(err){
        alert("Invalid")
    }
}

//clear all the printed value from screen
function Clear() {
    var inp = document.getElementById('result');
    inp.value = '';
}

//delete
function Back(){
    var goBack = document.getElementById('result');
    goBack.value = goBack.value.slice(0,-1);
}
function checkNumbers() {
    if (event.charCode >= 48 && event.charCode <= 57) {
    } else {
        document.getElementById("result").value = ""
        alert("Only numbers are allowed")
        
    }
  }
