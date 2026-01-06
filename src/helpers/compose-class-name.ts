export default function composeClassName(...classNames: Array<unknown>) {
  return classNames.filter(Boolean).map(String).join(" ");
}
