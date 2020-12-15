window.addEventListener('resize', function (e) {
  windowWidthMediaQuery = window.matchMedia('(min-width: 650px)');
  if (windowWidthMediaQuery.matches) {
    toggleDetailsElements(detailsEl, true);
  } else if (!windowWidthMediaQuery.matches) {
    toggleDetailsElements(detailsEl, false);
  }
});

function toggleMore(buttonEl, section) {
  const moreEl = document.getElementsByClassName('details__more ' + section);
  for (var i = 0; i < moreEl.length; i++) {
    if (moreEl.item(i).style.display === 'none') {
      moreEl.item(i).style.display = 'block';
      buttonEl.innerHTML = 'See Less';
    } else {
      moreEl.item(i).style.display = 'none';
      buttonEl.innerHTML = 'See More';
    }
  }
}
