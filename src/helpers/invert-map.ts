export default function invertMap<T1, T2>(map: Map<T1, T2>): Map<T2, T1> {
  const invertedMap = new Map<T2, T1>();
  map.forEach((value, key) => invertedMap.set(value, key));
  return invertedMap;
}
