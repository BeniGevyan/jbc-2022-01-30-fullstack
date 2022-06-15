enum Color {
  White,
  Black,
  Green,
  Red,
  Yellow,
}

function printColorItem(color: Color): void {
  switch (color) {
    case Color.Black:
      document.write('Night');
      break;
    case Color.Green:
      document.write('Grass');
      break;
    case Color.White:
      document.write('Snow');
      break;
    case Color.Red:
      document.write('Blood');
      break;
    case Color.Yellow:
      document.write('Sun');
      break;
  }
}

printColorItem(Color.Black);
