var clicked = true;
var hasScrolled = false;
// $('#circle').click(function(){
//     var color = clicked ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
//     $(this).css('background-color', color);
//     console.log(color);
//     console.log(clicked);
//     clicked = !clicked;
//     console.log(clicked);
// });
// Scroll Timer
$('.page-content').scroll(function() {
    hasScrolled = true;        
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        hasScrolled = false;
    }, 250));
});

$('.page-content').on('touchend', function() {
    if (hasScrolled === true ) {
    console.info("click blocked");
    return false;
    }
});
