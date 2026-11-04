// Quiz de conversão — Método Leveza 28D
// Personalize o destino do botão no checkoutUrl abaixo.
const checkoutUrl = "https://pay.cakto.com.br/3cqus3m_1280605";

const questions = [
  {
    kicker: "VAMOS COMEÇAR PELO SEU OBJETIVO",
    title: "O que você mais gostaria de conquistar neste momento?",
    sub: "Pense no que faria diferença na sua vida hoje.",
    options: [
      "Me sentir melhor com meu corpo e minhas roupas",
      "Ter mais disposição para o dia a dia",
      "Organizar minha alimentação e minha rotina",
      "Voltar a cuidar de mim e da minha saúde"
    ]
  },
  {
    kicker: "ENTENDENDO SUA MAIOR DIFICULDADE",
    title: "O que mais dificulta sua jornada atualmente?",
    sub: "Escolha o desafio que mais parece com a sua realidade.",
    options: [
      "Minha rotina é corrida e falta tempo",
      "Começo animada, mas não consigo manter a constância",
      "Fico perdida com tantas dicas e informações",
      "Tenho dificuldade em controlar minhas escolhas alimentares"
    ]
  },
  {
    kicker: "ISSO ACONTECE COM VOCÊ?",
    title: "Quando você decide mudar seus hábitos, o que costuma acontecer?",
    sub: "Não precisa ter vergonha da resposta. É justamente para isso que estamos conversando.",
    options: [
      "Começo muito motivada, mas desisto depois de alguns dias",
      "Tento fazer tudo perfeito e acabo me frustrando",
      "Não sei exatamente por onde começar",
      "Consigo por um tempo, mas tenho dificuldade em continuar"
    ]
  },
  {
    kicker: "SUA ROTINA REAL",
    title: "Quanto tempo você consegue reservar para cuidar de si durante o dia?",
    sub: "A ideia é pensar em algo que caiba na sua vida de verdade.",
    options: [
      "Tenho poucos minutos livres",
      "Consigo separar de 15 a 30 minutos",
      "Tenho cerca de 30 a 60 minutos",
      "Minha rotina varia bastante de um dia para o outro"
    ]
  },
  {
    kicker: "O QUE VOCÊ PRECISA AGORA?",
    title: "O que mais ajudaria você a dar o primeiro passo?",
    sub: "Imagine ter uma orientação clara para não precisar descobrir tudo sozinha.",
    options: [
      "Um caminho organizado, com etapas para seguir",
      "Ideias práticas para melhorar minhas refeições",
      "Pequenas metas que eu consiga manter",
      "Entender como construir hábitos sem radicalismos"
    ]
  },
  {
    kicker: "SUA DECISÃO COMEÇA AQUI",
    title: "Se você tivesse um manual simples para orientar seus próximos 28 dias, o que faria?",
    sub: "Escolha a opção que representa melhor seu momento.",
    options: [
      "Começaria hoje. Quero sair da inércia",
      "Quero conhecer o método e entender como funciona",
      "Estou avaliando se é o momento certo para mim",
      "Quero começar, mas preciso de algo que caiba no meu orçamento"
    ]
  }
];

const introScreen = document.getElementById("introScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const optionsEl = document.getElementById("options");
const stepLabel = document.getElementById("stepLabel");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const questionKicker = document.getElementById("questionKicker");
const questionTitle = document.getElementById("questionTitle");
const questionSub = document.getElementById("questionSub");
const answers = Array(questions.length).fill(null);
let current = 0;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("checkoutBtn").href = checkoutUrl;

function showScreen(screen) {
  [introScreen, questionScreen, resultScreen].forEach(el => el.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = questions[current];
  const percent = Math.round(((current + 1) / questions.length) * 100);
  stepLabel.textContent = `PERGUNTA ${current + 1} DE ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  questionKicker.textContent = q.kicker;
  questionTitle.textContent = q.title;
  questionSub.textContent = q.sub;
  backBtn.style.visibility = current === 0 ? "hidden" : "visible";
  nextBtn.innerHTML = current === questions.length - 1 ? 'VER MEU RESULTADO <span>→</span>' : 'CONTINUAR <span>→</span>';
  nextBtn.disabled = answers[current] === null;
  optionsEl.innerHTML = "";

  q.options.forEach((label, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${answers[current] === index ? " selected" : ""}`;
    button.setAttribute("aria-pressed", answers[current] === index ? "true" : "false");
    button.innerHTML = `<span class="option-mark">✓</span><span>${label}</span>`;
    button.addEventListener("click", () => {
      answers[current] = index;
      renderQuestion();
    });
    optionsEl.appendChild(button);
  });
}

