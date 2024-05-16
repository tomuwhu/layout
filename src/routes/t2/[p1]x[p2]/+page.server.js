export function load({ params }) {
    const answer = { p1: params.p1 + params.p2, p2: 42 }
    return answer
}