function calculate(){
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}

function concatenate(num){
    document.getElementById("display").value = document.getElementById("display").value + num;
}

function clear(){
    document.getElementById("display").value = document.getElementById("display").value('');
}

 function deleteNumber(){
    document.getElementById("display").value = document.getElementById("display").value.toString().slice(0,-1);
 }