let kutu = document.querySelector("#kutu")
let list = document.querySelector("#list")

function gorevekle() {
    if (kutu.value === "") { alert("bir şeyler yazın") } else {
        let li = document.createElement("li");
        li.innerHTML = kutu.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    kutu.value = "";
}
list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { e.target.classList.toggle("checked") } else if (e.target.tagName === "SPAN") { e.target.parentElement.remove(); }
}, false);
// *******************************