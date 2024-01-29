export const validateTikTokUrl = (url: string): boolean => {
  const pattern = /^https?:\/\/((www\.)?tiktok\.com\/|vm\.tiktok\.com\/)\S+/;
  return pattern.test(url);
  };
  