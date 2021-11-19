//NDWI Colourisation from NDMI script
if (B08 == 0 || B03 == 0){
  return [0,0,0];
} else {
  var val = B08;
  
  var vmin = 0;
  var vmax = 4000;
  var dv = vmax - vmin;
  
  var r = 0.0;
  var g = 0.0;
  var b = 0.0;

  
  var v = val;

  if (v < vmin){
    v = vmin;
  }
  if (v > vmax){
    v = vmax;
  }
  
  var l1 = 0.25;
  var l2 = 0.499;
  var l3 = 0.501;
  var l4 = 0.75;
  
  var level1 = (vmin + l1 * dv);
  var level2 = (vmin + l2 * dv);
  var level3 = (vmin + l3 * dv);
  var level4 = (vmin + l4 * dv);

  if (v < level1){
     r = 0.5 +  (v - vmin) / (level1 - vmin) / 2;
  } else if (v < level2) {
     r = 1;
     g = (v - level1) / (level2 - level1);
     b = 0;
  } else if (v < level3) {
     r = 1 + (level2 - v) / (level3 - level2);
     g = 1;
     b = (v - level2) / (level3 - level2);
  } else if (v < level4) {
     r = 0;
     g = 1 + (level3 - v) / (level4 - level3);
     b = 1;
  } else {
     b = 1.0 + (level4 - v) / (vmax - level4) / 2;
  }

   return [r, g, b];
  
}
