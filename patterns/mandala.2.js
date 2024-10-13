const elements = [
    // inner
    { sX: 475, sY: 343, eX: 459, eY: 384, cp1X: 478, cp1Y: 367, cp2X: 454, cp2Y: 359 },
    { sX: 435, sY: 419, eX: 402, eY: 448, cp1X: 426, cp1Y: 442, cp2X: 409, cp2Y: 424 },
    { sX: 364, sY: 468, eX: 322, eY: 479, cp1X: 345, cp1Y: 484, cp2X: 339, cp2Y: 460 },
    { sX: 278, sY: 479, eX: 236, eY: 468, cp1X: 255, cp1Y: 484, cp2X: 261, cp2Y: 460 },
    { sX: 198, sY: 448, eX: 165, eY: 419, cp1X: 174, cp1Y: 442, cp2X: 191, cp2Y: 424 },
    { sX: 141, sY: 384, eX: 125, eY: 343, cp1X: 122, cp1Y: 367, cp2X: 146, cp2Y: 359 },
    { sX: 120, sY: 300, eX: 125, eY: 257, cp1X: 111, cp1Y: 277, cp2X: 136, cp2Y: 280 },
    { sX: 141, sY: 216, eX: 165, eY: 181, cp1X: 144, cp1Y: 192, cp2X: 164, cp2Y: 206 },
    { sX: 198, sY: 152, eX: 236, eY: 132, cp1X: 212, cp1Y: 132, cp2X: 223, cp2Y: 154 },
    { sX: 278, sY: 121, eX: 322, eY: 121, cp1X: 300, cp1Y: 110, cp2X: 300, cp2Y: 135 },
    { sX: 364, sY: 132, eX: 402, eY: 152, cp1X: 388, cp1Y: 132, cp2X: 377, cp2Y: 154 },
    { sX: 435, sY: 181, eX: 459, eY: 216, cp1X: 456, cp1Y: 192, cp2X: 436, cp2Y: 206 },
    { sX: 475, sY: 257, eX: 480, eY: 300, cp1X: 489, cp1Y: 277, cp2X: 464, cp2Y: 280 },




    { sX: 459, sY: 384, eX: 435, eY: 419, cp1X: 436, cp1Y: 394, cp2X: 456, cp2Y: 408 },
    { sX: 402, sY: 448, eX: 364, eY: 468, cp1X: 377, cp1Y: 446, cp2X: 388, cp2Y: 468 },
    { sX: 322, sY: 479, eX: 278, eY: 479, cp1X: 300, cp1Y: 465, cp2X: 300, cp2Y: 490 },
    { sX: 236, sY: 468, eX: 198, eY: 448, cp1X: 223, cp1Y: 446, cp2X: 212, cp2Y: 468 },
    { sX: 165, sY: 419, eX: 141, eY: 384, cp1X: 164, cp1Y: 394, cp2X: 144, cp2Y: 408 },
    { sX: 125, sY: 343, eX: 120, eY: 300, cp1X: 136, cp1Y: 320, cp2X: 111, cp2Y: 323 },
    { sX: 125, sY: 257, eX: 141, eY: 216, cp1X: 146, cp1Y: 241, cp2X: 122, cp2Y: 233 },
    { sX: 165, sY: 181, eX: 198, eY: 152, cp1X: 191, cp1Y: 176, cp2X: 174, cp2Y: 158 },
    { sX: 236, sY: 132, eX: 278, eY: 121, cp1X: 261, cp1Y: 140, cp2X: 255, cp2Y: 116 },
    { sX: 322, sY: 121, eX: 364, eY: 132, cp1X: 339, cp1Y: 140, cp2X: 345, cp2Y: 116 },
    { sX: 402, sY: 152, eX: 435, eY: 181, cp1X: 409, cp1Y: 176, cp2X: 426, cp2Y: 158 },
    { sX: 459, sY: 216, eX: 475, eY: 257, cp1X: 454, cp1Y: 241, cp2X: 478, cp2Y: 233 },
    { sX: 480, sY: 300, eX: 475, eY: 343, cp1X: 464, cp1Y: 320, cp2X: 489, cp2Y: 323 },





    // outer 

    { sX: 494, sY: 348, eX: 477, eY: 393, cp1X: 496, cp1Y: 374, cp2X: 473, cp2Y: 366 },
    { sX: 450, sY: 433, eX: 414, eY: 465, cp1X: 439, cp1Y: 457, cp2X: 423, cp2Y: 438 },
    { sX: 371, sY: 487, eX: 324, eY: 499, cp1X: 350, cp1Y: 504, cp2X: 344, cp2Y: 480 },
    { sX: 276, sY: 499, eX: 229, eY: 487, cp1X: 250, cp1Y: 504, cp2X: 256, cp2Y: 480 },
    { sX: 186, sY: 465, eX: 150, eY: 433, cp1X: 161, cp1Y: 457, cp2X: 177, cp2Y: 438 },
    { sX: 123, sY: 393, eX: 106, eY: 348, cp1X: 104, cp1Y: 374, cp2X: 127, cp2Y: 366 },
    { sX: 100, sY: 300, eX: 106, eY: 252, cp1X: 92, cp1Y: 275, cp2X: 116, cp2Y: 278 },
    { sX: 123, sY: 207, eX: 150, eY: 167, cp1X: 127, cp1Y: 181, cp2X: 148, cp2Y: 195 },
    { sX: 186, sY: 135, eX: 229, eY: 113, cp1X: 202, cp1Y: 114, cp2X: 214, cp2Y: 136 },
    { sX: 276, sY: 101, eX: 324, eY: 101, cp1X: 300, cp1Y: 90, cp2X: 300, cp2Y: 115 },
    { sX: 371, sY: 113, eX: 414, eY: 135, cp1X: 398, cp1Y: 114, cp2X: 386, cp2Y: 136 },
    { sX: 450, sY: 167, eX: 477, eY: 207, cp1X: 473, cp1Y: 181, cp2X: 452, cp2Y: 195 },
    { sX: 494, sY: 252, eX: 500, eY: 300, cp1X: 508, cp1Y: 275, cp2X: 484, cp2Y: 278 },




    { sX: 477, sY: 393, eX: 450, eY: 433, cp1X: 452, cp1Y: 405, cp2X: 473, cp2Y: 419 },
    { sX: 414, sY: 465, eX: 371, eY: 487, cp1X: 386, cp1Y: 464, cp2X: 398, cp2Y: 486 },
    { sX: 324, sY: 499, eX: 276, eY: 499, cp1X: 300, cp1Y: 485, cp2X: 300, cp2Y: 510 },
    { sX: 229, sY: 487, eX: 186, eY: 465, cp1X: 214, cp1Y: 464, cp2X: 202, cp2Y: 486 },
    { sX: 150, sY: 433, eX: 123, eY: 393, cp1X: 148, cp1Y: 405, cp2X: 127, cp2Y: 419 },
    { sX: 106, sY: 348, eX: 100, eY: 300, cp1X: 116, cp1Y: 322, cp2X: 92, cp2Y: 325 },
    { sX: 106, sY: 252, eX: 123, eY: 207, cp1X: 127, cp1Y: 234, cp2X: 104, cp2Y: 226 },
    { sX: 150, sY: 167, eX: 186, eY: 135, cp1X: 177, cp1Y: 162, cp2X: 161, cp2Y: 143 },
    { sX: 229, sY: 113, eX: 276, eY: 101, cp1X: 256, cp1Y: 120, cp2X: 250, cp2Y: 96 },
    { sX: 324, sY: 101, eX: 371, eY: 113, cp1X: 344, cp1Y: 120, cp2X: 350, cp2Y: 96 },
    { sX: 414, sY: 135, eX: 450, eY: 167, cp1X: 423, cp1Y: 162, cp2X: 439, cp2Y: 143 },
    { sX: 477, sY: 207, eX: 494, eY: 252, cp1X: 473, cp1Y: 234, cp2X: 496, cp2Y: 226 },
    { sX: 500, sY: 300, eX: 494, eY: 348, cp1X: 484, cp1Y: 322, cp2X: 508, cp2Y: 325 },



]