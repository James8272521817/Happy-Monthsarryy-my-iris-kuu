$(document).ready(function () {

    const envelope = $("#envelope");
    const btnOpen = $("#open");
    const btnClose = $("#reset");
    const musicContainer = $("#musicContainer");

    envelope.on("click", openEnvelope);
    btnOpen.on("click", openEnvelope);
    btnClose.on("click", closeEnvelope);

    function openEnvelope() {

        if (envelope.hasClass("open")) return;

        envelope.removeClass("close").addClass("open");

        setTimeout(function () {

            musicContainer.fadeIn(800);

            $("html, body").animate({
                scrollTop: musicContainer.offset().top - 30
            }, 900);

        }, 900);

    }

    function closeEnvelope() {

        envelope.removeClass("open").addClass("close");

        musicContainer.fadeOut(300);

        $("html, body").animate({
            scrollTop: 0
        }, 600);

    }

});
