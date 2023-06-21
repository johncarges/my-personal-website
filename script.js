
// Adds second header programatically
const h2 = document.createElement("h2");
h2.textContent = "But this stuff over here looks better";

document.querySelector("body").appendChild(h2);

// Mouseover event - change header color
const mainHeader = document.querySelector("h1");
mainHeader.addEventListener(
    "mouseenter",
    (event) => {
        event.target.style.color = "purple";

        /* setTimeout(() => {
            event.target.style.color = "";
        }, 500); */
    }
)

mainHeader.addEventListener(
    "mouseleave",
    (event) => {
        event.target.style.color = "";

        /* setTimeout(() => {
            event.target.style.color = "";
        }, 500); */
    }
)