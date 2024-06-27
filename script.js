const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Você acabou de se formar na faculdade de biologia marinha, e se mudou para a praia para ficar mais perto de seu ambiente de trabalho. Sempre foi seu sonho fazer essa faculdade, mas infelizmente não há vagas em sua cidade, então o que você faz agora?",
        alternativas: [
            {
                texto: "Procuro outro trabalho.",
                afirmacao: "você queria muito trabalhar como bióloga(o), mas teria que deixar esse sonho de lado por um momento"},
            {
                texto: "Espero outra oportunidade.",
                afirmacao: "Você poderia esperar para realizar seu sonho,",
            }
        ]
    },
    {
        enunciado: "Sua amiga(o) te pergunta se você quer ajudá-lo(a) em uma ONG para limpeza e resgate de animais em mares,oceanos e rios ali perto.",
        alternativas: [
            {
                texto: "Aceito, pois será uma nova experiência.",
                afirmacao: "Pois é muito importante cuidar da futura vida marinha, já que algum dia vou trabalhar com ela.",
            },
            {
                texto: "Aceito, mas não era bem o que eu queria no momento.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No novo emprego, você pode escolher em qual área vai atuar: ",
        alternativas: [
            {
                texto: "Eu irei ajudar a resgatar animais",
                afirmacao: ""
            },
            {
                texto: "Eu decidi ajudar a limpar as águas.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No final de um longo dia de trabalho, você está voltando para casa, e encontra uma tartaruga filhote enrolada em plático, impossibilitanto que ela se mexa e chege na água.",
        alternativas: [
            {
                texto: "Decido ajudalá, tiro o plástico e cuido de seus ferimentos.",
                afirmacao: "Você realmente gosta de animais marinhos, este é seu local de trabalho, e você fica feliz em ajudar esses animais, isso conserteza faz de você um bom biólogo(a)."
            },
            {
                texto: "Estou cansado do trabalho, então deixo ela lá, esperando que outra pessoa a ajude.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Em um futuro não muito distante, você é chamado(a) para fazer uma palestra para crianças de uma escola, na cidade que você está morando devido a sua profissão.",
        alternativas: [
            {
                texto: "Você aceita e decide falar de como é importante cuidar da vida marinha, jogando o lixo no lugar certo por exemplo, e outras atitudes sustentáveis para a vida nos mares, rios e oceanos!",
                afirmacao: ""
            },
            {
                texto: "Você decide falar sobre como foi sua faculdade, quais foram os desafios enfrentados por você ao longo do curso, e como é o mercado de trabalho de sua profissão. O que também pode ajudar as crianças a pensarem na sua futura profissão.  ",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();