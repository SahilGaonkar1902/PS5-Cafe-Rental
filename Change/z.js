const button = document.getElementById("button");
const textboxes = document.getElementById("textboxes");
const price_cards1 = document.getElementById("pricing_cards1");
const price_cards2 = document.getElementById("pricing_cards2");
const price_cards3 = document.getElementById("pricing_cards3");

function handleWindowResize() {

    if (window.innerWidth < 800)
        {
            button.style.marginRight = "42.5em"
            textboxes.style.gap = "1em"
            price_cards1.style.width = "12em"
            price_cards2.style.width = "12em"
            price_cards3.style.width = "12em"
        }
    else
        {
            button.style.marginRight = "106.5em"
            textboxes.style.gap = "2em"
            price_cards1.style.width = "16em"
            price_cards2.style.width = "16em"
            price_cards3.style.width = "16em"
        }
}

window.addEventListener("resize", handleWindowResize);

handleWindowResize();
