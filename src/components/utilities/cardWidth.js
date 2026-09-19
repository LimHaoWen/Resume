// Tailwind's "last class wins" cascade lets customWidth override the w-1/2 default.
export function withCardWidth(customWidth) {
  return `w-1/2 ${customWidth || ''}`;
}
