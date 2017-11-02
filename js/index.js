$('footer>div').click(function(){
    var index = $(this).index();
    $('.main section').hide().eq(index).fadeIn();
    $(this).addClass('active').siblings().removeClass('active')
  })

  $.ajax({
      url:'http://api.douban.com/v2/movie/top250',
      type:'GET',
      data:{
          start:0,
          count:20
      },
      dataType:'jsonp'
  }).done(function(ret){
    console.log(ret)
  }).fail(function(){
      console.log('error')
  })