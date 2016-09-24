
$(document).ready(function()
{
  createListeners();
  initBuild();
})

///// INIT vars
var btn_about = $('.about', 'nav'),
    btn_sponsors = $('.sponsors', 'nav'),
    btn_gallery = $('.gallery', 'nav'),
    btn_routes = $('.routes', 'nav'),
    btn_back = $('.back', 'nav'),   
    btn_registerMain = $('.primary-register', '#register');
    gallery = null;

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

  btn_registerMain.on('click', toRegisterForm);
  btn_back.on('click', backToMain );
  btn_gallery.on('click', openGallery );

  //register nav

}

toSection = function(evt) {
  TweenLite.to(window, 1.25, {scrollTo:"#" + evt.data.section, ease:Power4.easeOut});
}

backToMain = function(evt) {
    window.location.href = 'index.html';
}

toRegisterForm = function(evt) {
    window.location.href = 'register.html';
}



///// PhotoSwipe init
var pswpElement = document.querySelectorAll('.pswp')[0];
// build items array
var items = [
    {
        src: 'images/gallery/RTB_galleryImg_18.jpg',
        w: 1024,
        h: 576
    },{
        src: 'images/gallery/RTB_galleryImg_01.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_02.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_6.jpg',
        w: 1024,
        h: 768
    },
    {
        src: 'images/gallery/RTB_galleryImg_0.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_10.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_9.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_1.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_2.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_7.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_13.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_14.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_16.jpg',
        w: 1024,
        h: 768
    },{
        src: 'images/gallery/RTB_galleryImg_17.jpg',
        w: 1024,
        h: 576
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0,
    modal: true,
    closeOnScroll: false
};

openGallery = function(evt) {
  if (gallery == null) {
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  } else {
    // gallery.destroy();

    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }
}

///// INIT build
initBuild = function() {
  console.log("start build");
  // gallery.init();
}
