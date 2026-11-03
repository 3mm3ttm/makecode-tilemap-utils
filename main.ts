//% weight="94" color="#20bf6b" icon=""
let tilemaps: Array<tiles.TileMapData>

namespace TileUtils {
    //% Sets an array of levels, and returns the first in the array.
    //% @param tilemapArray The array of tilemaps that your game will use.
    //% block="Set Levels $tilemapArray" weight="1"
    export function SetLevels(tilemapArray: Array<tiles.TileMapData>): tiles.TileMapData {
        tilemaps = tilemapArray
        return tilemaps[0];
    }
    //% Resets all tilemap levels. Does not unload the current tilemap.
    //% block="clear Tilemaps" weight="2"
    export function clearTilemaps(): void {
        tilemaps = undefined
    }
    //% Selects a certain saved level. Throws an error if levels are not already set.
    //% @param lvl The parameter that specifies which level to select. 0 is the first level.
    //% block="select Level $lvl"
    export function selectLevel(lvl: number): tiles.TileMapData {
        return tilemaps[lvl]
    }
}