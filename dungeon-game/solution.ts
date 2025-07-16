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

