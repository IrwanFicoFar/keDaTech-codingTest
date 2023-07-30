export const bilangGenapNested = (obj: any) => {
  let sum = 0;

  const nestedObject = (obj: any) => {
    for (const key in obj) {
      if (typeof obj[key] === "number") {
        if (obj[key] % 2 === 0) {
          sum += obj[key];
        }
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        nestedObject(obj[key]);
      }
    }
  };

  nestedObject(obj);
  return sum;
};

console.log(
  bilangGenapNested({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  })
);
