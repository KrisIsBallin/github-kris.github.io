

tower1.addEventListener("mouseover", function(){
window.close(); // хз почему не работает 
})


$(document).ready(function(){     // функция которая записывает координаты мыши
    $(document).mousemove(function(e){
      $('img').css('left',e.pageX+"px");
      $('img').css('top',e.pageY+"px");
    });
  });