export default function composeClassName(...classNames: unknown[]) {
  return classNames.filter(Boolean).map(String).join(' ');
}