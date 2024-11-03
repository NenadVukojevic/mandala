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
        const start = getCoordinates(centerX, centerY, bRadius, i * pearlAngle - pearlAngle / 2);
        const end = getCoordinates(centerX, centerY, bRadius, i * pearlAngle + pearlAngle / 2)
        const pointA = getCoordinates(centerX, centerY, outer, i * pearlAngle - pearlAngle / 6);
        const pointB = getCoordinates(centerX, centerY, outer, i * pearlAngle + pearlAngle / 6);
        
        shapesArray.push({ type: 'bezier', start:start, end:end, pointA:pointA, pointB:pointB, background: 'black', color: 'white' });

        
        
        

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
