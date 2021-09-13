const input = document.querySelector('.kotak .padding .input form input');
const send = document.querySelector('.kotak .padding .input form button');
const form = document.querySelector('.kotak .padding .input form');
const chatbox = document.querySelector('.kotak .padding .chatbox');

let p = '<div class="incoming">';
let l = '</div>';

form.onsubmit = (e)=>{
  e.preventDefault();
}

send.onclick = ()=>{
  if (input.value != "") {
    chatbox.innerHTML += '<div class="pembatas"><div class="outgoing">'+input.value+'</div></div>';
    
  
  for (let i = 0; i < quest.length; i++) {
    if (input.value == quest[i].user) {
      chatbox.innerHTML += p+quest[i].bot+l;
    }
  }
    
    
    
    
    
    input.value = "";
  }
}
