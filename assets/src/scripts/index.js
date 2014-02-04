$('#responsive-menu-button').sidr({
  name: 'sidr-main',
  source: '#navigation',
  speed: 400
});

$(window).touchwipe({
  wipeLeft: function() {
    // Close
    $.sidr('close', 'sidr-main');
    },
  wipeRight: function() {
    // Open
    $.sidr('open', 'sidr-main');
    },
    preventDefaultEvents: false
});
