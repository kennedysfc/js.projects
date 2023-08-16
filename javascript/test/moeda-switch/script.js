let símbolo1 = "R$";
let símbolo2 = "$";
let símbolo3 = "£";

function moeda(símbolo) {
    switch (símbolo) {
        case "R$":
            console.log("Real");
            break;
        case "$":
            console.log("Dólar");
            break;
        case "£":
            console.log("Libra")
            break;
        default:
            console.log("Não encontrado");
            break;
    }
}