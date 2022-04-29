$(document).ready(function(){
    $('button').click(function(){
        $('ul').toggleClass('active');
    })
})
window.addEventListener("click", function(){
        if (!event.target.matches('#frames-menu')){
            $('ul').removeClass('active')}
    });