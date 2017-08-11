$('.post-avatar').each(function() {
  var avatar = $(this),
    avatarWatcher = scrollMonitor.create(avatar.parent(), {
      top: 20,
      bottom: -avatar.height() - 20
    });

  avatarWatcher.stateChange(function() {
    if (avatarWatcher.isInViewport) {
      if (avatarWatcher.isInViewport && avatarWatcher.isAboveViewport) {
        avatar.removeClass('post-avatar--absolute').addClass('post-avatar--fixed');
      } else if (!avatarWatcher.isAboveViewport) {
        avatar.removeClass('post-avatar--absolute').removeClass('post-avatar--fixed');
      }
    } else {
      avatar.removeClass('post-avatar--fixed').addClass('post-avatar--absolute');
    }
  });
});
