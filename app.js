const currentuser = ["user", "editor"];

const featuredAccesssRole = ["admin", "manager"];

// const user = currentuser.some((role) => console.log(role));

// array from
// const arr = Array.from({ length: 5 }).fill("0");
// const arr = Array.from([1, 2, 3], (val) => val * 2);

const arr = [22, 33, 55, [1, 2, 3], [4, 3, 4, 5], [100, 200]];

const result = arr.flat(Infinity);

console.log(result);
