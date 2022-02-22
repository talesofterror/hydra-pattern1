
var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  }); 

  // CanvasRenderingContext2D(2.0, 2.0);

var wave1Size = 100;
var wave1Rotation = 1.5708;
var wave1Shift = 1;

var pulse1 = () => 10 * Math.sin(time / 1)
var pulse2 = () => 0.2 * Math.sin(time / 0.5)

s0.initVideo("assets/corngal.mp4")
src(s0)
  .out(o0);

src(o0)
  .diff(
    osc(1, 0, pulse1),
      0.1)
  .diff(o2)
    .out(o1);

shape(3, 0.2, 0.05).scale(1, pulse2, 1).scrollY(0, 0.7)
    .add(
      shape(3, 0.2, 0.05).scale(1, pulse2, 1).scrollY(-0.22, -0.7).rotate(3.1) 
        , 1)
    .modulate(
      osc(10, 0.5, 0)
        .modulate(osc(50, 0.5, 0).rotate(1.5))
    )
    .repeatY(3)
    .scrollX(0.2, 0.5)
    .repeatX([3, 4, 5, 6].fast(10), 2)
    .rotate(pulse2, 0.5)
    .add(
      src(o0)
        .posterize(1.8, 1)
        .invert(10)
    , 0.01)
    .sub(noise(1, 0.3).posterize(3, 1), 0.7)
    .out(o2);


shape(100, 0.5, 0.05)
  .out(o3)

render(o1);

function out1osc1 (size, time, shift){
  return osc(size, time, shift)
  // .thresh()
}

function wave1RotSine() {
  return Math.sin( (time/ 0.7) ) * 0.2;
}