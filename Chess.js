var selectedchess = undefined;

var hi = false;



var chesss = [


    {row: 1, cell: 1, color: 'white', type: 'pawn'},
    {row: 1, cell: 2, color: 'white', type: 'pawn'},
    {row: 1, cell: 3, color: 'white', type: 'pawn'},
    {row: 1, cell: 4, color: 'white', type: 'pawn'},
    {row: 1, cell: 5, color: 'white', type: 'pawn'},
    {row: 1, cell: 6, color: 'white', type: 'pawn'},
    {row: 1, cell: 7, color: 'white', type: 'pawn'},
    {row: 1, cell: 8, color: 'white', type: 'pawn'},
    {row: 2, cell: 1, color: 'white', type: 'pawn'},
    {row: 2, cell: 2, color: 'white', type: 'pawn'},
    {row: 2, cell: 3, color: 'white', type: 'pawn'},
    {row: 2, cell: 4, color: 'white', type: 'pawn'},
    {row: 2, cell: 5, color: 'white', type: 'pawn'},
    {row: 2, cell: 6, color: 'white', type: 'pawn'},
    {row: 2, cell: 7, color: 'white', type: 'pawn'},
    {row: 2, cell: 8, color: 'white', type: 'pawn'},


    {row: 7, cell: 1, color: 'black', type: 'pawn'},
    {row: 7, cell: 2, color: 'black', type: 'pawn'},
    {row: 7, cell: 3, color: 'black', type: 'pawn'},
    {row: 7, cell: 4, color: 'black', type: 'pawn'},
    {row: 7, cell: 5, color: 'black', type: 'pawn'},
    {row: 7, cell: 6, color: 'black', type: 'pawn'},
    {row: 7, cell: 7, color: 'black', type: 'pawn'},
    {row: 7, cell: 8, color: 'black', type: 'pawn'},
    {row: 8, cell: 1, color: 'black', type: 'pawn'},
    {row: 8, cell: 2, color: 'black', type: 'pawn'},
    {row: 8, cell: 3, color: 'black', type: 'pawn'},
    {row: 8, cell: 4, color: 'black', type: 'pawn'},
    {row: 8, cell: 5, color: 'black', type: 'pawn'},
    {row: 8, cell: 6, color: 'black', type: 'pawn'},
    {row: 8, cell: 7, color: 'black', type: 'pawn'},
    {row: 8, cell: 8, color: 'black', type: 'pawn'},

]

function renderchesss() {
    console.log('rendering checekers')
    clearBoard()
    $(`.black.cell`).click(moveSelectedchessHere)
    $(`.red.cell`).click(moveSelectedchessHere)

        for(let i=0; i<chesss.length; i++) {
            let chess = chesss[i];
            console.log(chess)
            if(chess.row && chess.cell && chess.type) {
            $(`#cell-${chess.row}-${chess.cell}`).html(renderchess(i,chess.color) )
             $(`#cell-${chess.row}-${chess.cell}`).unbind('click')

            } else {
                console.log(`put`, chess, `into out of play`)
                $(`#out-of-play-pawn`).append(renderchess(i,chess.color))
            }


        }
        $('.chess').click(selectchess)
}

function renderchess(i, color, type) {


    return `<div id="chess-${i}" class="chess ${color}-chess" bacon="${i}">
          <a><i class="fas fa-chess-pawn" id="typething"></i></a>
    </div>`


}

function selectchess() {
    let chess = $(this)
    if(chess.hasClass(`selected`)) {
        console.log(`this chess is allready selected`)
        remove()
        return
    }
    $(`.selected`).removeClass(`selected`)

    let chessIndex = chess.attr('bacon')
    console.log(`chessIndex == `, chessIndex)


    selectedchess = chesss[chessIndex]
    console.log(`Finished selecting chess: `, selectedchess)


    chess.addClass(`selected`)
}

function remove() {

    console.log(`removing this`, selectedchess)
    selectedchess.row = 0
    selectedchess.cell = undefined
    selectedchess = undefined

    renderchesss()
}
