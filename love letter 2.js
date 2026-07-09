$(document).ready(function () {

    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var music = document.getElementById("bgMusic");

    envelope.click(function () {
        open();
    });

    btn_open.click(function () {
        open();
    });

    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");

        music.play().catch(function (err) {
            console.log(err);
        });
    }

    function close() {
        envelope.addClass("close").removeClass("open");

        music.pause();
        music.currentTime = 0;
    }

});
