var current, images;

$(document).ready(function() {
  images = $('span.image');
  current = images.first();

  set_image();

  $('a.next').click(function (e) {
    next_image();
    e.preventDefault();
  });

  $('a.prev').click(function (e) {
    prev_image();
    e.preventDefault();
  });
});

$(document).keydown(function(e){
    if (e.keyCode == 37) {
      prev_image();
      return false;
    } else if(e.keyCode == 39) {
      next_image();
      return false;
    }
});

/*--------------
    Functions
---------------*/

function set_image() {
  $('img.display').attr('src', current.data('img'));
}

function next_image() {
  current = current.next('span.image');
  if (current.length == 0) {
    current = images.first();
  }

  set_image();
}

function prev_image() {
  current = current.prev('span.image');
  if (current.length == 0) {
    current = images.last();
  }

  set_image();
}
