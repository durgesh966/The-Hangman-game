let button = document.querySelector(".btn")
const pickRandom = (x) => {
switch ((typeof x)) {
  case 'object' :
  case "string":
    return x[Math.floor(Math.random()*x.length)];
  case "number":
    return (Math.floor(Math.random()*x)+1);
    
    default :
    return 'no';
}
}
  let svg = d3.select("#hearts")
    let path = "M 5.5 7 C 4.1193 7 3 5.8807 3 4.5 l 0 0 v -2 C 3 2.2239 3.2239 2 3.5 2 H 4 c 0.2761 0 0.5 -0.2239 0.5 -0.5 S 4.2761 1 4 1 H 3.5 C 2.6716 1 2 1.6716 2 2.5 v 2 c 0.0013 1.1466 0.5658 2.2195 1.51 2.87 l 0 0 C 4.4131 8.1662 4.9514 9.297 5 10.5 C 5 12.433 6.567 14 8.5 14 s 3.5 -1.567 3.5 -3.5 V 9.93 c 1.0695 -0.2761 1.7126 -1.367 1.4365 -2.4365 C 13.1603 6.424 12.0695 5.7809 11 6.057 C 9.9305 6.3332 9.2874 7.424 9.5635 8.4935 C 9.7454 9.198 10.2955 9.7481 11 9.93 v 0.57 c 0 1.3807 -1.1193 2.5 -2.5 2.5 S 6 11.8807 6 10.5 c 0.0511 -1.2045 0.5932 -2.3356 1.5 -3.13 l 0 0 C 8.4404 6.7172 9.001 5.6448 9 4.5 v -2 C 9 1.6716 8.3284 1 7.5 1 H 7 C 6.7239 1 6.5 1.2239 6.5 1.5 S 6.7239 2 7 2 h 0.5 C 7.7761 2 8 2.2239 8 2.5 v 2 l 0 0 C 8 5.8807 6.8807 7 5.5 7 M 11.5 9 c -0.5523 0 -1 -0.4477 -1 -1 s 0.4477 -1 1 -1 s 1 0.4477 1 1 S 12.0523 9 11.5 9 Z";
let heartPath ="M 0 200 v -200 h 200 a 100 100 90 0 1 0 200 a 100 100 90 0 1 -200 0 Z";
function createHeart (x,y,color){
   svg.append('path')
        .attr('d', heartPath)
        .attr('fill', color)
        .attr('transform', 'translate(' + x + ',' + y + '), scale(.05,.05), rotate(230)')
        .attr('opacity', 1)
        .transition()
        .duration(2500)
        .ease(d3.easeExpOut)
        .attr('transform', 'translate(' + x + ',' + (y+50) + '), scale(.05,.05), rotate(230)')
        .attr('opacity', 0)
        .remove();
}


setInterval(() => {
    let x =pickRandom(window.innerWidth);
    let y = pickRandom(window.innerHeight);
    let color = 'rgb(' + pickRandom(255) + ',' + pickRandom(255) + ',' + pickRandom(255) +')';
    createHeart(x,y, color);
},100);

