const domains = ["i0.wp.com", "i1.wp.com", "i2.wp.com", "i3.wp.com", "cdn.statically.io/img"];

$("img").each(function() {
  let src = $(this).attr("src");
  let randomDomain = domains[Math.floor(Math.random() * domains.length)];
  let newSrc = src.replace(/^https?:\/\/(.+?)\//, "https://" + randomDomain + "/$1/");
  $(this).attr("src", newSrc);
});
$('img[src]').attr({
  'data-src': function() {
    return $(this).attr('src');
  },
  'class': 'lazyload',
  'loading': 'lazy'
}).removeAttr('src');
