let dest = document.querySelector(".data-container"),
    retter,
    kategoriFilter = "alle";

document.addEventListener("DOMContentLoaded", hentJson);



async function hentJson() {
    let jsonData = await fetch("json/menu.json");
    retter = await jsonData.json();

    //console.log(retter);

    visRetter();
}

document.querySelectorAll(".menu-item").forEach(knap => {
    //console.log(knap);
    knap.addEventListener("click", filtering)

});

function filtering() {

    kategoriFilter = this.getAttribute("data-kategori");
    //console.log(kategoriFilter);
    visRetter();



}

function visRetter() {
    let dest = document.querySelector(".main-container");
    let temp = document.querySelector(".retter-template");

    document.querySelector("header h3").textContent = kategoriFilter;

    retter.forEach(ret => {
        console.log(ret.kategori, kategoriFilter);
        if (ret.kategori == kategoriFilter || kategoriFilter == "alle") {

            console.log(ret.kategori, kategoriFilter);
            let klon = temp.cloneNode(true).content;
            klon.querySelector(".data-navn").textContent = ret.navn;
            klon.querySelector(".data-billede").src = "imgs/small/" + ret.billede + "-sm.jpg";
            klon.querySelector(".data-billede").addEventListener("click", () => {
                window.location.href = "info_view.html?id=" + ret.id;
            });
            klon.querySelector(".data-billede").alt = "billede" + ret.navn;
            klon.querySelector(".data-kortbeskrivelse").textContent = ret.kortbeskrivelse;
            klon.querySelector(".data-pris").textContent = ret.pris;
            dest.appendChild(klon);
        }
    });
}
