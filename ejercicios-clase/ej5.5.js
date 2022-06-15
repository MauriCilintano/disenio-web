if (num2 > num1) {
    for(i = num2 ; i < num1 ; i--){
        if(i % 2 == 0){
            $("#resultado").append(i + '<br>');
        }
}
  }
else{
    for(i = num1 ; i < num2 ; i++){
        if(i % 2 == 0){
            $("#resultado").append(i + '<br>');
        }

    
}
}