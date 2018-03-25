function Interests() {
    
    function getInterest() {
        var interest = $('.input-interest').val();
        if (interest) {
            var elem = "<button class='interests-btn'>" + interest + "</button>";
            $('.interests').prepend(elem);
            $('.input-interest').val('');
        }
    }

    function delInterestHandler() {
        $('.interests-btn').on('click', function () {
            $(this).remove();
        });
    }

    function init() {
        delInterestHandler();
        $('.add-interest-btn').on('click', function () {
            getInterest();
            delInterestHandler();
        });
    }
    init();

}