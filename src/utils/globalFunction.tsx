export function truncateText(text: string) {
  const maxLength = 30;
  if (text.length > maxLength) {
    const truncatedPart = text.length - maxLength;
    return "..." + text.substring(truncatedPart, text.length);
  }
  return text;
}
