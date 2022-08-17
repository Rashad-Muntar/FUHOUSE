export const genetrateColor = () => {
  let color = '#'
  let colorCombination = '0123456789abcdef'
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16)
    let value = colorCombination[index]

    color += value
  }
  return color
}
