export const colorCode = (colorArray: string) => {
  const translator: {[key: string]: string}= {
    "black": "0",
    "brown": "1",
    "red": "2",
    "orange": "3",
    "yellow": "4",
    "green": "5",
    "blue": "6",
    "violet": "7",
    "grey": "8",
    "white": "9"
  }
  const color: string = translator[colorArray]
  return +color
}

export const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]
