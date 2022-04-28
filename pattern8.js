var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  });  

  var oscSize = 50;
  var oscSize2 = oscSize * 0.8;

  osc(oscSize2, 0, 0).
    luma( () => Math.abs(Math.sin(time*0.01)), 1).
    add(osc(oscSize, ()=>Math.sin(-0.05), 10)).
    posterize(1, 1).
    modulate(osc(100, ()=>Math.sin(-0.05), 0.5).luma(0, 0).
    rotate(1.57)).
    add(shape(100, 0.5, 0.005).scale(1, 0.5, 1)).
    out(o0)

  osc(oscSize2, 0.01, 0).
    luma( () => Math.abs(Math.sin(50)), 1).
    add(osc(oscSize, 0, 10)).
    posterize(0.8, 1).
    modulate(osc(100, 0.6, 0.5).luma(0, 0).
    rotate(1.57, () => Math.sin(-25))).
    modulate(osc(oscSize2, 0, 0).
      rotate(0, () => Math.abs(Math.sin(30)))).
    mult(shape(100, 0.5, 0.005).scale(1, 0.5, 1)).
    sub(shape(100, () => Math.abs(0.3 * Math.sin(time * 0.4) + 1), 0.005).scale(1, 0.5, 1)).
      add(shape(100, () => Math.abs(0.3 * Math.sin(time * 0.4) + 1.3), 0.005).scale(1, 0.5, 1)).
    out(o1)

  osc(8, 0.5, 0).
    scrollX(0.5).
    luma( () => Math.abs(Math.sin(time*0.5)), 1).
    add(osc(8, 0.5, 10)
      ).
    posterize(0.8, 1).
    modulate(osc(0.4, 10, 0.5).luma(1, 0).
      rotate(1.57, () => Math.sin(-30))
      ).
    modulate(osc(8, 2, 0).
      rotate(2, () => 1 + Math.cos(30))).
    // luma(0, 1).
    rotate(-1.5, 0).
    kaleid(1).
    sub(shape(100, () => Math.abs(0.5 * Math.sin(time * 0.5) + 1.4), 0.005).scale(1, 0.5, 1)).
    add(shape(75, () => Math.abs(0.5 * Math.sin(time * 0.4) + 1.2), 0.005).scale(1, 0.5, 1)).
    sub(shape(50, () => Math.abs(0.3 * Math.sin(time * 0.3) + 1.6), 0.005).scale(1, 0.5, 1)).
    add(shape(25, () => Math.abs(0.3 * Math.sin(time * 0.2) + 1.8), 0.005).scale(1, 0.5, 1)).
    out(o2)

  src(o0)
    .diff(o1)
      .invert()
    .diff(o2)
    .out(o3)

    render();

    setResolution(1080, 1080);



    /*
    
    ORIG o1 SOURCE

    osc(oscSize2, 0.01, 0).
    luma( () => Math.abs(Math.sin(50)), 1).
    add(osc(oscSize, 0, 10)).
    posterize(0.8, 1).
    modulate(osc(100, 0.6, 0.5).luma(0, 0).
    rotate(1.57, () => Math.sin(-25))).
    modulate(osc(oscSize2, 0, 0).
      rotate(0, () => Math.abs(Math.sin(30)))).
    mult(shape(100, 0.5, 0.005).scale(1, 0.5, 1)).
    out(o1) 
    */