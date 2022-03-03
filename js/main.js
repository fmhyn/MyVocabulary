'use strict'
{

const button = document.querySelectorAll('button');
const p = document.querySelectorAll('p');

const lists = [

  {Jptext:'こんにちは！', Egtext:'Hello!'},
  {Jptext:'おはよう！', Egtext:'Good morning!'},

];


  
  for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click',() => {
    
      if(button[i].textContent === ('英語にする')){
        p[i].textContent = lists[i].Egtext;
        button[i].textContent = ('日本語にする');
      }else{
        button[i].textContent = ('英語にする');
        p[i].textContent = lists[i].Jptext;
      }
    
    });
  
  }

  
  






}