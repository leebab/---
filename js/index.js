$('footer>div').click(function(){
    var index = $(this).index();
    $('.main section').hide().eq(index).fadeIn();
    $(this).addClass('active').siblings().removeClass('active')
  })