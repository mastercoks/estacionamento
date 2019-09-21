const stateVaga = {
    VAGO: 0, 
    OCUPADO: 1,
    INTERDITADO: 2, 
    CONE: 3,
    EDIFICIO: 4,
    VAZIO: 5
}

const stateOperation = {
    AGUARDANDO: 0,
    RESERVA: 1,
    LIBERACAO: 2,
    INTERDICAO: 3,
    FECHAMENTO: 4,
    RELATORIO: 5
}

// const vaga = {
//     id: 
// }
// new vaga()

let map = [
    [3, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5], 
    [0, 5, 5, 0, 0, 0, 0, 0, 0, 3, 5], 
    [0, 5, 0, 4, 4, 4, 4, 4, 4, 0, 5], 
    [0, 5, 0, 4, 4, 4, 4, 4, 4, 0, 5], 
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 
    [0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0], 
    [0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0], 
    [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0], 
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
]

let operation = stateOperation.AGUARDANDO;

let picking = false;

$(document).ready(function(){
    const tableWidth = 11;
    const tableHeight = 9;
    
    let contVaga = 0; 
    let html = '<table cellpadding=0 cellspacing=0>'

    for (let row = 0; row < tableHeight; row ++) {
        html += '<tr>'
        for (let column = 0; column < tableWidth; column ++) {
            //html += '<td>teste</td>'
            switch (map[row][column]) {
                case stateVaga.VAGO:                    
                    html += '<td class="vaga">'
                    html += '<img src="./assets/images/seta-up.png" alt="Imagem Cone">'
                    html += `<div>VAGA ${++contVaga}</div>`
                    // html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
                    html += '</td>'
                    break;
                case stateVaga.OCUPADO:                    
                    html += '<td>'
                    // html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
                    html += '</td>'
                    break;
                case stateVaga.INTERDITADO:                    
                    html += '<td>'
                    // html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
                    html += '</td>'
                    break;
                case stateVaga.CONE:                                        
                    html += '<td class="cone">'
                    html += '<img src="./assets/images/cone32.png" alt="Imagem Cone">'
                    // html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
                    html += '</td>'
                    break;
                case stateVaga.EDIFICIO:                    
                    html += '<td class="edificio">'
                    // html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
                    html += '</td>'
                    break;
                case stateVaga.VAZIO:                    
                    html += '<td>'
                    // html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
                    html += '</td>'
                    break;
                }
        }
        html += '</tr>'
    }
    html += '</table>'
    // document.querySelector('#fireCanvas').innerHTML = html 
    $('#table-map').append(html)
});

function handle(params) {
    
}


function handleOperation(op) {

    if (picking) {
        alert("Selecione a vaga!")
        return
    }
    
    if (operation == stateOperation.RELATORIO) {
        alert("O caixa já foi fechado!")
        return
    }

    if (op == stateOperation.RESERVA || op == stateOperation.INTERDICAO || op == stateOperation.LIBERACAO) {
        picking = true;
    }
    operation = op
    alert(operation)
}