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

   // shapesArray.push({ type: 'arc', x: centerX, y: centerY, radius: outer, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

  //  shapesArray.push({ type: 'arc', x: centerX, y: centerY, radius: outer - size, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    var bRadius = outer - size;
    var elementSize = size;

    var circumference = 2 * Math.PI * bRadius;

    var pearlCount = Math.round(circumference / (elementSize))
    var pearlAngle = 360 / pearlCount;

    const outerHalfCircle = Math.round((2 * Math.PI * outer) / (2 * pearlCount))

    for (let i = 0; i < pearlCount; i++) {
        const axAngle = i * pearlAngle;
        var startAngle = axAngle;
        var endAngle = axAngle + 95;
        const coordinateA = getCoordinates(centerX, centerY, bRadius, axAngle);
    //    shapesArray.push({ type: 'arc', x: coordinateA.x, y: coordinateA.y, radius: elementSize / 2, startAngle: deg2rad(startAngle), endAngle: deg2rad(endAngle) },);
        const coordinateB = getCoordinates(centerX, centerY, outer, axAngle )
    //    shapesArray.push({ type: 'arc', x: coordinateB.x, y: coordinateB.y, radius: outerHalfCircle, startAngle: deg2rad(startAngle + 90), endAngle: deg2rad(endAngle + 90) },);
        const coordinateC = getCoordinates(centerX, centerY, outer, axAngle + pearlAngle)
    //    shapesArray.push({ type: 'arc', x: coordinateC.x, y: coordinateC.y, radius: outerHalfCircle, startAngle: deg2rad(startAngle + 180), endAngle: deg2rad(endAngle + 180) },);
        const coordinateD = getCoordinates(centerX, centerY, bRadius, axAngle + pearlAngle)
    //    shapesArray.push({ type: 'arc', x: coordinateD.x, y: coordinateD.y, radius: elementSize / 2, startAngle: deg2rad(startAngle + 270), endAngle: deg2rad(endAngle + 270) },);


        for (let j = axAngle - 85; j <= axAngle + 85; j += 5) {
            const ofCoordinate = getCoordinates(coordinateA.x, coordinateA.y, elementSize / 2, j);
            shapesArray.push({ type: 'line', start: coordinateA, end: ofCoordinate });
        }

        for (let j = axAngle + 95; j <= axAngle + 265; j += 5) {
            const ofCoordinate = getCoordinates(coordinateB.x, coordinateB.y, outerHalfCircle, j);
            shapesArray.push({ type: 'line', start: coordinateB, end: ofCoordinate });
        }
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
