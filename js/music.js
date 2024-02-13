function preMp3(){
    if ( count > 0 ){
        count--;
    }
    player.src = musicsNow[count];
    player.play();
}

function nextMp3(){
    if ( count < maxCount ){
        count++;
    }else if(count === maxCount){
        count = 0;
    }
    player.src = musicsNow[count];
    player.play();
}

function selectMp3(){
    let select = document.querySelector('select');
    let option = select.options[select.selectedIndex].text;
    if (option==='全部'){
        musicsNow = musics;
    }else{
        musicsNow = musics.filter(item => item.includes(option));
    }
    maxCount = musicsNow.length - 1;
    count = Math.floor(Math.random() * musicsNow.length);
    player.src = musicsNow[count];
    player.play();

}

window.onload = function() {
    maxCount = musicsNow.length - 1;
    count = Math.floor(Math.random() * musicsNow.length);
    player.src = musicsNow[count];  // 选择随机音乐
    player.addEventListener("ended", function(){
        nextMp3();
    });
}