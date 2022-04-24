var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  });  

  var angle = 0;
  var inc = () => angle++;
  var sine = () => Math.sin(0.5);
  var oscSize = 50;
  var osc2Size = oscSize * 0.8;

  osc(osc2Size, 0.05, 0).
    luma( () => Math.abs(Math.sin(time*0.01)), 1).
    add(osc(oscSize, 0, 10)).
    posterize(1, 1).
    modulate(osc(100, 0.05, 0.5).luma(0, 0).rotate(1.57)).
    out();
