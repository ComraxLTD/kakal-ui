export function updateArray(options: {
  array: any[];
  value: any;
  itemIndex: number;
  key?;
}) {
  const { array, value, itemIndex, key } = options;
  const index = array.indexOf(value);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    array.push(value);
  }

  return array;
}
export function deleteItem<T>(options: {
  array: unknown[];
  value: any;
}): unknown[] {
  const { array, value } = options;
  const index = array.indexOf(value);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
