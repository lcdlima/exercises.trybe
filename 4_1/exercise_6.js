// 6- Write a program that is named after a chess piece and returns the movements it makes.

// As a challenge, make the program work both if you receive the name of a piece with uppercase letters and with lowercase letters; 
//without increasing the number of conditionals.

// As a hint, you can search for a function that makes a string have all lowercase letters.

// If the part passed is invalid, the program should return an error message.

let piece; //king, queen, rook, bishop, knight, pawn
piece = 'rook';
piece = piece.toLowerCase();

switch (piece) {
    case 'king':
    console.log("one square in any direction");
    break;

    case 'queen': 
    console.log("any direction and any number of squares");
    break;

    case 'bishop':
    console.log("diagonally and any number of squares");
    break;

    case 'knight':
    console.log("L-shape");
    break;

    case 'rook':
    console.log("foward, backward or sides and any number of squares");
    break;

    case 'pawn':
    console.log("one or two squares foward on first move, one square foward on another moves and one square diagonally to capture another piece");
    break;

    default:
    console.log("This piece doesn't exist!");
}

