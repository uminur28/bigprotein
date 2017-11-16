$("#light-slider").lightSlider({
  item: 6,
  loop: true,
  pager: false,
  auto:true,
  pauseOnHover: true,
  responsive: [{
    breakpoint: 600,
    settings: {
      item: 2
    }
  }]
});
