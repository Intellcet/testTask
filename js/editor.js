function Editor(storage) {

    storage = (storage instanceof Object) ? storage : localStorage;

    function validateEmail(email) {
        var reg = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/;
        return reg.test(email);
    }

    function validateNumber(number) {
        var reg = /^\+[0-9]\s\([0-9]{3,3}\)\s[0-9]{3,3}\-[0-9]{2,2}\-[0-9]{2,2}$/;
        return reg.test(number);
    }

    function addIcon(classInfo, type) {
        $('.status-number').attr("src", "");
        $('.status-email').attr("src", "");
        if (type === "error") {
            $('.' + classInfo).attr("src", "img/red ico.png");
        }
        if (type === "correct") {
            $('.' + classInfo).attr("src", "img/green ico.png");
        }
    }

    function fillPlaceholders() {
        if (storage.getItem('name')) {
            $('.profile-name').attr('placeholder', storage.getItem('name'));
        }
        if (storage.getItem('number')) {
            $('.number').attr('placeholder', storage.getItem('number'));
        }
        if (storage.getItem('email')) {
            $('.email').attr('placeholder', storage.getItem('email'));
        }
    }

    function eventHandler() {
        $('input.profile-name').on('keyup', function () {
            storage.setItem('name', $(this).val());
        });
        $('input.number').on('keyup', function () {
            if (validateNumber($(this).val())) {
                addIcon("status-number", "correct");
                storage.setItem('number', $(this).val());
            } else {
                addIcon("status-number", "error");
                storage.setItem('number', $(this).attr('placeholder'));
            }
        });
        $('input.email').on('keyup', function () {
            if (validateEmail($(this).val())) {
                addIcon("status-email", "correct");
                storage.setItem('email', $(this).val());
            } else {
                addIcon("status-email", "error");
                storage.setItem('email', $(this).attr('placeholder'));
            }
        });
    }

    function init() {
        $('input.number').attr('type', 'text').mask("+9 (999) 999-99-99");
        fillPlaceholders();
        eventHandler();
    }
    init();
}