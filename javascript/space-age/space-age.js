// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const age = (input1, input2) => {
  const earthDayinSeconds = 31557600;
  switch (input1) {
    case "earth":
      return Number((input2 / earthDayinSeconds).toFixed(2));
    case "mercury":
      return Number((input2 / (earthDayinSeconds * 0.2408467)).toFixed(2));
    case "venus":
      return Number((input2 / (earthDayinSeconds * 0.61519726)).toFixed(2));
    case "mars":
      return Number((input2 / (earthDayinSeconds * 1.8808158)).toFixed(2));
    case "jupiter":
      return Number((input2 / (earthDayinSeconds * 11.862615)).toFixed(2));
    case "saturn":
      return Number((input2 / (earthDayinSeconds * 29.447498)).toFixed(2));
    case "uranus":
      return Number((input2 / (earthDayinSeconds * 84.016846)).toFixed(2));
    case "neptune":
      return Number((input2 / (earthDayinSeconds * 164.79132)).toFixed(2));
  }
};
// *** better method ***
// export const age = (planet, ageInSeconds) => {
//   const earthDayinSeconds = 31557600;

//   const orbitalPeriods = {
//     earth: earthDayinSeconds,
//     mercury: earthDayinSeconds * 0.2408467,
//     venus: earthDayinSeconds * 0.61519726,
//     mars: earthDayinSeconds * 1.8808158,
//     jupiter: earthDayinSeconds * 11.862615,
//     saturn: earthDayinSeconds * 29.447498,
//     uranus: earthDayinSeconds * 84.016846,
//     neptune: earthDayinSeconds * 164.79132,
//   };

//   return Number((ageInSeconds / orbitalPeriods[planet]).toFixed(2));
// };

// **this method will work, but will it be more lengthy**
// if (input1 === 'earth'){
//   let earthAge = input2 / 31557600;
//   return Number(earthAge.toFixed(2));
// }
// else if (input1 === 'mercury'){
//   let mercuryAge = input2 / (0.2408467 * 31557600);
//   return Number(mercuryAge.toFixed(2));
// } ....
