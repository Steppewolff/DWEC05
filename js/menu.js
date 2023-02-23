const opcions = [
    {id: 1, text: "1. Oferta", enllaç: "oferta.html"},
    {id: 2, text: "2. Contrasenya", enllaç: "canviContrasenya.html"},
    {id: 3, text: "3. Alta", enllaç: "alta.html"},
    {id: 4, text: "4. Alta v2", enllaç: "alta2.html"},
    {id: 5, text: "5. Adreces", enllaç: "adreces.html"},
];


function generaMenu(actual, prefixe="") {
    const barra = document.getElementById("barra");
    opcions.forEach(opcio =>{
        const li=document.createElement("li");

        const a=document.createElement("a");
        a.appendChild(document.createTextNode(opcio.text));
        li.appendChild(a);

        if(opcio.id===actual){
            li.classList.add("active");
            a.setAttribute("href","#");
        }else{
            a.setAttribute("href",prefixe+opcio.enllaç);
        }
        barra.appendChild(li);
    });
}

export default generaMenu;