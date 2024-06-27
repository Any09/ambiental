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
                afirmacao: "Você ",
            }
        ]
    },
    {
        enunciado: "Sua amiga(o) te pergunta se você quer ajudá-lo(a) em uma ONG para limpeza e resgate de animais em mares,oceanos e rios ali perto.",
        alternativas: [
            {
                texto: "Aceito, pois será uma nova experiência.",
                afirmacao: "Pois é muito importante cuidar da futura vida marinha"
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
                afirmacao: "."
            },
            {
                texto: "Estou cansado do trabalho, então deixo ela lá, esperando que outra pessoa a ajude.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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