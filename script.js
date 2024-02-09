const perguntas = [
    {
        pergunta: "Quando foi fundado o Clube de Regatas do Flamengo?",
        respostas: ["15 de novembro de 1895", "5 de dezembro de 1911", "30 de janeiro de 1908"],
        correta: 0
    },
    {
        pergunta: "Qual é o apelido do Clube de Regatas do Flamengo?",
        respostas: ["Leão", "Urubu", "Rubro-Negro"],
        correta: 1
    },
    {
        pergunta: "Quantos títulos brasileiros de futebol o Flamengo possui até 2022?",
        respostas: ["5", "7", "8"],
        correta: 2
    },
    {
        pergunta: "Quem é o maior artilheiro da história do Flamengo?",
        respostas: ["Zico", "Adílio", "Romário"],
        correta: 0
    },
    {
        pergunta: "Em que ano o Flamengo conquistou a Copa Libertadores pela primeira vez?",
        respostas: ["1980", "1981", "1982"],
        correta: 1
    },
    {
        pergunta: "Qual é o estádio principal do Flamengo?",
        respostas: ["Estádio Luso-Brasileiro", "Estádio do Maracanã", "Estádio Raulino de Oliveira"],
        correta: 1
    },
    {
        pergunta: "Quem é o presidente atual do Clube de Regatas do Flamengo?",
        respostas: ["Marcos Braz", "Rodolfo Landim", "Bruno Spindel"],
        correta: 1
    },
    {
        pergunta: "Quantos títulos da Copa do Brasil o Flamengo possui até 2022?",
        respostas: ["3", "4", "5"],
        correta: 2
    },
    {
        pergunta: "Qual é o mascote oficial do Flamengo?",
        respostas: ["Zé Carioca", "Flapito", "Urubu Rei"],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do primeiro presidente do Flamengo?",
        respostas: ["Alberto Borgerth", "José Bastos Padilha", "Pedro Ferreira"],
        correta: 1
    }
];

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

const quiz = document.querySelector('#quiz')

// Faz entrega dos dados do HTML para o JS
const template = document.querySelector('template')

for(const item of perguntas){

  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){

      const dt = quizItem.querySelector('dl dt').cloneNode(true)

      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)

      dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta

          corretas.delete(item)

          if(estaCorreta) {
              corretas.add(item)
          }

          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }

      // Coloca as respostas na tela
      quizItem.querySelector('dl').appendChild(dt)

  }

  // Remove o template inserido no HTML
  quizItem.querySelector('dl dt').remove()

  // Coloca a pergunta na tela
  quiz.appendChild(quizItem)

}