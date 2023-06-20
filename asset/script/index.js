let bar = document.getElementById('bar');
let list = document.getElementById('list');
let x = document.getElementById('x');
var body = document.getElementById('body')

function show() {
    list.style.display = 'block';
    bar.style.display='none';
    body.style.overflowY = 'hidden'
    x.style.display = 'block';
}
function hide() {
    list.style.display = 'none';
    bar.style.display='block';
    x.style.display = ' none';
    body.style.overflow = 'scroll'
}