
const snakes = [
    [98 , 55],
    [86 , 43],
    [64, 24],
    [34, 2],
    [12, 8],
    [91, 74]
]

const ladders = [
    [7, 37],
    [28, 51],
    [21, 62],
    [44, 88],
    [66, 99],
    [27, 43]
]

const present = [];

for(let i=0;i<100;i++) present[i] = -1;

for(let i=0;i<6;i++) present[snakes[i][0]] = snakes[i][1];
for(let i=0;i<6;i++) present[ladders[i][0]] = ladders[i][1];

const SnakesAndLadders = {
    snakes,
    ladders,
    present
}

export default SnakesAndLadders
