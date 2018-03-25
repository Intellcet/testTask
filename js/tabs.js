function Tabs() {

    function showPage(page) {
        $('.content-elem').hide();
        $('.content-elem').removeClass('selected');
        $('.' + page).show();
        $('.' + page).addClass('selected');
    }

    $('.tabs').on('click', function () {
        $('.tabs').removeClass('selected');
        $(this).addClass('selected');
        showPage($(this).data('page'));
    });

    showPage('first-content-elem');
}