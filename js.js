var carta1 = {
    nome: "Bulbassauro",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: { 
        ataque: 7,
        defesa: 8,
        magia: 6,
    }
};

var carta2 = {
    nome: "Dart Vader",
    imagem:"https://img.elo7.com.br/product/main/34E0766/papel-parede-star-wars-darth-vader-stormtroopers-3-10x3-0-m-menino.jpg",
    atributos: { 
        ataque: 9,
        defesa: 8,
        magia: 5,
    }
};

var carta3 = {
    nome: "Shiryu de dragão",
    imagem:"https://cdn.awsli.com.br/600x450/1206/1206083/produto/129234498/a00db1a45c.jpg",
    atributos: { 
        ataque: 5,
        defesa: 9,
        magia: 10,
    }
};

var carta4 = {
    nome: "Cavaleiro de Gêmeos",
    imagem:"http://4.bp.blogspot.com/-NoR2uXlBgjM/U-YpEbcs9mI/AAAAAAAAAGI/zwl8BhkvkMU/s1600/Saga_de_gemeos.jpg",
    atributos: { 
        ataque: 10,
        defesa: 5,
        magia: 5,
    }
};

var carta5 = {
    nome: "Goku",
    imagem:"https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/01/goku.jpeg",
    atributos: { 
        ataque: 9,
        defesa: 9,
        magia: 3,
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
    document.getElementById("btnLimpar").disabled = true;

    exibirCartaJogador();
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
    };

    

    document.getElementById("btnLimpar").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
};

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id= 'opcoes' class='carta-status'>"
    
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    };

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto +  "</div>";
};   

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id= 'opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    };

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto +  "</div>";
}; 

function limpar() {
    const limparResultado = document.getElementById("resultado")
    limparResultado.innerHTML = ""

    const limparCartaJogador = document.getElementById("carta-jogador")
    limparCartaJogador.style.backgroundImage = ""

    const limparCartaMaquina = document.getElementById("carta-maquina")
    limparCartaMaquina.style.backgroundImage = ""

    const limparOpcoes = document.querySelector(".carta-status");
    limparOpcoes.innerHTML = "";

    const limparSubtitle = document.querySelector(".carta-subtitle");
    limparSubtitle.innerHTML = "";

    ///////////////////// limpar carta da maquina
    const limparTitulo = document.querySelector('.carta p');
    limparTitulo.innerHTML = ''
    const limparOpcoesMaquina = document.querySelector('.carta .carta-status');
    limparOpcoesMaquina.innerHTML = ''

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnLimpar").disabled = true;
}

function contador() {

}

