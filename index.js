//function to calculate the sum of the numbers 
function calculate(){
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}

//function that joins character strings end-to-end
function concatenate(num){
    document.getElementById("display").value = document.getElementById("display").value + num;
}
//delete button function
 function deleteNumber(){
    document.getElementById("display").value = document.getElementById("display").value.toString().slice(0,-1);
 }
