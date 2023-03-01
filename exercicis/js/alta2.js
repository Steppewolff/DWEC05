window.addEventListener("load", upper_nom);
window.addEventListener("load", upper_llinatge);

function upper_nom(){
    document.getElementById('nom').addEventListener("keyup", function(){
        let nom = document.getElementById('nom');
        let string = nom.value;

        let words = string.split(" ");
        for (let word = 0; word < words.length; word++){
            words[word] = words[word][0].toUpperCase() + words[word].substr(1);
        }

        let mostrar = words.join(" ");
        document.getElementById('nom').value = mostrar;
    })
}

function upper_llinatge(){
    document.getElementById('llinatges').addEventListener("keyup", function(){
        let llinatges = document.getElementById('llinatges');
        let string = llinatges.value;

        let words = string.split(" ");
        for (let word = 0; word < words.length; word++){
            words[word] = words[word][0].toUpperCase() + words[word].substr(1);
        }

        let mostrar = words.join(" ");
        document.getElementById('llinatges').value = mostrar;
    })
}