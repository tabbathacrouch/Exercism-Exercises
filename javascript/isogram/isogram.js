// exercism.io --> isogram

// export const isIsogram = (string) => {
//   if (string.length === 0) {
//     return true;
//   }
//   let lowercase = string.toLowerCase().replace(/-|\s/g,'');
//   let newString = '';
//   for (var i = 0; i < lowercase.length; i++) {
//     if(!newString.includes(lowercase.charAt(i))){
//       newString = newString.concat(lowercase.charAt(i));
//     }
//   }
//   if (newString === lowercase){
//     return true;
//   }
//   return false;
// };

export const isIsogram = (string) => {
  const iso = string
    .toLowerCase()
    .split("")
    .filter((c) => ![" ", "-"].includes(c));

  return new Set(iso).size === iso.length;
};
