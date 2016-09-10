
$(document).ready(function()
{
  createListeners();
  initBuild();
})

///// INIT vars
var btn_about = $('.about', 'nav'),
    btn_sponsors = $('.sponsors', 'nav'),
    btn_routes = $('.routes', 'nav');

createListeners = function() {
  btn_about.on('click', {
    section: 'about'
  }, toSection );

  btn_sponsors.on('click', {
    section: 'sponsors'
  }, toSection );

  btn_routes.on('click', {
    section: 'routes'
  }, toSection );
}

toSection = function(evt) {
  TweenLite.to(window, 1.25, {scrollTo:"#" + evt.data.section, ease:Power4.easeOut});
}

///// INIT build
initBuild = function() {
  console.log("start build");
}
