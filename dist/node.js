export function NodesToString(nodes) {
    let s = "";
    nodes.forEach((n) => {
        s += n.toString();
    });
    return s;
}
export function NodesToHtml(nodes) {
    let s = "";
    nodes.forEach((n) => {
        s += n.toHtml();
    });
    return s;
}
