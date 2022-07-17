
var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  }); 

  // register WebMIDI
navigator.requestMIDIAccess()
.then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
console.log(midiAccess);
var inputs = midiAccess.inputs;
var outputs = midiAccess.outputs;
for (var input of midiAccess.inputs.values()){
    input.onmidimessage = getMIDIMessage;
}
}

function onMIDIFailure() {
console.log('Could not access your MIDI devices.');
}

//create an array to hold our cc values and init to a normalized value
var cc=Array(128).fill(0.5)

getMIDIMessage = function(midiMessage) {
var arr = midiMessage.data    
var index = arr[1]
//console.log('Midi received on cc#' + index + ' value:' + arr[2])    // uncomment to monitor incoming Midi
var val = (arr[2]+1)/128.0  // normalize CC values to 0.0 - 1.0
cc[index]=val
}

  // CanvasRenderingContext2D(2.0, 2.0);

var wave1Size = 100;
var wave1Rotation = 1.5708;
var wave1Shift = 2;

var scale = 0.9;



var pulse1 = () => 0.02 * Math.sin(time / 7) + 0.4
var pulse2 = () => 0.05 * Math.sin(time / 0.2) + 25

var pulse3 = () => 5 * Math.sin(( Math.sin(time * 2)) / 5) + 5
var pulse4 = () => -5 * Math.sin(( Math.sin(time * 2)) / 5) + 0.5
var pulse5 = () => 0.09 * Math.sin(time / 0.3) + 0.1

var unitSine = () => Math.sin(((Math.PI * 0.7) * 5))

var switcher = () => [0.51, -0.49, 0.49, -0.51].fast(0.5)

var r = () => src(s0).color(1, 0, 0)
var g = () => src(s0).color(0, 1, 0)
var b = () => src(s0).color(0, 0, 1)
                // .mult(osc(100, 0.01, 0).modulate(noise(10).pixelate(10, 10)))

s0.initImage("assets/organic-tile1.png")

src(s0)
    .scrollY(0.5, pulse1)
    .scrollX(0, 0)
    .rotate(pulse1, 0.5)
  .add(
    r().scrollX(pulse3, 0.1)
    .scrollY(pulse3, 0.1)
    .rotate(pulse3, 0.5)
    .scale(0.5, 0.5))
//   .thresh(0.6, 0.3)
  .mult(o1, ()=>cc[41])
  .diff(o2)
//   .mult(o3)
    .sub(osc( ()=>cc[23]*1000, 0.2, 10)
        .kaleid( ()=>cc[24]*6)
    , ()=>cc[28])
.out(o0)

solid(1, 1, 1)
    .mult(s0)
        .scrollY(0.5, pulse1)
        .scrollX(0, 0)
        .rotate(pulse1, [0.51, -0.49, -0.51].fast(20))
    .color( ()=>cc[25], ()=>cc[26], ()=>cc[27])
.out(o1)

src(s0)
        .scrollX(pulse3, 0.1)
        .scrollY(pulse3, 0.1)
        .rotate(pulse3, 0.5)
        .scale(0.5, 0.5)
        .posterize(1, 0.2)
        .color(0, 1, 1)
        .diff(osc(2, 0.5, 1).kaleid(100))
        .luma(0.5, 1)
        .invert(pulse4)
        .modulate(o1)
    .sub(r()
        .thresh(0.1, ()=>cc[21])
        .scrollY(0.5, pulse1)
        .scrollX(() => cc[22], 0)
        .rotate(pulse1, [0.51, 0.5].fast(20))
    , ()=>cc[40])
.out(o2)

src(s0)
    .add(b())
    // .thresh(0.7, 0)
    .scrollY(0.5, pulse1)
    .scrollX(0, 0)
    .rotate(pulse1, [0.51, -0.49, -0.51].fast(20))
    .posterize(10, 0.3)
    .color(1,0,1)
    // .invert(pulse1)
    // .(50, 50, ()=>cc[23])
    
.out(o3)

render(o0);


setResolution(1080, 1080);
