$(document).ready(function () {

    var storage = localStorage;

    new Tabs();
    new Editor(storage);
    new Interests();
});