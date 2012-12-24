// douban.com
var globalNav = $('#db-global-nav'),
    userInfo = globalNav.find('.nav-user-account'),
    arrow = userInfo.find('.arrow'),
    navItems = globalNav.find('.global-nav-items'),
    topNavBackground = $('.nav').css('background'),
    expandArrow = $('<div class="douban-expand">▼</div>'),
    reminderMore = globalNav.find('.top-nav-reminder .more-items');

arrow.remove();
userInfo.find('a span').text("帐号");
navItems.find('li a[href$=".fm/"]').text("电台");
expandArrow.appendTo(globalNav.children());
globalNav.find('.bd>div').not('.douban-expand').hide();

globalNav.css({
  'max-width': 53,
  'min-width': 40,
  'position': 'absolute',
  'top': $('.nav').height(),
  // 'right': (screen.width - 960)/4 - 53/2,
  'left': (screen.width - 960)/4 - 53/2,
  'background': topNavBackground,
  'height': 'auto',
  'padding-right': 0
  });

globalNav.find('li>a').css('color','#000');
expandArrow.css({
  'text-align': 'center',
  'cursor': 'pointer',
  'color': '#072'
  });
expandArrow.click(function(){
  var self = $(this);
  globalNav.find('.bd>div').not('.douban-expand').toggle();
  $('.global-nav-items:hidden').length > 0 ? self.text("▼") : self.text("▲");
});

reminderMore.css({
  'left': globalNav.width() + 53/4,
  'top': 0
});
