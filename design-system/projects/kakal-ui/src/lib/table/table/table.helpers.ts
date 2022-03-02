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
