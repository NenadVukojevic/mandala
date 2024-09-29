const arcs = [
    { x: 300, y: 300, radius: 200, startAngle: 0, endAngle: 2.1 * Math.PI, color: 'white' },
    { x: 500, y: 300, radius: 200, startAngle: (1.75 / 3) * Math.PI, endAngle: (4.25 / 3) * Math.PI, color: 'white' },
    { x: 400, y: 473, radius: 200, startAngle: (2.75 / 3) * Math.PI, endAngle: (5.25 / 3) * Math.PI, color: 'white' },
    { x: 200, y: 473, radius: 200, startAngle: (3.75 / 3) * Math.PI, endAngle: (6.25 / 3) * Math.PI },
    { x: 100, y: 300, radius: 200, startAngle: (4.75 / 3) * Math.PI, endAngle: (7.25 / 3) * Math.PI },
    { x: 200, y: 127, radius: 200, startAngle: (5.75 / 3) * Math.PI, endAngle: (8.25 / 3) * Math.PI },
    { x: 400, y: 127, radius: 200, startAngle: (0.75 / 3) * Math.PI, endAngle: (3.25 / 3) * Math.PI },

    { x: 300, y: 300, radius: 250, startAngle: 0, endAngle: 2.1 * Math.PI },

    { x: 493, y: 352, radius: 200, startAngle: (2.01 / 3) * Math.PI, endAngle: (2.26 / 3) * Math.PI },
    { x: 473, y: 400, radius: 200, startAngle: (2.26 / 3) * Math.PI, endAngle: (2.51 / 3) * Math.PI },
    { x: 441, y: 441, radius: 200, startAngle: (2.51 / 3) * Math.PI, endAngle: (2.77 / 3) * Math.PI },
    { x: 352, y: 493, radius: 200, startAngle: (3.01 / 3) * Math.PI, endAngle: (3.28 / 3) * Math.PI },
    { x: 300, y: 500, radius: 200, startAngle: (3.26 / 3) * Math.PI, endAngle: (3.51 / 3) * Math.PI },
    { x: 248, y: 493, radius: 200, startAngle: (3.51 / 3) * Math.PI, endAngle: (3.77 / 3) * Math.PI },
    { x: 159, y: 441, radius: 200, startAngle: (4.01 / 3) * Math.PI, endAngle: (4.28 / 3) * Math.PI },
    { x: 127, y: 400, radius: 200, startAngle: (4.26 / 3) * Math.PI, endAngle: (4.51 / 3) * Math.PI },
    { x: 107, y: 352, radius: 200, startAngle: (4.51 / 3) * Math.PI, endAngle: (4.77 / 3) * Math.PI },
    { x: 107, y: 248, radius: 200, startAngle: (5.01 / 3) * Math.PI, endAngle: (5.27 / 3) * Math.PI },
    { x: 127, y: 200, radius: 200, startAngle: (5.26 / 3) * Math.PI, endAngle: (5.51 / 3) * Math.PI },
    { x: 159, y: 159, radius: 200, startAngle: (5.51 / 3) * Math.PI, endAngle: (5.77 / 3) * Math.PI },
    { x: 248, y: 107, radius: 200, startAngle: (6.01 / 3) * Math.PI, endAngle: (6.27 / 3) * Math.PI },
    { x: 300, y: 100, radius: 200, startAngle: (6.26 / 3) * Math.PI, endAngle: (6.51 / 3) * Math.PI },
    { x: 352, y: 107, radius: 200, startAngle: (6.51 / 3) * Math.PI, endAngle: (6.77 / 3) * Math.PI },
    { x: 441, y: 159, radius: 200, startAngle: (7.01 / 3) * Math.PI, endAngle: (7.27 / 3) * Math.PI },
    { x: 473, y: 200, radius: 200, startAngle: (7.26 / 3) * Math.PI, endAngle: (7.51 / 3) * Math.PI },
    { x: 493, y: 248, radius: 200, startAngle: (7.51 / 3) * Math.PI, endAngle: (7.77 / 3) * Math.PI },

    { x: 493, y: 352, radius: 200, startAngle: (4.26 / 3) * Math.PI, endAngle: (4.51 / 3) * Math.PI },
    { x: 473, y: 400, radius: 200, startAngle: (4.51 / 3) * Math.PI, endAngle: (4.77 / 3) * Math.PI },
    { x: 441, y: 441, radius: 200, startAngle: (4.77 / 3) * Math.PI, endAngle: (5.01 / 3) * Math.PI },
    { x: 352, y: 493, radius: 200, startAngle: (5.26 / 3) * Math.PI, endAngle: (5.51 / 3) * Math.PI },
    { x: 300, y: 500, radius: 200, startAngle: (5.51 / 3) * Math.PI, endAngle: (5.77 / 3) * Math.PI },
    { x: 248, y: 493, radius: 200, startAngle: (5.77 / 3) * Math.PI, endAngle: (6.01 / 3) * Math.PI },
    { x: 159, y: 441, radius: 200, startAngle: (6.26 / 3) * Math.PI, endAngle: (6.51 / 3) * Math.PI },
    { x: 127, y: 400, radius: 200, startAngle: (6.51 / 3) * Math.PI, endAngle: (6.77 / 3) * Math.PI },
    { x: 107, y: 352, radius: 200, startAngle: (6.77 / 3) * Math.PI, endAngle: (7.01 / 3) * Math.PI },
    { x: 107, y: 248, radius: 200, startAngle: (7.26 / 3) * Math.PI, endAngle: (7.51 / 3) * Math.PI },
    { x: 127, y: 200, radius: 200, startAngle: (7.51 / 3) * Math.PI, endAngle: (7.77 / 3) * Math.PI },
    { x: 159, y: 159, radius: 200, startAngle: (7.77 / 3) * Math.PI, endAngle: (8.01 / 3) * Math.PI },
    { x: 248, y: 107, radius: 200, startAngle: (8.26 / 3) * Math.PI, endAngle: (8.51 / 3) * Math.PI },
    { x: 300, y: 100, radius: 200, startAngle: (8.51 / 3) * Math.PI, endAngle: (8.77 / 3) * Math.PI },
    { x: 352, y: 107, radius: 200, startAngle: (8.77 / 3) * Math.PI, endAngle: (9.01 / 3) * Math.PI },
    { x: 441, y: 159, radius: 200, startAngle: (9.26 / 3) * Math.PI, endAngle: (9.51 / 3) * Math.PI },
    { x: 473, y: 200, radius: 200, startAngle: (9.51 / 3) * Math.PI, endAngle: (9.77 / 3) * Math.PI },
    { x: 493, y: 248, radius: 200, startAngle: (9.77 / 3) * Math.PI, endAngle: (10.01 / 3) * Math.PI },
];

function deg2rad(d) {
    r = (d * Math.PI) / 180
    return r
}