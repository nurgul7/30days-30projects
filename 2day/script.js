const resimler = document.querySelectorAll(".resim");

resimler.forEach(resim => { resim.addEventListener("click", () => { removeActive();
        resim.classList.add("resimler"); }); })

function removeActive() { resimler.forEach(resim => { resim.classList.remove("resimler"); }) }