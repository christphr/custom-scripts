//NIR Colourisation from NDMI script
if (B08 == 0){
  return [0,0,0];
} else {
  var val = B08;
  
  var vmin = 0;
  var vmax = 0.3;
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
  
  var l1 = 0.333;
  var l2 = 0.667;
  //var l3 = 0.5;
  //var l4 = 0.75;
  
  var level1 = (vmin + l1 * dv);
  var level2 = (vmin + l2 * dv);
 // var level3 = (vmin + l3 * dv);
 // var level4 = (vmin + l4 * dv);

  if (v < level1){
    r = 0;
    g = 0;  
    b = (v - vmin) / (level1 - vmin);
  } else if (v < level2){
    r = (v - level1) / (level2 - level1);
    g = r;
    b = (1 - (v - level1) / (level2 - level1));
  } else { 
    r = 1;
    g = 1;
    b = (v - level2) / (vmax - level2);
  }

   return [r, g, b];
  
}
