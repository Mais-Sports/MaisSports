class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    if (this.navList.classList.contains(this.activeClass)) {
      this.navList.style.display = "block";
    } else {
      this.navList.style.display = "none";
    }

    const pinkElement = document.querySelector(".pink");
    if (this.navList.classList.contains(this.activeClass)) {
      this.navList.style.display = "block";
      pinkElement.style.display = "block";// Exibe o elemento pink quando o navList está ativo

      // Ocultar o overflow da página quando o navList está ativo
      document.body.style.overflow = "hidden";

    } else {
      this.navList.style.display = "none";
      pinkElement.style.display = "none"; // Oculta o elemento pink quando o navList não está ativo

      // Restaurar o overflow da página quando o navList não está ativo
      document.body.style.overflow = "auto";
    }

  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
