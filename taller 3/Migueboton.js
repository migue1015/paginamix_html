window.onload = function() {
    const nomDiv = div => document.getElementById(div);
    const Sumahola = () => {
        let Numerador1 = nomDiv("Numerador1").value;
        let Denominador1 = nomDiv("Denominador1").value;
        let Numerador2 = nomDiv("Numerador2").value;
        let Denominador2 = nomDiv("Denominador2").value;
        if (Denominador2.length === 0 || Denominador1.length === 0){
            alert("Error Valor indeterminado");} 
            else { 
                const N1 = Numerador1 * Denominador2;
                const N2 = Denominador2 * Numerador2;
                const Nutotal = N1 + N2;
                const Dtotal = Denominador1 + Denominador2;
                nomDiv ("Resultado").innerHTML = 
                "La suba da como resultado:" + Nutotal.toFixed(2) + "/" + Dtotal.toFixed(2);
            }
    nomDiv("Suma").addEventListener("click", function(event) {
        Sumahola();
    })
    }
    const Restahola = () => {
        let Numerador1 = nomDiv("Numerador1").value;
        let Denominador1 = nomDiv("Denominador1").value;
        let Numerador2 = nomDiv("Numerador2").value;
        let Denominador2 = nomDiv("Denominador2").value;
        if (Denominador2.length === 0 || Denominador1.length === 0){
            alert("Error Valor indeterminado");} 
            else { 
                const S1 = Numerador1 * Denominador2;
                const S2 = Denominador2 * Numerador2;
                const NSutotal = S1 - S2;
                const DStotal = Denominador1 + Denominador2;
                nomDiv ("Resultado").innerHTML = 
                "La suba da como resultado:" + NSutotal.toFixed(2) + "/" + DStotal.toFixed(2);
            }
    nomDiv("Resta").addEventListener("click", function(event) {
        Restahola();
    })
}
const Multiplicacionhola = () => {
    let Numerador1 = nomDiv("Numerador1").value;
    let Denominador1 = nomDiv("Denominador1").value;
    let Numerador2 = nomDiv("Numerador2").value;
    let Denominador2 = nomDiv("Denominador2").value;
    if (Denominador2.length === 0 || Denominador1.length === 0){
        alert("Error Valor indeterminado");} 
        else { 
            const M1 = Numerador1 * Numerador2;
            const M2 = Denominador1 * Denominador2;
            nomDiv ("Resultado").innerHTML = 
            "La suba da como resultado:" + M1.toFixed(2) + "/" + M2.toFixed(2);
        }
nomDiv("Multiplicacion").addEventListener("click", function(event) {
    Multiplicacionhola();
})
}
const Divisionhola = () => {
    let Numerador1 = nomDiv("Numerador1").value;
    let Denominador1 = nomDiv("Denominador1").value;
    let Numerador2 = nomDiv("Numerador2").value;
    let Denominador2 = nomDiv("Denominador2").value;
    if (Denominador2.length === 0 || Denominador1.length === 0){
        alert("Error Valor indeterminado");} 
        else { 
            const DAA = Numerador1 * Denominador2;
            const DBB = Numerador2 * Denominador1;
            nomDiv ("Resultado").innerHTML = 
            "La suba da como resultado:" + DAA.toFixed(2) + "/" + DBB.toFixed(2);
        }
nomDiv("Division").addEventListener("click", function(event) {
    Divisionhola();
})
}
}