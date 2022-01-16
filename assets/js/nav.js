$(function() {
    $('nav').visibility({
    continuous: true,
    onTopPassed: function(calculations) {
        $("nav").addClass("fixed-top");
    },
    onTopPassedReverse: function(calculations) {
        $("nav").removeClass("fixed-top");
    }
    });
});