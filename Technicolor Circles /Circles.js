$(document).ready(function () {
  
  // 好多顆，謝謝win
  var max = 144;
  for (var i = 0 ; i< max ; i++) {
    $('.space').append('<div class="circle"></div>');
  }
  
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  };
  $(".circle").on("mouseenter",function(){
    $(this).css('background-color',randomColor());
    $(this).css('box-shadow','0 0 10px #000 inset');
    $(this).css('transform',"scale(4)");
    $(this).css('transition',"all 200ms ease-out");
    $(this).css('Z-index',"100000");
    }
  );
  $(".circle").on("mouseleave",function(){
    $(this).css('box-shadow','none');
    $(this).css('transform',"scale(1)");
    }
  );
  
}
);