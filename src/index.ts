export function BMI(weight: number, height: number): string {
  if (weight <= 0) throw new Error("Weight must be greater than 0");
  if (height <= 0) throw new Error("Height must be greater than 0");
  if (height >= 100) height/=100;
  return `Your weight: ${weight} kg.\nYour height: ${height} m.\nYour BMI: `+(weight / (height * height)).toFixed(2);
}