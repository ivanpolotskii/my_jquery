$(document).ready(function () {
    let b = $('.ban');
    let b2 = $('.ban2');
    console.log(b.outerWidth())
    b.after('<div>dsfhdsijfkds</div>');
    console.log(document.querySelector("<li class='item'>Тест</li>"))
});