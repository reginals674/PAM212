//funciones 

function greeting (){
    console.log("Hello");
}

greeting(); //llamada a la funcion  

greeting(); 
greeting(); 
greeting(); 
greeting(); 


function greeting (name){
    console.log(name)
    console.log("Hello");
}
greeting("Markus");

function greeting (personName){
    console.log('hello'+personName);
}
greeting("Kara");

greeting("Markus");

greeting("Connor");

function add (num1,num2){
    console.log(num1+num2);
}   
add(3,2);
add(100,300);
add(5000,2000);