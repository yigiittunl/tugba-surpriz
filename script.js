
const buton = document.getElementById("surprizButonu");
const baslangic = document.getElementById("baslangic");
const sonEkran = document.getElementById("sonEkran");

let basladi = false;

function kalpleriUcur(adet) {
    const semboller = ["♥", "♡", "❤", "💕"];
    const renkler = ["#ef83bb", "#c99bea", "#f5b8df", "#ffffff"];

    const merkezX = window.innerWidth / 2;
    const merkezY = window.innerHeight / 2;

    for (let i = 0; i < adet; i++) {
        const kalp = document.createElement("span");

        kalp.className = "ucanKalp";
        kalp.textContent =
            semboller[Math.floor(Math.random() * semboller.length)];

        kalp.style.left = merkezX + "px";
        kalp.style.top = merkezY + "px";
        kalp.style.color =
            renkler[Math.floor(Math.random() * renkler.length)];

        kalp.style.fontSize = (14 + Math.random() * 24) + "px";

        const aci = Math.random() * Math.PI * 2;
        const mesafe = 120 + Math.random() * 380;

        kalp.style.setProperty("--x", Math.cos(aci) * mesafe + "px");
        kalp.style.setProperty("--y", Math.sin(aci) * mesafe + "px");
        kalp.style.setProperty("--donus", (Math.random() * 100 - 50) + "deg");
        kalp.style.setProperty("--sure", (1.5 + Math.random() * 1.4) + "s");

        document.body.appendChild(kalp);

        kalp.addEventListener("animationend", () => kalp.remove());
    }
}

function pariltilariOlustur(adet) {
    const merkezX = window.innerWidth / 2;
    const merkezY = window.innerHeight / 2;

    for (let i = 0; i < adet; i++) {
        const parilti = document.createElement("span");

        parilti.className = "parilti";
        parilti.style.left = merkezX + "px";
        parilti.style.top = merkezY + "px";

        const aci = Math.random() * Math.PI * 2;
        const mesafe = 70 + Math.random() * 320;

        parilti.style.setProperty("--x", Math.cos(aci) * mesafe + "px");
        parilti.style.setProperty("--y", Math.sin(aci) * mesafe + "px");
        parilti.style.setProperty("--boyut", (3 + Math.random() * 6) + "px");
        parilti.style.setProperty("--sure", (1.2 + Math.random() * 1.3) + "s");

        document.body.appendChild(parilti);

        parilti.addEventListener("animationend", () => parilti.remove());
    }
}

buton.addEventListener("click", function () {
    if (basladi) return;

    basladi = true;
    baslangic.style.display = "none";

    // Önce kalpler ve ışık parçacıkları uçuşur.
    kalpleriUcur(100);
    pariltilariOlustur(70);

    // Ardından büyük kalp ve mesaj görünür.
    setTimeout(function () {
        sonEkran.classList.add("goster");
        sonEkran.setAttribute("aria-hidden", "false");

        pariltilariOlustur(55);
    }, 1800);
});
