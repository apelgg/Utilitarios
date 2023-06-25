document.querySelectorAll('a').forEach(link => {
  if (link.href.includes('discord')) {
    link.href = 'https://example.com/discord';
  } else if (link.href.includes('facebook')) {
    link.href = 'https://example.com/facebook';
  } else if (link.href.includes('twitter')) {
    link.href = 'https://example.com/twitter';
  } else if (link.href.includes('instagram')) {
    link.href = 'https://example.com/instagram';
  }
});
