export const fotmatedDescription = someText => {
  return someText.length > 25 ? someText.substr(0, 24) : someText;
};
