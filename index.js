function calculate(){
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}

function concatenate(num){
    document.getElementById("display").value = document.getElementById("display").value + num;
}