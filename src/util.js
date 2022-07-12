export const smallImage = (imagePath, size) => {
  const MediaGames = /\/media\/games\//;
  const MediaScreenShots = /\/media\/screenshots\//;

  if (imagePath.match(MediaGames)) {
    return imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  } else if (imagePath.match(MediaScreenShots)) {
    return imagePath.replace(
      "/media/screenshots/",
      `/media/resize/${size}/-/screenshots/`
    );
  }

  return imagePath;
};
