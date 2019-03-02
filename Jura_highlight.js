// Jura_highlight.js
// Landon Halloran, March 2019
// This script reads in a global DEM, defines a custom colour palette,
// defines a polygon, and plots the clipped DEM.

var geometry = ee.Geometry.Polygon(
        [[[6.099597614084587, 46.24530218836151],
          [6.247913043772087, 46.332607767860985],
          [6.451160114084587, 46.472763907987066],
          [6.544543903147087, 46.59368969938085],
          [6.544543903147087, 46.714346263232656],
          [6.670886676584587, 46.793380851000585],
          [6.819202106272087, 46.86854413486076],
          [6.962024371897087, 46.99233377373905],
          [7.170764606272087, 47.078442224366775],
          [7.434436481272087, 47.186815728095034],
          [7.593738239084587, 47.21667300573002],
          [7.780505817209587, 47.29496842042799],
          [7.950793903147087, 47.35826564038056],
          [8.099109332834587, 47.391745227701925],
          [8.197986285959587, 47.45492645771026],
          [8.247424762522087, 47.555117281787275],
          [8.208972614084587, 47.6106962292017],
          [8.044177692209587, 47.56623779195507],
          [7.923328082834587, 47.56623779195507],
          [7.626697223459587, 47.551409920511546],
          [7.038928668772087, 47.56623779195507],
          [6.489612262522087, 47.43263585864184],
          [6.127063434397087, 47.32104116763846],
          [5.841418903147087, 47.127050760278046],
          [5.604736328125, 46.83490721783201],
          [5.2916259765625, 46.44645030009398],
          [5.253173828125, 45.95981954318741],
          [5.626708984375, 45.64580595314742],
          [5.6871337890625, 45.757061828318584],
          [5.83544921875, 45.86044587988977],
          [5.824462890625, 45.98654359316397],
          [5.802490234375, 46.09331084445835],
          [5.8848876953125, 46.10854646771678],
          [5.9453125, 46.16564255989405]]]);
          
var elev = ee.Image('CGIAR/SRTM90_V4'); //90m resolution

var elev2 = elev.clip(geometry);

var viridis = ['#440154','#481567','#482677','#453781',
  '#404788','#39568C','#33638D','#2D708E','#287D8E',
  '#238A8D','#1F968B','#20A387','#29AF7F','#3CBB75',
  '#55C667','#73D055','#95D840','#B8DE29','#DCE319',
  '#FDE725'];

Map.setCenter(7, 46, 7);
var Jura_layer = Map.addLayer(elev2, {min: 400, max: 1600, opacity: 1, palette:viridis}, 'Jura_highlight');

