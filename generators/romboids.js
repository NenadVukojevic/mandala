// shapes.js

/**
 * Generates an array of objects based on center, outer, and width.
 * @param {number} centerX - The center X value.
 * @param {number} centerY - The center X value.
 * @param {number} outer - The outer value.
 * @param {number} size - The width value.
 * @returns {Array} - Array of objects.
 */
function generateShapes(centerX, centerY, outer, size) {
    const shapesArray = [];

    shapesArray.push({ type: 'arc', x: centerX, y: centerY, radius: outer, startAngle: deg2rad(0), endAngle: deg2rad(365) },);
    shapesArray.push({ type: 'arc', x: centerX, y: centerY, radius: outer - size, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    var aRadius = outer - size;
    var bRadius = Math.round(outer - size / 2);


    var circumference = 2 * Math.PI * bRadius;

    var pearlCount = Math.round(circumference / (3 / 5 * size))
    var pearlAngle = 360 / pearlCount;

    var rAngle = Math.atan((size / 2) / (outer - size / 2)) * 180 / Math.PI

    console.log("rAngle", size / 2, outer - size / 2, rAngle);

    for (let i = 0; i < pearlCount; i++) {
        const curAngle = i * pearlAngle;
        const a = getCoordinates(centerX, centerY, aRadius + 1, curAngle);
        const b = getCoordinates(centerX, centerY, bRadius, curAngle - rAngle)
        const c = getCoordinates(centerX, centerY, outer - 1, curAngle);
        const d = getCoordinates(centerX, centerY, bRadius, curAngle + rAngle)
        shapesArray.push({ type: 'quad', a, b, c, d },);
    }

    return shapesArray;
}

function getCoordinates(centerX, centerY, radius, angle) {
    const coordinate = {
        x: Math.round(centerX + radius * Math.cos(deg2rad(angle))),
        y: Math.round(centerY + radius * Math.sin(deg2rad(angle))
        )
    };

    return coordinate;
}


function deg2rad(d) {
    const r = (d * Math.PI) / 180
    return r
}
// Export the function so that it can be imported in another file
export { generateShapes };
