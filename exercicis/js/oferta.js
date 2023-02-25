window.addEventListener("load", function(){title_ayuda()})

function title_ayuda(){
    const form_elements = document.getElementsByClassName('form-control');

    for (let i = 0; i < form_elements.length-1; i++){
        form_elements.item(i).addEventListener("focusin", function(){
            document.getElementById('ajuda').innerHTML = form_elements.item(i).title;
        })
        form_elements.item(i).addEventListener("focusout", function(){
            document.getElementById('ajuda').innerHTML = "";
        })
        
    }
};