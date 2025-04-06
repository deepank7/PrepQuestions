// Finding Highest Commodity Price at Given Timestamp in JavaScript
// Given a list of timestamps and commodity prices, find out highest commodity price at given timestamp. timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.

// Example usage:
const priceData = [
    {timestamp: 1627845600, price: 45.23},
    {timestamp: 1627845600, price: 45.30},
    {timestamp: 1627845660, price: 45.12},
    {timestamp: 1627845720, price: 45.40},
    {timestamp: 1627845600, price: 45.15},
    {timestamp: 1627845780, price: 45.35}
];

const targetTime = 1627845600;
const result = findHighestPriceAtTimestamp(priceData, targetTime);
console.log(`Highest price at timestamp ${targetTime}:`, result);

function findHighestPriceAtTimestamp(prices, targetTimestamp) {
    let maxPrice = -Infinity;
    let found = false;

    for (const entry of prices) {
        if (entry.timestamp === targetTimestamp) {
            found = true;
            if (entry.price > maxPrice) {
                maxPrice = entry.price;
            }
        }
    }
    return found ? maxPrice : null;
}