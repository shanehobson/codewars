function extractDomainName(url) {
  const regex = /(https?:\/\/)|(www.)/gi;
  const shortUrl = url.replace(regex, '');
  const endIndex = shortUrl.indexOf('.');
  return shortUrl.slice(0, endIndex);
}

