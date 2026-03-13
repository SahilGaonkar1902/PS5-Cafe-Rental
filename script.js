const price_cards1 = document.getElementById("pricing_cards1");
const price_cards2 = document.getElementById("pricing_cards2");
const price_cards3 = document.getElementById("pricing_cards3");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const txtboxes = document.getElementById("textboxes");
const button = document.getElementById("button");

lucide.createIcons();

function handleWindowResize() {

    if (window.innerWidth < 800)
        {
            button.style.marginRight = "39em"
            txtboxes.style.gap = "1em"
            phone.style.marginLeft = "40px"
            email.style.marginLeft = "40px"
            price_cards1.style.width = "12em"
            price_cards2.style.width = "12em"
            price_cards3.style.width = "12em"
        }
    else
        {
            button.style.marginRight = "103em"
            txtboxes.style.gap = "1em"
            phone.style.marginLeft = "250px"
            email.style.marginLeft = "250px"
            price_cards1.style.width = "16em"
            price_cards2.style.width = "16em"
            price_cards3.style.width = "16em"
        }
}

window.addEventListener("resize", handleWindowResize);

handleWindowResize();

//Accordian
document.addEventListener("DOMContentLoaded", function () {

  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

      this.classList.toggle("active");

      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }

    });
  }

});

