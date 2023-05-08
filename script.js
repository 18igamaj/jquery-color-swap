$(document).ready(onReady);

function onReady(){
    $('#genr').on('click',divHandler)
    $('#all-divas').on('click','.del-btn',deleteHandler)
    $('#all-divas').on('click','.yell-btn',yellowFill)
}
let num = 0
function divHandler(event){
    event.preventDefault()
$('#div-1').append(`<div><p>${num}</p><button 
class='del-btn'>Delete</button><button class='yell-btn'>Yellow</button></div>`)
num++
$('#pCount').text(num)
}
function deleteHandler() {
    $(this).parent().remove();
    num--;
    $('#pCount').text(num);
}
function yellowFill(){
    $(this).parent().css('background-color', 'yellow')
    
}

// function yellowBack(){
// $('#div-1').css('background-color','yellow')
// }
