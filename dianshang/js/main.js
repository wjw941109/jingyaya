$(function () {
	// $(".module-header .show-fold").click(function(){
	// 	console.log("dsdbsb")
	// 	$(this).parents().siblings().children().removeClass('hide')
	// 	$(".dropdown-menu").css('display','block')
	// })


	// $(".dropdown-menu li.subnav").click(function(){
 //            $(this).parents('.dropdown-menu').addClass('hide');
 //        });
 //        
         
 	// $(".module-header .show-fold").mousedown(function(){
  //   	$(this).parent().siblings().children().css('display','block');
  //   })
    $(".dropdown-menu .subnav i").mousedown(function(){
    	$(".dropdown-menu").addClass('hide');
    })
    

    $(".shoes a").mouseover(function(){
		$(this).children().children().children('.hover-show').css('display','block').siblings().addClass('hide');
    	$(this).siblings().children().children().children('.hover-show').css('display','none').siblings().removeClass('hide');
    });



    $(".focusbox ul li").click(function(){
      var index = $(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      $(".focusbox .banner img").hide().eq(index).show();
    });
    setInterval(function(){
      var li = $(".focusbox ul li");
      var li_length = li.length;
      var li_on = $(".focusbox ul li.on");
      var on_index = li.index(li_on);
      if (on_index+1<li_length) {
        $(".focusbox li.on").next().click();
      }else{
        li.eq(0).click();
      }

    },2000)
})