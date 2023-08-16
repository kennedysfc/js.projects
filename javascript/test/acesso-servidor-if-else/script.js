let objetoServidor = {
    acesso: true,
    login: "mundojs",
};

let objetoServidor2 = {
    erro: "Erro ao conectar ao servidor",
};

function conexaoLogin(respostaDoServidor) {
    if(respostaDoServidor.erro == null){
        if(respostaDoServidor.acesso){
            console.log('login: ${respostaDoServidor.login}');
        }else{
            console.log("acesso negado!");
        }
    }else{
        console.log(respostaDoServidor.erro);
    }
}