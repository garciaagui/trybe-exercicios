const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const rectangleArea = (width, height) => width * height;

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});
