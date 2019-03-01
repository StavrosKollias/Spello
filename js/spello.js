document.onscroll = function() {
   var elements = document.getElementsByClassName("img-animate");

   var coursetable = document.getElementsByClassName("course-table");
   var backtopBtn = document.getElementsByClassName("back-to-top");
   var classesdiv = document.getElementsByClassName("classes");
   var z = coursetable[0];
   var classes = classesdiv[0];

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
   var classesitem = isAnyPartOfElementInViewport(classes);
   var classesshown = classesitem.vertInView;
   var x = isAnyPartOfElementInViewport(z);
   if (classesitem) {
      backtopBtn[0].classList.add("animation");
   } else {
      backtopBtn[0].classList.remove("animation");
   }
   if (x) {
      for (i = 0; i < elements.length; i++) {
         elements[i].classList.add("visible");
         // elements[i].classList.add("animation")
         var x = elements[i];

         elements[i].classList.add("animation");
      }
   }
};
