const buttons = document.querySelectorAll('input');
const playerElems = document.querySelectorAll('.player-graphic');
const computerElems = document.querySelectorAll('.computer-graphic');
const result = document.querySelector('.result-graphic');

let ioIndex;
    const io = new IntersectionObserver((entries, observer) => { // 어떤 요소가 눈에 보이는지 안보이는지 체크할 수 있다.
        ioIndex = entries[0].target.dataset.index * 1; // 맨 마지막에 일을 곱해주는 이유는 숫자로 string -> number 변환 위함
    });
for (let i = 0; i < playerElems.length; i++) {
    io.observe(playerElems[i]);
    io.observe(computerElems[i]);
    playerElems[i].dataset.index = i;
    computerElems[i].dataset.index2 = i;
}
function psr(){
    const psr = new SpeechSynthesisUtterance("Paper Scissors Rock!");
    window.speechSynthesis.speak(psr);
}
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        // paper scissors rock sound
        if (e.count = 1){
            psr();
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        // check and remove images before visible
        for (i = 0, j = 0; i < playerElems.length, j < computerElems.length; i++, j++){
            if (e && playerElems[i].classList.contains('visible')) {
                playerElems[i].classList.remove('visible');
            }
            if (e && computerElems[j].classList.contains('visible')) {
                computerElems[j].classList.remove('visible');
            }
        }
        const player = e.target.defaultValue;
        const computer = Math.floor(Math.random() * 3);
        playerElems[player].classList.add('visible');
        computerElems[computer].classList.add('visible');
        if(player == computer){
            result.innerHTML = 'DRAW';
            console.log('draw!', player, computer);
        }else if(player == '0' && computer == '1'){
            result.innerHTML = 'LOSE';
            console.log('lose!', player, computer);
        }else if(player == '1' && computer == '2'){
            result.innerHTML = 'LOSE';
            console.log('lose!', player, computer);
        }else if(player == '2' && computer == '0'){
            result.innerHTML = 'LOSE';
            console.log('lose!', player, computer);
        }else{
            result.innerHTML = 'WIN';
            console.log('win!', player, computer);
        }
    });
}