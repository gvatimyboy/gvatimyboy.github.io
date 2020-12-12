if (!windowWidthMediaQuery.matches) {
  for (var i = 0; i < detailsEl.length; i++) {
    detailsEl.item(i).addEventListener('click', function(e) {
      toggleDetailsElements(detailsEl, false);
    });
  };
};

window.addEventListener('resize', function(e) {
  windowWidthMediaQuery = window.matchMedia('(min-width: 650px)');
  if (windowWidthMediaQuery.matches) {
    toggleDetailsElements(detailsEl, true);
  } else if (!windowWidthMediaQuery.matches) {
    toggleDetailsElements(detailsEl, false);
  }
});