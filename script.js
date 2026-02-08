const valentines = new Date("2026-02-14T00:00:00");
const msInDay = 1000 * 60 * 60 * 24;
const msInHour = 1000 * 60 * 60;
const msInMinute = 1000 * 60;
const msInSecond = 1000;

const secret_btn = document.getElementById("05");
if (secret_btn) {
    secret_btn.addEventListener("click", () => {
        window.location.href = "secret_message.html";
    });
}

const bday_redirect = document.getElementById("bday_letter_redirect");
if (bday_redirect) {
    bday_redirect.addEventListener("click", () => {
        window.location.href = "birthday_letter.html";
    });
}

function startTime() {
    const today = new Date();

    const msUntilValentines = valentines - today;
    let d = Math.trunc(msUntilValentines / msInDay);
    let h = Math.trunc((msUntilValentines - d * msInDay) / msInHour);
    let m = Math.trunc((msUntilValentines - d * msInDay - h * msInHour) / msInMinute);
    let s = Math.trunc((msUntilValentines - d * msInDay - h * msInHour - m * msInMinute) / msInSecond);

    document.getElementById('clock').innerHTML = d + " days, " + h + " hours, " + m + " minutes, " + s + " seconds";

    const t = setTimeout(startTime, 500);

    let condition = (valentines - today) < 0; 

    const _00 = document.getElementById("00");
    const _01 = document.getElementById("01");
    const _02 = document.getElementById("02");
    const _03 = document.getElementById("clock");
    const _04 = document.getElementById("04");
    const _05 = document.getElementById("05");
    const _10 = document.getElementById("10");
    const _11 = document.getElementById("11");
    const _12 = document.getElementById("12");
    const _13 = document.getElementById("13");
    const _14 = document.getElementById("14");
    const _15 = document.getElementById("15");
    const _16 = document.getElementById("16");
    const _17 = document.getElementById("17");
    const _18 = document.getElementById("18");
    const _19 = document.getElementById("19");
    const _110 = document.getElementById("110");
    const bday_letter = document.getElementById("bday_letter_redirect");

    if (condition) {
        _00.style.display = "none";
        _01.style.display = "none";
        _02.style.display = "none";
        _03.style.display = "none";
        _04.style.display = "none";
        _05.style.display = "none";

        _10.style.display = "block";
        _11.style.display = "block";
        _12.style.display = "block";
        _13.style.display = "block";
        _14.style.display = "block";
        _15.style.display = "block";
        _16.style.display = "block";
        _17.style.display = "block";
        _18.style.display = "block";
        _19.style.display = "block";
        _110.style.display = "block";
        bday_letter.style.display = "block";

    }
    else {
        _00.style.display = "block";
        _01.style.display = "block";
        _02.style.display = "block";
        _03.style.display = "block";
        _04.style.display = "block";
        _05.style.display = "block";

        _10.style.display = "none";
        _11.style.display = "none";
        _12.style.display = "none";
        _13.style.display = "none";
        _14.style.display = "none";
        _15.style.display = "none";
        _16.style.display = "none";
        _17.style.display = "none";
        _18.style.display = "none";
        _19.style.display = "none";
        _110.style.display = "none";
        bday_letter.style.display = "none";
    }
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
