function progress() {
    var prg = document.getElementById('progress');
    var percent = document.getElementById('percentCount');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 25);

    function frame() {
        if(counter == 100) {
            clearInterval(id);
        } else {
            progress += 4;
            counter += 1;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';
        }
    }
    
}

progress();