const arcs = [
    /*  { x: 400, y: 300, radius: 80, startAngle: deg2rad(0), endAngle: deg2rad(362) },
      { x: 400, y: 300, radius: 120, startAngle: deg2rad(0), endAngle: deg2rad(362) },
      { x: 400, y: 300, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(362) },
      { x: 400, y: 300, radius: 182, startAngle: deg2rad(0), endAngle: deg2rad(362) },
      { x: 400, y: 300, radius: 212, startAngle: deg2rad(0), endAngle: deg2rad(362) },
      { x: 400, y: 300, radius: 239, startAngle: deg2rad(0), endAngle: deg2rad(362) },
      { x: 400, y: 300, radius: 260, startAngle: deg2rad(0), endAngle: deg2rad(362) },
      */
    { x: 550, y: 300, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 545, y: 339, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 530, y: 375, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 506, y: 406, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 475, y: 430, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 439, y: 445, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 400, y: 450, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 361, y: 445, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 325, y: 430, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 294, y: 406, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 270, y: 375, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 255, y: 339, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 250, y: 300, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 255, y: 261, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 270, y: 225, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 294, y: 194, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 325, y: 170, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 361, y: 155, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 400, y: 150, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 439, y: 155, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 475, y: 170, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 506, y: 194, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 530, y: 225, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },
    { x: 545, y: 261, radius: 150, startAngle: deg2rad(0), endAngle: deg2rad(380) },


];

const fills = [
    { x: 479, y: 310 },
    { x: 474, y: 330 },
    { x: 464, y: 348 },
    { x: 449, y: 363 },
    { x: 431, y: 374 },
    { x: 411, y: 379 },
    { x: 390, y: 379 },
    { x: 370, y: 374 },
    { x: 352, y: 364 },
    { x: 337, y: 349 },
    { x: 326, y: 331 },
    { x: 321, y: 311 },
    { x: 321, y: 290 },
    { x: 326, y: 270 },
    { x: 336, y: 252 },
    { x: 351, y: 237 },
    { x: 369, y: 226 },
    { x: 389, y: 221 },
    { x: 410, y: 221 },
    { x: 430, y: 226 },
    { x: 448, y: 236 },
    { x: 463, y: 251 },
    { x: 474, y: 269 },
    { x: 479, y: 289 },
    { x: 479, y: 310 },
    { x: 474, y: 330 },
    { x: 464, y: 348 },

    { x: 549, y: 318 },
    { x: 539, y: 356 },
    { x: 520, y: 390 },
    { x: 492, y: 418 },
    { x: 459, y: 438 },
    { x: 421, y: 449 },
    { x: 382, y: 449 },
    { x: 344, y: 439 },
    { x: 310, y: 420 },
    { x: 282, y: 392 },
    { x: 262, y: 359 },
    { x: 251, y: 321 },
    { x: 251, y: 282 },
    { x: 261, y: 244 },
    { x: 280, y: 210 },
    { x: 308, y: 182 },
    { x: 341, y: 162 },
    { x: 379, y: 151 },
    { x: 418, y: 151 },
    { x: 456, y: 161 },
    { x: 490, y: 180 },
    { x: 518, y: 208 },
    { x: 538, y: 241 },
    { x: 549, y: 279 },
    { x: 549, y: 318 },
    { x: 539, y: 356 },
    { x: 520, y: 390 },
    { x: 610, y: 326 },
    { x: 597, y: 379 },
    { x: 569, y: 428 },
    { x: 531, y: 467 },
    { x: 483, y: 495 },
    { x: 430, y: 510 },
    { x: 374, y: 510 },
    { x: 321, y: 497 },
    { x: 272, y: 469 },
    { x: 233, y: 431 },
    { x: 205, y: 383 },
    { x: 190, y: 330 },
    { x: 190, y: 274 },
    { x: 203, y: 221 },
    { x: 231, y: 172 },
    { x: 269, y: 133 },
    { x: 317, y: 105 },
    { x: 370, y: 90 },
    { x: 426, y: 90 },
    { x: 479, y: 103 },
    { x: 528, y: 131 },
    { x: 567, y: 169 },
    { x: 595, y: 217 },
    { x: 610, y: 270 },
    { x: 610, y: 326 },
    { x: 597, y: 379 },
    { x: 569, y: 428 },
    { x: 658, y: 332 },
    { x: 641, y: 397 },
    { x: 608, y: 456 },
    { x: 560, y: 505 },
    { x: 502, y: 539 },
    { x: 436, y: 557 },
    { x: 368, y: 558 },
    { x: 303, y: 541 },
    { x: 244, y: 508 },
    { x: 195, y: 460 },
    { x: 161, y: 402 },
    { x: 143, y: 336 },
    { x: 142, y: 268 },
    { x: 159, y: 203 },
    { x: 192, y: 144 },
    { x: 240, y: 95 },
    { x: 298, y: 61 },
    { x: 364, y: 43 },
    { x: 432, y: 42 },
    { x: 497, y: 59 },
    { x: 556, y: 92 },
    { x: 605, y: 140 },
    { x: 639, y: 198 },
    { x: 657, y: 264 },
    { x: 658, y: 332 },
    { x: 641, y: 397 },
    { x: 608, y: 456 },

    { x: 688, y: 335 },
    { x: 669, y: 409 },
    { x: 632, y: 475 },
    { x: 579, y: 529 },
    { x: 513, y: 567 },
    { x: 440, y: 587 },
    { x: 365, y: 588 },
    { x: 291, y: 569 },
    { x: 225, y: 532 },
    { x: 171, y: 479 },
    { x: 133, y: 413 },
    { x: 113, y: 340 },
    { x: 112, y: 265 },
    { x: 131, y: 191 },
    { x: 168, y: 125 },
    { x: 221, y: 71 },
    { x: 287, y: 33 },
    { x: 360, y: 13 },
    { x: 435, y: 12 },
    { x: 509, y: 31 },
    { x: 575, y: 68 },
    { x: 629, y: 121 },
    { x: 667, y: 187 },
    { x: 687, y: 260 },
    { x: 688, y: 335 },
    { x: 669, y: 409 },
    { x: 632, y: 475 },
    

]

function deg2rad(d) {
    r = (d * Math.PI) / 180
    return r
}