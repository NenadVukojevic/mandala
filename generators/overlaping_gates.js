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

    shapesArray.push({type:'arc', x: centerX, y: centerY, radius: outer, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    shapesArray.push({type:'arc', x: centerX, y: centerY, radius: outer - size, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    var bRadius = outer-size;
    var elementSize = size;

    var circumference = 2 * Math.PI * bRadius;

    var pearlCount = Math.round(circumference / (4/6 * elementSize))
    var pearlAngle = 360 / pearlCount;

    for (let i = 0; i < pearlCount; i++) {
        const coordinate = getCoordinates(centerX, centerY, bRadius, i * pearlAngle);
        var startAngle = -90 + i*pearlAngle;
        var endAngle = startAngle + 180;
        shapesArray.push({type:'arc', x: coordinate.x, y: coordinate.y, radius: elementSize, startAngle: deg2rad(startAngle), endAngle: deg2rad(endAngle) },);
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
