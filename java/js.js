$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainMenu");
        $nav.toggleClass("scroll", $(this).scrollTop() > $nav.height());
    });
});