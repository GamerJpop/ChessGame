


$(document).ready(function () {
    console.log('document ready')
    $('#board-container').html(renderBoard())
    renderchesss()
})



function renderBoard() {
    return `
        ${renderRow(1)}
        ${renderRow(2)}
        ${renderRow(3)}
        ${renderRow(4)}
        ${renderRow(5)}
        ${renderRow(6)}
        ${renderRow(7)}
        ${renderRow(8)}

`
}


function renderRow(rowNum) {
    return `
        <div id="row-${rowNum}" class="row">
            ${renderCell(rowNum, 1)}
            ${renderCell(rowNum, 2)}
            ${renderCell(rowNum, 3)}
            ${renderCell(rowNum, 4)}
            ${renderCell(rowNum, 5)}
            ${renderCell(rowNum, 6)}
            ${renderCell(rowNum, 7)}
            ${renderCell(rowNum, 8)}
        </div>
    `
}

function renderCell(rowNum, cellNum) {
    if (cellColor(cellNum, rowNum) === 'black') {
        // Black Cell
        return `<div id="cell-${rowNum}-${cellNum}" class="cell black"></div>`
    } else
    // White Cell
        return `<div id="cell-${rowNum}-${cellNum}" class="cell red"></div>`
}


/*** Helper Methods ***/
function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
    return parity(cellNum) == parity(rowNum) ? 'red' : 'black'
}


function moveSelectedchessHere() {
    console.log('things')
    if(selectedchess) {
        console.log(`move chess here`)

        let blackCell = $(this)
        console.log(`blackCell`, blackCell)

        let id = blackCell.attr('id')
        console.log(`id:`, id)


        let idParts = id.split('-')
        console.log(`idParts = `, idParts)

        selectedchess.row = idParts[1]
        selectedchess.cell = idParts[2]

        if(selectedchess.color == `black` && selectedchess.row == 1) {
            console.log("There is a black chess at the white home")
            selectedchess.isKing = true;

        }

        if(selectedchess.color == `white` && selectedchess.row == 8) {
            console.log("There is a white chess at the black home")
            selectedchess.isWhiteKing = true;

        }

        selectedchess = undefined
        renderchesss()
    } else {
        console.log(`select a chess, foo!`)
    }
}

function clearBoard() {
    $(`.black.cell`).html(``)
    $(`black.cell`).unbind('click')
    $(`.red.cell`).html(``)
    $(`red.cell`).unbind('click')
    $(`.out-of-play`).html(``)
}
