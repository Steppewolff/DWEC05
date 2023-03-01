window.addEventListener("load", check_pwd);

function check_pwd (){
    document.getElementById("nou").addEventListener("keyup", function(){
        var inputtxt = document.getElementById("nou").value;
        var regex_pwd = /[A-Za-z0-9_$&%@-]{8,}/
        var check = document.getElementsByClassName('btn-success');
        if (inputtxt.match(regex_pwd)){
            document.getElementById("nou").style.color = "black"
            document.getElementById("repetir").addEventListener("keyup", function(){
                var check = document.getElementsByClassName('btn-success');
                var repetir = document.getElementById("repetir").value;
                if (inputtxt != repetir){
                    check.item(0).disabled = true;
                }else{
                    check.item(0).disabled = false;
                }
            })
        }else{
            document.getElementById("nou").style.color = "red";
            check.item(0).disabled = true;  
        }
    });
} 