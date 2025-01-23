ode
javascript
Copy
Edit
function sides(literals, ...expressions) {
    const [area, perimeter] = expressions;

    // Calculate the square root term
    const root = Math.sqrt((perimeter ** 2) - (16 * area));

    // Calculate the two side lengths
    const s1 = (perimeter + root) / 4;
    const s2 = (perimeter - root) / 4;

    // Return the sorted array of side lengths
    return [s1, s2].sort((a, b) => a - b);
}