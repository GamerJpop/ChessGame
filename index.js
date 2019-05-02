function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

    function toggle(cell) {

        let Bluechess = cell.children[0]
        let Redchess = cell.children[1]

        if(!Bluechess.hidden && Redchess.hidden) {
            Redchess.hidden = false;
            Bluechess.hidden = true;


           }

        else if(Bluechess.hidden && !Redchess.hidden) {
            Redchess.hidden = true;
            Bluechess.hidden = true;
           }

        else if(Bluechess.hidden && Redchess.hidden) {
            Redchess.hidden = true;
            Bluechess.hidden = false;
           }
    }  
