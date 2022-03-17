function isChecked(){
    var Vue = document.getElementById('Vue').checked;
    var React = document.getElementById('React').checked;
    var Angular = document.getElementById('Angular').checked;
    var Php = document.getElementById('Php').checked;
    var JavaScript = document.getElementById('JavaScript').checked;
    var NodeJS = document.getElementById('NodeJS').checked;

    if(Vue==false && React==false && Angular==false && Php==false && JavaScript==false && NodeJS==false){
        alert("Por favor selecione pelo menos um adesivo!");
        return false;
    }
    else{
        return true;
    }
}
