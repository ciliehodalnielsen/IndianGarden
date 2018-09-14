let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
let retter;

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("json/menu.json");
    retter = await jsonData.json();
    //console.log(retter);
    visRetter();
}


function visRetter() {
    let dest = document.querySelector(".main-container");

    retter.forEach(ret => {

        if (ret.id == id) {

            dest.querySelector(".data-navn").textContent = ret.navn;
            dest.querySelector(".data-billede").src = "imgs/small/" + ret.billede + "-sm.jpg";
            dest.querySelector(".data-billede").alt = "billede" + ret.navn;
            dest.querySelector(".data-langbeskrivelse").textContent = ret.langbeskrivelse;
            dest.querySelector(".data-pris").textContent = ret.pris;
        }
    });
}
