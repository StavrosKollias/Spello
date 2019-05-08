document.onscroll = function() {
   var elements = document.getElementsByClassName("img-animate");

   var coursetable = document.getElementsByClassName("courses");

   var body = document.getElementsByClassName("nav-bar");
   var backtopBtn = document.getElementsByClassName("back-to-top");
   var containerdiv = document.getElementsByClassName("logo");

   var container = body[0];

   function isAnyPartOfElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      
      const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
      const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

      return vertInView && horInView;
   }
   var containeritem = isAnyPartOfElementInViewport(container);
   var classesshown = containeritem.vertInView;

   if (!containeritem) {
      backtopBtn[0].classList.add("animation");
   } else {
      backtopBtn[0].classList.remove("animation");
   }

   for (i = 0; i < coursetable.length; i++) {
      var z = coursetable[i];
      var x = isAnyPartOfElementInViewport(z);

      if (x) {
         elements[i].classList.add("visible");
         var x = elements[i];

         elements[i].classList.add("animation");
      }
   }
};
