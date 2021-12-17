var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  });
  
  // var parent = document.getElementById("parent");
  // hydra.canvas.width = parent.offsetWidth;
  // hydra.canvas.height = parent.offsetHeight;

  // fitToContainer(hydra.canvas);

  // function fitToContainer(c){
  //   // Make it visually fill the positioned parent
  //   c.style.width ='100%';
  //   c.style.height='100%';
  //   // ...then set the internal size to match
  //   c.width  = canvas.offsetWidth;
  //   c.height = canvas.offsetHeight;
  // }


var osc1 = () => Math.sin(time / 0.5 * 10) + 150;
var kVal = () => Math.sin(time / 0.4 * 1) * 50 + 5;
var t = () => time;
var switchTime = 20;
osc(osc1, 0, 5)
.kaleid(kVal)
.sub(shape([5, 3].fast(switchTime), [0.2, 0.05].fast(switchTime), 0.5)
    .rotate(0.5, 1))
.diff(shape([3, 5].fast(switchTime), [0.05, 0.2].fast(switchTime), 0.5)
    .modulate(osc(osc1, 0, 0))
    .rotate(0.5, -1)
)

.modulate(osc(1, 2, 0)
    .thresh(1)
    .kaleid(999)
    .color(1, 0, 0.2)
    .modulate(noise([100, 50, 150].fast(switchTime), 0)
        .kaleid(99)).diff(osc(1, 0.2, 0)).pixelate(10, 5)
// .diff(shape(99, osc1, 0))
)
.modulate(osc(1, 5, 0)).kaleid(kVal)
// .sub(osc(50, 0.5, 0).kaleid(kVal).sub(osc(1, 0.5, 0)))
.scale(0.5, 0.5, 1)
.out();