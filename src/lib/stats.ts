export function calculateWPM(
  correctChars: number,
  timeInSeconds: number
): number {
  if (timeInSeconds === 0) return 0;
  const wordsTyped = correctChars / 5;
  return Math.round(wordsTyped / (timeInSeconds / 60));
}

export function calculateAccuracy(
  correctChars: number,
  incorrectChars: number
): number {
  const totalChars = correctChars + incorrectChars;
  if (totalChars === 0) return 100;
  return Math.round((correctChars / totalChars) * 100);
}
