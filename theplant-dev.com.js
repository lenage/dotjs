var xiami = {
    init : function(){
        setInterval(function(){
            xiami.player();
        }, 2000);
    },

    player : function(){
        var xiamiRxg = /www.xiami.com\/song/,
            embedCode = function(id){
                return '<embed src="http://www.xiami.com/widget/0_' + id + '/singlePlayer.swf" type="application/x-shockwave-flash" width="257" height="33" wmode="transparent"></embed>';
            };
        $('.reply-item').each(function(){
            var _this = $(this),
                link = _this.find('a.transformed');
            link.each(function(){
                var _self = $(this);
                if(xiamiRxg.test(_self.attr('href'))){
                    var ar = _self.attr('href').split('/');
                    _self.parent().append(embedCode(ar[ar.length - 1]));
                    _self.remove();
                }
            });
        });
    }
};

xiami.init();