function createResult() {
  const obstacle = answers[1];
  const pattern = answers[2];
  const routine = answers[3];
  const need = answers[4];

  const obstacleMessages = [
    "Sua rotina parece exigir bastante de você. Por isso, começar com orientações simples e adaptáveis pode ser mais realista do que tentar mudar tudo de uma vez.",
    "Manter a constância parece ser seu maior desafio. Em vez de depender apenas da motivação, vale construir pequenas ações que sejam possíveis de repetir.",
    "Com tanta informação disponível, é fácil ficar sem saber qual caminho seguir. Ter um material organizado pode ajudar a transformar informação em ação.",
    "Você quer fazer escolhas melhores, mas sente que essa parte ainda é difícil. Aprender princípios simples e aplicáveis pode ajudar a trazer mais clareza."
  ];

  const patternMessages = [
    "Você não precisa esperar pela motivação perfeita. Um começo pequeno e repetível pode ser mais útil do que uma mudança radical.",
    "A busca pela perfeição pode tornar o processo pesado. O foco pode estar em escolhas consistentes, não em acertar tudo todos os dias.",
    "O primeiro passo não precisa ser complicado. Ter uma sequência de orientações pode diminuir a sensação de estar perdida.",
    "Retomar depois de um dia difícil faz parte de construir consistência. O importante é não transformar um tropeço em desistência."
  ];

  const routineMessages = [
    "Seu plano precisa respeitar o tempo que você realmente tem. Mudanças pequenas e realistas podem ser mais sustentáveis.",
    "Você já consegue reservar um intervalo para si. Organizar esse tempo pode ajudar a colocar hábitos em prática.",
    "Você tem uma janela de tempo que pode ser usada para cuidar de si com mais intenção, sem precisar ocupar cada minuto do dia.",
    "Sua rotina muda, então flexibilidade é importante. Um guia deve servir como referência, não como uma cobrança rígida."
  ];

  const needMessages = [
    "Um roteiro organizado pode ajudar você a saber o que priorizar, sem precisar juntar dicas aleatórias.",
    "Orientações práticas sobre alimentação podem ajudar você a fazer escolhas com mais consciência.",
    "Metas pequenas e possíveis podem facilitar a construção de constância ao longo do tempo.",
    "Entender os fundamentos dos hábitos saudáveis pode ajudar a fugir de soluções extremas."
  ];

  const titleByGoal = [
    "Seu foco é se sentir melhor na própria rotina.",
    "Você quer recuperar disposição e energia no dia a dia.",
    "Você está buscando mais organização e clareza.",
    "Você quer voltar a colocar seu autocuidado entre as prioridades."
  ];

  const goal = answers[0] ?? 0;
  document.getElementById("resultTitle").textContent = titleByGoal[goal];
  document.getElementById("resultText").textContent =
    `${obstacleMessages[obstacle] || obstacleMessages[0]} ${patternMessages[pattern] || patternMessages[0]}`;
  document.getElementById("resultInsight").textContent =
    `${routineMessages[routine] || routineMessages[0]} ${needMessages[need] || needMessages[0]} O Método Leveza 28D reúne orientações educativas para ajudar você a organizar esse começo em 28 dias.`;
}

startBtn.addEventListener("click", () => {
  current = 0;
  showScreen(questionScreen);
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  if (answers[current] === null) return;
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    createResult();
    showScreen(resultScreen);
  }
});

backBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  } else {
    showScreen(introScreen);
  }
});

document.getElementById("restartBtn").addEventListener("click", () => {
  answers.fill(null);
  current = 0;
  showScreen(introScreen);
});

document.getElementById("checkoutBtn").addEventListener("click", (event) => {
  if (checkoutUrl.includes("SEU-LINK-DE-CHECKOUT")) {
    event.preventDefault();
    alert("Configure seu link real de checkout no arquivo script.js antes de publicar o quiz.");
  } else {
    event.currentTarget.href = checkoutUrl;
  }
});
