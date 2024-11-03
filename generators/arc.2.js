// shapes.js

/**
 * Generates an array of objects based on center, outer, and width.
 * @param {number} centerX - The center X value.
 * @param {number} centerY - The center X value.
 * @param {number} outer - The outer value.
 * @param {number} size - The width value.
 * @returns {Array} - Array of objects.
 */
function generateShapes(centerX, centerY, outer, size, param1, param2) {
    console.log(param1, param2)
    const shapesArray = [];

    shapesArray.push({ type: 'arc', x: centerX, y: centerY, radius: outer, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    shapesArray.push({ type: 'arc', x: centerX, y: centerY, radius: outer - size, startAngle: deg2rad(0), endAngle: deg2rad(365) },);

    var bRadius = outer - size;
    var elementSize = 8 / 9 * size;

    var circumference = 2 * Math.PI * bRadius;

    var pearlCount = Math.round(circumference / (size))
    var pearlAngle = 360 / pearlCount;

    for (let i = 0; i < pearlCount; i++)
    //const i = 0
    {
        const coordinate = getCoordinates(centerX, centerY, bRadius, i * pearlAngle - pearlAngle / 2);
        var startAngle = 47 + i * pearlAngle;
        var endAngle = startAngle + 40;
        shapesArray.push({ type: 'arc', x: coordinate.x, y: coordinate.y, radius: elementSize, startAngle: deg2rad(startAngle), endAngle: deg2rad(endAngle) },);

        shapesArray.push({ type: 'point', x: coordinate.x, y: coordinate.y, color: 'blue' });

        const coordinateB = getCoordinates(centerX, centerY, bRadius, i * pearlAngle + pearlAngle / 2)
        var startAngle = -87 + i * pearlAngle
        var endAngle = startAngle + 40
        shapesArray.push({ type: 'arc', x: coordinateB.x, y: coordinateB.y, radius: elementSize, startAngle: deg2rad(startAngle), endAngle: deg2rad(endAngle) },);
        shapesArray.push({ type: 'point', x: coordinateB.x, y: coordinateB.y, color: 'red' });

        var startAngle = 290 + i * pearlAngle
        var endAngle = startAngle + 140
        const coordinateC = getCoordinates(centerX, centerY, outer - 1.07 / 2 * size, i * pearlAngle);
        shapesArray.push({ type: 'arc', x: coordinateC.x, y: coordinateC.y, radius: 1.1 / 5.0 * elementSize, startAngle: deg2rad(startAngle), endAngle: deg2rad(endAngle) })
        shapesArray.push({ type: 'point', x: coordinateC.x, y: coordinateC.y, color: 'green' });

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
