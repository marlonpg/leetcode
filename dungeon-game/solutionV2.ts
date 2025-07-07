function calculateMinimumHP(dungeon: number[][]): number {
    const rows = dungeon.length;
    const cols = dungeon[0].length;

    // Create a DP table with the same dimensions
    const dp: number[][] = Array.from({ length: rows + 1 }, () =>
        Array(cols + 1).fill(Infinity)
    );

    dp[rows][cols - 1] = 1;
    dp[rows - 1][cols] = 1;

    for (let r = rows - 1; r >= 0; r--) {
        for (let c = cols - 1; c >= 0; c--) {
            const minHealthOnExit = Math.min(dp[r + 1][c], dp[r][c + 1]);
            dp[r][c] = Math.max(1, minHealthOnExit - dungeon[r][c]);
        }
    }

    return dp[0][0];
}