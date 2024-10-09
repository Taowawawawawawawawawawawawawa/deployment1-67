export function BMI(weight: number, height: number): string {
  if (weight <= 0) throw new Error("Weight must be greater than 0");
  if (height <= 0) throw new Error("Height must be greater than 0");
  return (weight / (height * height)).toFixed(2);
}

const weight: number = 60;
const height: number = 1.75;
console.log(`Your weight: ${weight} kg.\nYour height: ${height} m.\nYour BMI: ${BMI(weight, height)}`);
