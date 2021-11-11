// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140014000103030303030200000000000000000000000000040a0a0a0a0a0800000000000000000000000000040a0a0a0a0a0803030303030200000000000000040a0a0a0a0a090a0a0a0a0a0800000000000000040a0a0a0a0a08060606060a0800000000000000040a0a0a0a0a08000000040a080000000000000005060606060607000000040a080303030302000000000000000000000000040a0a0a0a0a0a080000000000000000000000000506060606060a080000000000000000000000000000000000040a080000000000000000000000000000000000040a080000000000000000000000000000000000040a080000000000000000000000000000000000040a080000000000000000000000000000000000040a080000000000000000000001030303030303040b0803020000000000000000040a0a0a0a0a0a0a0a0a0a080000000000000000040a0a0a0a0a0a0a0a0a0a080000000000000000040c0a0a0a0a0a0a0a0a0a080000000000000000040a0a0a0a0a0a0a0a0a0a080000000000000000050606060606060606060607`, img`
2222222.............
2.....2.............
2.....2222222.......
2...........2.......
2.....22222.2.......
2.....2...2.2.......
2222222...2.222222..
..........2......2..
..........222222.2..
...............2.2..
...............2.2..
...............2.2..
...............2.2..
...............2.2..
........22222222.222
........2..........2
........2..........2
........2..........2
........2..........2
........222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,myTiles.tile1,sprites.dungeon.darkGroundCenter,myTiles.tile2,sprites.dungeon.doorClosedNorth], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
