// TOC fixed
var post_toc = document.getElementsByClassName("post-toc")[0],
    toc = document.getElementsByClassName("toc")[0],
    H = 0,
    Y = post_toc;        
while (Y) {
    H += Y.offsetTop; 
    Y = Y.offsetParent;
}
window.onscroll = function()
{
    var s = document.body.scrollTop || document.documentElement.scrollTop;
    if(s>H) {
        post_toc.style = "position:fixed;top:5px;";
        toc.scrollTop = (s-H)/60;
    } else {
        post_toc.style = "";
    }
};


// catalog highlight
var $ol = $('.toc');         
var titleList = $('.post-content').find('h1,h2,h3,h4,h5,h6');
let tocSwitch=true; //true：正常滑动；false：点击
$(window).scroll(function (e) {
    if(!tocSwitch){
        tocSwitch=true
        return
    }
    var top = $(document).scrollTop();  //返回滚动条的垂直位置
    var currentID = '';
    titleList.each(function () {
        var $this = $(this);
        var itemTop = $this.offset().top; //绑定元素上边框相对于html上边界的偏移量
        if ( top > itemTop - 300 ) {
            currentID = '#' + $this.attr('id');
        } else {
            return false;
        }
    });
    console.log(currentID)
    // currentID= decodeURI(window.location.hash)
    var currentLink = $ol.find('.actived');
    if (currentID && currentLink.attr('href') !== currentID) {
        currentLink.removeClass('actived');
        var aList = $ol.find("[href='" + currentID + "']");
        aList.addClass('actived');
    }
});
$('.toc-link').click(function(){
    tocSwitch=false
    $('.toc-link').removeClass('actived');
    $(this).addClass('actived');
})








