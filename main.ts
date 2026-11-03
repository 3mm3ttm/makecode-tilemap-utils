//% weight="7" color="#20BF6B" icon=""
let tilemaps

namespace TileUtils {
    //% Sets an array of levels, and returns the first in the array.
    //% @param tilemapArray The array of tilemaps that your game will use.
    //% block="Set Levels $param" weight="100"
    export function SetLevels(tilemapArray: Array<tiles.TileMapData>): tiles.TileMapData {
        tilemaps = tilemapArray
        return tilemaps[0];
    }
    //% Resets all tilemap levels. Does not unload the current tilemap.
    //% block="clear Tilemaps" weight="99"
    export function clearTilemaps(): void {
        tilemaps = undefined
    }

}