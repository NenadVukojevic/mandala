const arcs = [
    { x: 400, y: 450, radius: 40, startAngle: deg2rad(0), endAngle: deg2rad(180) },
    { x: 294, y: 406, radius: 40, startAngle: deg2rad(45), endAngle: deg2rad(225) },
    { x: 250, y: 300, radius: 40, startAngle: deg2rad(90), endAngle: deg2rad(270) },
    { x: 294, y: 194, radius: 40, startAngle: deg2rad(135), endAngle: deg2rad(315) },
    { x: 400, y: 150, radius: 40, startAngle: deg2rad(180), endAngle: deg2rad(360) },
    { x: 506, y: 194, radius: 40, startAngle: deg2rad(225), endAngle: deg2rad(405) },
    { x: 550, y: 300, radius: 40, startAngle: deg2rad(270), endAngle: deg2rad(450) },
    { x: 506, y: 406, radius: 40, startAngle: deg2rad(315), endAngle: deg2rad(495) },
       
    { x: 348, y: 425, radius: 30, startAngle: deg2rad(162), endAngle: deg2rad(422) },
    { x: 275, y: 352, radius: 30, startAngle: deg2rad(207), endAngle: deg2rad(467) },
    { x: 275, y: 248, radius: 30, startAngle: deg2rad(252), endAngle: deg2rad(512) },
    { x: 348, y: 175, radius: 30, startAngle: deg2rad(297), endAngle: deg2rad(557) },
    { x: 452, y: 175, radius: 30, startAngle: deg2rad(342), endAngle: deg2rad(602) },
    { x: 525, y: 248, radius: 30, startAngle: deg2rad(387), endAngle: deg2rad(647) },
    { x: 525, y: 352, radius: 30, startAngle: deg2rad(432), endAngle: deg2rad(692) },
    { x: 452, y: 425, radius: 30, startAngle: deg2rad(477), endAngle: deg2rad(737) },
    
    

];

function deg2rad(d) {
    r = (d * Math.PI) / 180
    return r
}