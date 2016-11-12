// deletes 'like' button as user scrolls through facebook
$(document).ready(function(){
  $(window).scroll(function(){
    $('a').each(function(){
      $('[data-testid="fb-ufi-likelink"]').remove();
      // deletes the comment 'like' button
      $('[data-testid="ufi_comment_like_link"]').remove();
      // deletes the comment reply 'like' button
      $('[data-testid="ufi_reply_like_link"]').remove();
    });
  });
});
