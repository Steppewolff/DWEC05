window.addEventListener("load", check_date);

function check_date(){
    document.getElementById("nom").disabled = true;
    document.getElementById("llinatges").disabled = true;
    var check = document.getElementsByName('bEntrar');
    check.item(0).disabled = true;
    document.getElementById("neixement").addEventListener("keyup", function(){
        var input_date = document.getElementById("neixement").value;
        var regex_date = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/
//        var regex_date = /([0][1-9]|[1-2][0-9]|3[0-1])[ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic][19|20|21][0-9]{2}/
        if (input_date.match(regex_date)){
            document.getElementById("neixement").style.color = '';
            document.getElementById("nom").disabled = false;
            document.getElementById("llinatges").disabled = false;
            document.getElementById("nom").addEventListener("keyup", function(){
                var input_nom = document.getElementById("nom").value;
                var regex_nom = /[a-zA-Z]{2,}/
                if (input_nom.match(regex_nom)){
                    document.getElementById("nom").style.color = ""
                    document.getElementById("llinatges").addEventListener("keyup", function(){
                        var input_llinatges = document.getElementById("llinatges").value;                
                        var regex_llinatges = /[a-zA-Z]{2,}/      
                        if (input_llinatges.match(regex_llinatges)){
                            document.getElementById("llinatges").style.color = ""
                            check.item(0).disabled = false;
                        }else{
                            document.getElementById("llinatges").style.color = "red"
                        }
                    })
                }else{
                    document.getElementById("nom").style.color = "red"
                }      
            })
        }else{
            document.getElementById("neixement").style.color = "red"
            document.getElementById("nom").disabled = true;
            document.getElementById("llinatges").disabled = true;
            check.item(0).disabled = true;
        }
    })
}
