export function calculateMinimumHP(dungeon: number[][]): number {
    const rows = dungeon.length;
    const cols = dungeon[0].length;

    // Memoization table
    const memo: number[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(undefined)
    );

    function dp(r: number, c: number): number {
        // Out of bounds
        if (r >= rows || c >= cols) return Infinity;

        // Base case: bottom-right cell
        if (r === rows - 1 && c === cols - 1) {
            return Math.max(1, 1 - dungeon[r][c]);
        }

        // Return memoized value
        if (memo[r][c] !== undefined) return memo[r][c];

        const minHealthNeeded = Math.min(dp(r + 1, c), dp(r, c + 1));
        const need = Math.max(1, minHealthNeeded - dungeon[r][c]);

        memo[r][c] = need;
        return need;
    }

    return dp(0, 0);
}