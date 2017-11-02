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
      setData(ret)
    console.log(ret)
  }).fail(function(){
      console.log('error')
  })

  function setData(data){
    data.subjects.forEach(function(movie) {
        var tpl= `<div class="item">
        <a href="#">
          <div class="cover">
            <img src="http://img7.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p17525.webp" alt="">
          </div>
          <div class="detail">
            <h2>肖申克的救赎</h2>
            <div class="extra"><span class="score">9.6分 </span>/ <span class="collect_count">110</span>收藏</div>
            <div class="extra">
              <span class="year">1994</span>
              <span class="type">剧情</span>
            </div>
            <div class="extra">导演: <span class="director">谁谁谁</span></div>
            <div class="extra">主演: <span class="actor">谁谁谁谁</span></div>
          </div>
        </a> 
        <div>`

        var node = $(tpl)
        node.find('.cover img').attr('src',movie.images.medium);
        node.find('.detail>h2').text(movie.title);
        node.find('.score').text(movie.rating.average);
        node.find('.year').text(movie.year);
        node.find('.type').text(movie.genres.join(' / '))
        
        node.find('.collect_count').text(movie.collect_count)
        node.find('.actor').text(function(){
          var arr = [];
          movie.casts.forEach(function(data){
            arr.push(data.name)
          })
          return arr.join('、')
        })
        
        node.find('.director').text(function(){
          var arr=[];
          movie.directors.forEach(function(data){
            arr.push(data.name)
          })
          return arr.join('、')
        })
        
       $('section').eq(0).append(node);
    });
  }