// exercism --> space age
// Given an age in seconds, calculate how old someone would be on:
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.

// -----3rd attempt-----
export const age = (planet, ageInSeconds) => {
  const earthDayinSeconds = 31557600;
  const orbitalPeriods = {
    earth: earthDayinSeconds,
    mercury: earthDayinSeconds * 0.2408467,
    venus: earthDayinSeconds * 0.61519726,
    mars: earthDayinSeconds * 1.8808158,
    jupiter: earthDayinSeconds * 11.862615,
    saturn: earthDayinSeconds * 29.447498,
    uranus: earthDayinSeconds * 84.016846,
    neptune: earthDayinSeconds * 164.79132,
  };
  return Number((ageInSeconds / orbitalPeriods[planet]).toFixed(2));
};

// -----1st attempt----- (abandoned due to length)
// if (input1 === 'earth'){
//   let earthAge = input2 / 31557600;
//   return Number(earthAge.toFixed(2));
// }
// else if (input1 === 'mercury'){
//   let mercuryAge = input2 / (0.2408467 * 31557600);
//   return Number(mercuryAge.toFixed(2));
// } ....


// -----2nd attempt----- (uses switch statement)
// export const age = (input1, input2) => {
//   const earthDayinSeconds = 31557600;
//   switch (input1) {
//     case "earth":
//       return Number((input2 / earthDayinSeconds).toFixed(2));
//     case "mercury":
//       return Number((input2 / (earthDayinSeconds * 0.2408467)).toFixed(2));
//     case "venus":
//       return Number((input2 / (earthDayinSeconds * 0.61519726)).toFixed(2));
//     case "mars":
//       return Number((input2 / (earthDayinSeconds * 1.8808158)).toFixed(2));
//     case "jupiter":
//       return Number((input2 / (earthDayinSeconds * 11.862615)).toFixed(2));
//     case "saturn":
//       return Number((input2 / (earthDayinSeconds * 29.447498)).toFixed(2));
//     case "uranus":
//       return Number((input2 / (earthDayinSeconds * 84.016846)).toFixed(2));
//     case "neptune":
//       return Number((input2 / (earthDayinSeconds * 164.79132)).toFixed(2));
//   }
// };