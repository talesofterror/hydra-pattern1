
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

var pulse3 = () => 0.2 * Math.sin(time / 0.7) + 0.5
var pulse4 = () => 0.1 * Math.sin(time / 0.5) + 0.3
var pulse5 = () => 0.09 * Math.sin(time / 0.3) + 0.1

s0.initVideo("assets/tsukiko.mp4")
src(s0)
  .out(o0);

src(o0)
  .posterize(2, 1).shift(1, 1, 0.5)
  .out(o2);

render(o2);




function out1osc1 (size, time, shift){
  return osc(size, time, shift)
}

function wave1RotSine() {
  return Math.sin( (time/ 0.7) ) * 0.2;
}