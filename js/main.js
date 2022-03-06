'use strict'
{


  const words = [
    
    {Etext:'Hello!', Jtext:'こんにちは！'},
    {Etext:'Good morning!', Jtext:'おはよう！'},
    {Etext:'Welcome!', Jtext:'ようこそ！'},
    {Etext:'Finish!', Jtext:'終わり！'},
    
  ];
  const wordsCount = words.length;
  const ps = [];
  const buttons = [];
  const divs = [];
  const section = document.createElement('section');
  const is = [];
  const checkedIs = [];



  function creatPs (){
    for(let i = 0; i < wordsCount; i++){
      const p = document.createElement('p');
      ps.push(p);
    }
    ps.forEach(p => {
      const t = ps.indexOf(p);
      p.textContent = words[t].Etext;
    });
  }


  function creatButtons (){
    for(let i = 0; i < wordsCount; i++){
      const button = document.createElement('button');
      buttons.push(button);
    }
    buttons.forEach(button => {
      button.textContent = '➡ 日本語';
    });
  }


  function creatIs(){
    const i = document.getElementById('i');
    for(let e = 0; e < wordsCount; e++){
      const ni = i.cloneNode(true);
      is.push(ni);
    }
    is.forEach(i => {
      i.classList.remove('none');
    });
  }


  function creatCheckedIs(){
    const checkedI = document.getElementById('checkedI');
    for(let e = 0; e < wordsCount; e++){
      const nCheckedI = checkedI.cloneNode(true);
      checkedIs.push(nCheckedI);
    }
  }


  function creatDivs(){
    for(let i = 0; i < wordsCount; i++){
      const div = document.createElement('div');
      divs.push(div);
    }
  }


  function creatEachDiv(){
    creatIs();
    creatCheckedIs();
    creatButtons();
    creatPs();
    creatDivs();
    for(let i =0; i < wordsCount; i++){
      divs[i].appendChild(is[i]);
      divs[i].appendChild(checkedIs[i]);
      divs[i].appendChild(ps[i]);
      divs[i].appendChild(buttons[i]);
    }
  }


  function creatSection(){
    creatEachDiv();
    for(let i = 0; i < wordsCount; i++){
      section.appendChild(divs[i]);
    }
  }

 
  function inToBody(){
    creatSection();
    const body = document.querySelector("body");
    const script = document.querySelector("script");
    body.insertBefore(section, script);
  }
  

  function transration(){
    for(let i = 0; i < wordsCount; i++){
      buttons[i].addEventListener('click',() => {
        if(buttons[i].textContent === ('➡ 英語')){
          ps[i].textContent = words[i].Etext;
          buttons[i].textContent = ('➡ 日本語');
        }else{
          buttons[i].textContent = ('➡ 英語');
          ps[i].textContent = words[i].Jtext;
        }
      });
    }
  }


  function check(){
    for(let i = 0; i < wordsCount; i++){
      is[i].addEventListener('click', () => {
        is[i].classList.add('none');
        checkedIs[i].classList.remove('none');
      });
      checkedIs[i].addEventListener('click', () => {
        checkedIs[i].classList.add('none');
        is[i].classList.remove('none');
      });
    }
  }


  inToBody();
  transration();
  check();

  
}