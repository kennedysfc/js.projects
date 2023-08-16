let símbolo1 = "R$";
let símbolo2 = "$";
let símbolo3 = "£";

function moeda2(símbolo) {
    if (símbolo == "R$") {
        console.log("Real");

    } else if (símbolo == "$") {
        console.log("Dólar");

    } else if (símbolo == "£") {
        console.log("Libra");

    } else {
        console.log("Não encontrado");
    }
}