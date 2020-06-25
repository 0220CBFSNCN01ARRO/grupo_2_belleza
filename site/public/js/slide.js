/*======================SLIDESHOW======================*/

/*======================PROPIEDADES======================*/

var p = {
  paginacion: document.querySelectorAll("#paginacion li"),
  item: 0,
  cajaSlide: document.querySelector("#slide ul"),
  imgSlide: document.querySelectorAll("#slide ul li"),
  avanzar: document.querySelector("#slide #avanzar"),
  retroceder: document.querySelector("#slide #retroceder"),
  velocidadSlide: 3000,
  loopFormat: false,
};

/*======================METODOS======================*/

var m = {
  inicioSlide: function () {
    for (let i = 0; i < p.paginacion.length; i++) {
      p.paginacion[i].addEventListener("click", m.paginacionSlide);
      p.imgSlide[i].style.width = `${100 / p.paginacion.length}%`;
    }
    p.avanzar.addEventListener("click", m.avanzar);
    p.retroceder.addEventListener("click", m.retroceder);
    m.intervalo();
    p.cajaSlide.style.width = `${p.paginacion.length * 100}%`;
  },
  paginacionSlide: function (item) {
    p.item = item.target.parentNode.getAttribute("item") - 1;
    m.movimientoSlide(p.item);
  },

  avanzar: function () {
    if (p.item == p.imgSlide.length - 1) {
      p.item = 0;
    } else {
      p.item++;
    }
    m.movimientoSlide(p.item);
  },
  retroceder: function () {
    if (p.item == 0) {
      p.item = p.imgSlide.length - 1;
    } else {
      p.item--;
    }
    m.movimientoSlide(p.item);
  },

  movimientoSlide: function (item) {
    p.loopFormat = true;
    p.cajaSlide.style.left = item * -100 + "%";
    for (let i = 0; i < p.paginacion.length; i++) {
      p.paginacion[i].style.opacity = 0.5;
    }
    p.paginacion[item].style.opacity = 1;
    p.cajaSlide.style.transition = "0.7s ease-in-out";
  },
  intervalo: function () {
    setInterval(() => {
      if (p.loopFormat) {
        p.loopFormat = false;
      } else {
        m.avanzar();
      }
    }, p.velocidadSlide);
  },
};

m.inicioSlide();
