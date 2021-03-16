// exercism --> flatten array
// Take a nested list and return a single flattened list with all values except nil/null.
// The challenge is to write a function that accepts an arbitrarily-deep nested list-like structure and returns a flattened structure without any nil/null values.
// For Example
// input: [1,[2,3,null,4],[null],5]
// output: [1,2,3,4,5]

// -----reduce method-----
export const flatten = (list) => {
  return list.reduce((acc, curr) => {
    if(Array.isArray(curr)){
      curr = flatten(curr)
    }
    if(curr !== undefined && curr !== null){
      acc = acc.concat(curr);
    }
    return acc;
  }, []);
};

// -----forEach method-----
// export const flatten = (list, output = []) => {
//   list.forEach(item => {
//     if (Array.isArray(item)) {
//       flatten(item, output);
//     } else if (item !== null && item !== undefined) {
//       output.push(item);
//     }
//   });
//   return output;
// };

// -----1st attempt-----
// export const flatten = (list) => {

//   function getArrayDepth(value) {
//     return Array.isArray(value) ? 1 + Math.max(...value.map(getArrayDepth)) : 0;
//   }

//   return getArrayDepth(list) === -Infinity
//     ? []
//     : list
//         .flat(getArrayDepth(list))
//         .filter((x) => x !== null && x !== undefined);
// };
