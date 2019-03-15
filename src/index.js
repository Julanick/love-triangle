/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var loverA = i + 1;
    var loverB = preferences[i];
    var loverC = preferences[loverB - 1];
    var loverD = preferences[loverC - 1];
    if (loverA == loverD) count++;
  }
  return Math.floor(count / 3);
};
