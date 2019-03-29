export default function (s: string, re: RegExp) {
    const m = s && s.match(re);
    return m && m.length > 0 ? m[m.length - 1] : null;
}