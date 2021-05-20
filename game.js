/* 
. -> is an empty space
# -> wall
@ -> starting point
o -> coin
= -> block of lava
+ -> lava
*/

let simpleLevelPlan = `
    ......................
    ..#................#..
    ..#..............=.#..
    ..#.........o.o....#..
    ..#.@......#####...#..
    ..#####............#..
    ......#++++++++++++#..
    ......##############..
    ......................
`;

//This class will store a level object

class Level {
    constructor(plan) {
        let rows = plan.trim().split("\n").map(l => [...l]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.starActors = []; //actores will be the moving elements

        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if(typeof type == "string") return type;
                this.startActors.push(
                    type.create(new Vec(x, y), ch)
                );
                return "empty";
            })
        })
    }
}

//This class will track the state of the running game

class State {
    
}