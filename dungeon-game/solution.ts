/**
 * NOTE: This implementation uses a depth-first search (DFS) approach that explores all possible paths
 * from the top-left to the bottom-right of the dungeon. For each path, it records the minimum health
 * required along that path. While this works for small grids, it is extremely inefficient for large grids
 * (such as 20x20 or larger) because the number of possible paths grows exponentially.
 *
 * For example, a 1000x1000 grid would have more possible paths than can be represented in memory,
 * causing the program to run out of memory or take an impractical amount of time to finish.
 * 
 * For large grids, a dynamic programming (DP) approach is recommended, as it efficiently computes the
 * minimum initial health required without exploring every possible path.
 */
export function calculateMinimumHP(dungeon: number[][]): number {
    const rows = dungeon.length;
    const cols = dungeon[0].length;
    const arrayMinValue: number[] = [];

    // Depth-first search to explore all paths
    function dfs(r: number, c: number, currentSum: number, maxHealthNeeded: number): void {
        // Out of bounds
        if (r >= rows || c >= cols) {
            return;
        }
        
        currentSum += dungeon[r][c];

        if(maxHealthNeeded > currentSum) {
            maxHealthNeeded = currentSum;
        }
        // Reached bottom-right corner
        if (r === rows - 1 && c === cols - 1) {
            arrayMinValue.push(maxHealthNeeded);
            return;
        }

        // Move right
        dfs(r, c + 1, currentSum, maxHealthNeeded);

        // Move down
        dfs(r + 1, c, currentSum, maxHealthNeeded);
    }

    dfs(0, 0, 0, 0);
    let result = Math.max(...arrayMinValue);
    if(result >= 0) {
        return 1;
    } else {
        return (result * -1) + 1
    }
}

