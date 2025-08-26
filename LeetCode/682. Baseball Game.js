/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function(operations) {
    const st = [];
    for (const op of operations) {
        switch (op) {
            case "+":
                st.push(st[st.length - 2] + st[st.length - 1]);
                break;
            case "D":
                st.push(st[st.length - 1] * 2);
                break;
            case "C":
                st.pop();
                break;
            default:
                st.push(parseInt(op));
        }
    }
    return st.reduce((acc, curr) => acc + curr, 0);
};

