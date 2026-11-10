let count = 0;
let timerId = null;

function updateDisplay() {
    const ms = count % 10;
    const s = Math.floor(count / 10) % 60;
    const m = Math.floor(count / (10 * 60)) % 60;
    const h = Math.floor(count / (10 * 60 * 60));

    $("#milliseconds").text(ms);
    $("#seconds").text(s);
    $("#minutes").text(m);
    $("#hours").text(h);
}

$("#btnstart").on("click", function() {
        $("#btnstart").prop("disabled", true);
        $("#btnstop").prop("disabled", false);
        $("#btnreset").prop("disabled", false);
        timerId = setInterval(function() {
            count++;
            updateDisplay();
        }, 100);
});

$("#btnstop").on("click", function() {
    clearInterval(timerId);
    timerId = null;
    $("#btnstop").prop("disabled", true);
    $("#btnstart").prop("disabled", false);
    $("#btnreset").prop("disabled", false);
});

$("#btnreset").on("click", function() {
    clearInterval(timerId);
    timerId = null;
    count = 0;
    $("#btnstart").prop("disabled", false);
    $("#btnstop").prop("disabled", true);
    $("#btnreset").prop("disabled", true);
    updateDisplay();
});