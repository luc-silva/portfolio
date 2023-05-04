export function formatArrayOfStrings(arr: string[]): string[] {
    return arr.map((string, index) =>
        index !== arr.length - 1 ? `${string}, ` : `${string}`
    );
}
