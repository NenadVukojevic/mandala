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

    shapesArray.push({ x: centerX, y: centerY, radius: outer, startAngle: deg2rad(0), endAngle: deg2rad(365) },);
    shapesArray.push({ x: centerX, y: centerY, radius: outer - 4, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    shapesArray.push({ x: centerX, y: centerY, radius: outer - size + 4, startAngle: deg2rad(0), endAngle: deg2rad(365) },);
    shapesArray.push({ x: centerX, y: centerY, radius: outer - size, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    var bRadius = Math.round(outer - size / 2);
    var pearlSize = Math.round((size - 14) / 2);

    var circumference = 2 * Math.PI * bRadius;

    var pearlCount = Math.round(circumference / (2 * pearlSize))
    var pearlAngle = 360 / pearlCount;

    for (let i = 0; i < pearlCount; i++) {
        const coordinate = getCoordinates(centerX, centerY, bRadius, i * pearlAngle);
        shapesArray.push({ x: coordinate.x, y: coordinate.y, radius: pearlSize, startAngle: deg2rad(0), endAngle: deg2rad(365) },);
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
