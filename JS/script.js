const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação que adiciona interatividade a um site.",
            "Uma linguagem de marcação usada para estruturar o conteúdo de uma página web.",
            "Um estilo de folha de estilos usado para aplicar design a elementos HTML.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 10;",
            "let myVar = 10;",
            "const myVar = 10;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de igualdade de valor e tipo.",
            "Atribuição de valor.",
            "Comparação de igualdade de valor.",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que é passada como argumento para outra função e é chamada quando um evento ocorre ou quando uma operação é concluída.",
            "Uma função que retorna um valor específico.",
            "Uma função que declara variáveis locais.",
        ],
        correta: 0
    },
    {
        pergunta: "Como você pode adicionar um evento de clique a um elemento HTML em JavaScript?",
        respostas: [
            "document.getElementById('myButton').addEventListener('click', minhaFuncao);",
            "myButton.onclick = minhaFuncao;",
            "myButton.onClick = minhaFuncao;",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
        respostas: [
            "Selecionar o primeiro elemento do documento que corresponde a um seletor especificado.",
            "Selecionar todos os elementos do documento que correspondem a um seletor especificado.",
            "Selecionar o último elemento do documento que corresponde a um seletor especificado.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de comentar código em JavaScript?",
        respostas: [
            "// Este é um comentário de uma linha.",
            "<!-- Este é um comentário de uma linha. -->",
            "/* Este é um comentário de várias linhas. */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'map' em JavaScript?",
        respostas: [
            "Criar um novo array com os resultados de chamar uma função para cada elemento do array.",
            "Filtrar os elementos de um array com base em uma condição específica.",
            "Ordenar os elementos de um array em ordem alfabética.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
        respostas: [
            "'null' é atribuído explicitamente a uma variável pelo programador, enquanto 'undefined' é atribuído automaticamente pelo JavaScript quando uma variável é declarada mas não inicializada.",
            "'null' é atribuído automaticamente pelo JavaScript quando uma variável é declarada mas não inicializada, enquanto 'undefined' é atribuído explicitamente a uma variável pelo programador.",
            "Não há diferença, 'null' e 'undefined' são intercambiáveis em JavaScript.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'toFixed' em JavaScript?",
        respostas: [
            "Formatar um número com um número específico de casas decimais.",
            "Arredondar um número para o inteiro mais próximo.",
            "Converter um número para uma string.",
        ],
        correta: 0
    },
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas  

for (const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    

   for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','perguntas-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta) {
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }


      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}