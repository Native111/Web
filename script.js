/* ==========================================================================
   Consorcioweb — Landing "Sitio en construcción"
   Comportamiento mínimo: año dinámico y barra de progreso simulada.
   ========================================================================== */

(function () {
  "use strict";

  // Año dinámico en el footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Barra de progreso simulada (sin llegar nunca al 100%)
  var bar = document.querySelector(".progress-bar");
  var progress = document.querySelector(".progress");

  if (bar && progress) {
    var current = 12;

    function tick() {
      // Avance aleatorio pequeño para simular trabajo en curso
      current += Math.random() * 1.8;

      // Se estabiliza entre 78% y 96% (nunca "termina")
      if (current > 96) current = 78;

      var pct = Math.round(current);
      bar.style.width = pct + "%";
      bar.style.transform = "translateX(0)";
      bar.style.animation = "shimmer 3s linear infinite";
      progress.setAttribute("aria-valuenow", String(pct));

      setTimeout(tick, 1600 + Math.random() * 1400);
    }

    setTimeout(tick, 1800);
  }
})();
