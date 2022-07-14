var inputtext = document.getElementById('color')


inputtext.addEventListener('mousemove', back)

console.log(inputtext);

function back() {

    var textcolor=inputtext.value
    console.log(textcolor);

    inputtext.style.color = textcolor
    
}

// var inputtext=document.getElementById('color');
// var button=document.getElementById('ss')
// button.addEventListener('click',color)
// function color() {
//     var colors=inputtext.value
//     inputtext.style.color=colors
    
// }
