var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
  }); 

  osc(999, spinner(0.2, 0.2), spinner(20, 1))
    .modulate(osc(3, spinner(0.4, 0.5), 5))
    .modulate(noise(100, 0))
    .out(o0);

  src(o0)
    .add(
        shape(4, 0.3, 0.01)
            .scrollX(3, 5.0)
            .repeatY(3)
            .repeatX(3)
            .kaleid(6)
            .rotate(0, 1.5)
    )
    .diff(
        osc(100, 0, 0) 
            .rotate(1.6, 0)        
            .thresh(0.8)
            .kaleid(6)
            .rotate(0, 1.5)
            .color(1, 0.5, 0)
    )
        
    .out(o1);

    render(o1);

function spinner(v, v2) {
    return () => Math.sin((v) - v2);
}
