const playlist = {string1: string};

function updatePlaylist(object, string1, string2) {
  object[string1] = string2;
  return object;
}

function removeFromPlaylist(object, string){
  delete object[string];
  return object;
}