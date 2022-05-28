var carta1 = {
    nome: "Bulbassauro",
    atributos: { 
        ataque: 7,
        defesa: 8,
        magia: 6,
        mana: 8,
    }
};

var carta2 = {
    nome: "Dart Vader",
    atributos: { 
        ataque: 9,
        defesa: 8,
        magia: 5,
        mana: 6
    }
};

var carta3 = {
    nome: "Shiryu de dragão",
    atributos: { 
        ataque: 5,
        defesa: 9,
        magia: 10,
        mana: 7
    }
};

var carta4 = {
    nome: "Cavaleiro de Gêmeos",
    atributos: { 
        ataque: 10,
        defesa: 5,
        magia: 5,
        mana: 9
    }
};

var carta5 = {
    nome: "Goku",
    atributos: { 
        ataque: 9,
        defesa: 9,
        magia: 3,
        mana: 7
    }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina 
var cartaJogador 

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaMaquina == numeroCartaJogador){   // while = enquanto o numero da cara da maquina for igual ao numero da carta do jogador, ira executar o comando ate a carta ser diferente. o if executaria apenas uma vez, enquanto o while executa ate for verdade.
        numeroCartaJogador = parseInt(Math.random() * 5);
    }; 
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();

};

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio'name='atributo' value='" + atributo  + "' checked>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
};

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        };
    };
};

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você Venceu"
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você Perdeu"
    } else {
        elementoResultado.innerHTML = "Empate"
    }


    console.log(atributoSelecionado);
};

var recarregar = document.getElementById("recarregar");
recarregar.addEventListener("click", function() {
    location.reload();
});




