'use strict'
const questionTitle = document.getElementById('question-title');
const choiceBoxes = {
    label1 : document.getElementById('label1'),
    label2 : document.getElementById('label2'),
    label3 : document.getElementById('label3'),
    label4 : document.getElementById('label4'),
    choice1 : document.getElementById('choice1'),
    choice2 : document.getElementById('choice2'),
    choice3 : document.getElementById('choice3'),
    choice4 : document.getElementById('choice4'),
    choiceName : document.getElementsByName('choices')
}
const answerButton = document.getElementById('answer-button');
const judgeArea = document.getElementById("judge-area");

const quizsets = [
    {
        question : 'アクアラグナを起こす風の名前は？',
        choice : ['ノックフリップ','カロック','アクアローム','フェンラル'],
        answer : 'カロック'
    },
    {
        question : '24巻で登場した赤髪海賊団新入りの名前は？',
        choice : ['ラッキー・ルゥ','スピード・ジル','キングデュー','ロックスター'],
        answer : 'ロックスター'
    }
]

const qstNo = Math.floor(Math.random() * quizsets.length);
console.log(qstNo);
questionTitle.innerText = quizsets[qstNo].question;

choiceBoxes.label1.innerText = quizsets[qstNo].choice[0];
choiceBoxes.label2.innerText = quizsets[qstNo].choice[1];
choiceBoxes.label3.innerText = quizsets[qstNo].choice[2];
choiceBoxes.label4.innerText = quizsets[qstNo].choice[3];
choiceBoxes.choice1.setAttribute('value',quizsets[qstNo].choice[0]);
choiceBoxes.choice2.setAttribute('value',quizsets[qstNo].choice[1]);
choiceBoxes.choice3.setAttribute('value',quizsets[qstNo].choice[2]);
choiceBoxes.choice4.setAttribute('value',quizsets[qstNo].choice[3]);

answerButton.onclick = () => {
    let choiceValue = '';
    for(let i=0; i<choiceBoxes.choiceName.length; i++){
        if(choiceBoxes.choiceName.item(i).checked){
            choiceValue = choiceBoxes.choiceName.item(i).value;
        }
    }
    let judgeText = document.createElement('p');
    judgeArea.innerText = '';
    if(choiceValue === quizsets[qstNo].answer){
        judgeText.innerText = '正解です！'
    }else{
        judgeText.innerText = '不正解です(´;ω;｀)'
    };
    judgeArea.appendChild(judgeText);
}