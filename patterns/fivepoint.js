const arcs = [
    { x: 482, y: 426, radius: 53, startAngle: deg2rad(187), endAngle: deg2rad(287) },
    { x: 349, y: 409, radius: 80, startAngle: deg2rad(8), endAngle: deg2rad(61) },
    { x: 439, y: 413, radius: 80, startAngle: deg2rad(128), endAngle: deg2rad(183) },
    { x: 306, y: 417, radius: 53, startAngle: deg2rad(259), endAngle: deg2rad(359) },
    { x: 281, y: 285, radius: 80, startAngle: deg2rad(80), endAngle: deg2rad(133) },
    { x: 304, y: 372, radius: 80, startAngle: deg2rad(200), endAngle: deg2rad(255) },
    { x: 260, y: 246, radius: 53, startAngle: deg2rad(331), endAngle: deg2rad(431) },
    { x: 377, y: 182, radius: 80, startAngle: deg2rad(152), endAngle: deg2rad(205) },
    { x: 302, y: 231, radius: 80, startAngle: deg2rad(272), endAngle: deg2rad(327) },
    { x: 408, y: 150, radius: 53, startAngle: deg2rad(403), endAngle: deg2rad(503) },
    { x: 435, y: 185, radius: 80, startAngle: deg2rad(344), endAngle: deg2rad(399) },
    { x: 505, y: 242, radius: 80, startAngle: deg2rad(224), endAngle: deg2rad(277) },
    
    { x: 545, y: 261, radius: 53, startAngle: deg2rad(115), endAngle: deg2rad(215) },

    { x: 520, y: 298, radius: 80, startAngle: deg2rad(416), endAngle: deg2rad(471) },
    { x: 488, y: 382, radius: 80, startAngle: deg2rad(296), endAngle: deg2rad(349) },

]

function deg2rad(d) {
    r = (d * Math.PI) / 180
    return r
}