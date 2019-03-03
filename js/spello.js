document.onscroll = function() {
   var elements = document.getElementsByClassName("img-animate");

   var coursetable = document.getElementsByClassName("courses");

   var body = document.getElementsByClassName("nav-bar");
   var backtopBtn = document.getElementsByClassName("back-to-top");
   var containerdiv = document.getElementsByClassName("logo");

   var container = body[0];

   function isAnyPartOfElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;

      // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
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
         // elements[i].classList.add("animation")
         var x = elements[i];

         elements[i].classList.add("animation");
      }
   }
};
