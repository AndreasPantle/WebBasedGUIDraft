export function isBitSet(num, bitPosition) {
  return Math.floor(num / (2 ** bitPosition)) % 2 !== 0;
}

export function setBit(num, bitPosition) {
  const mask = 2 ** bitPosition;
  return num + (num % (2 * mask) < mask ? mask : 0);
}

export function clearBit(num, bitPosition) {
  const mask = 2 ** bitPosition;
  return num - (num % (2 * mask) >= mask ? mask : 0);
}

export function toggleBit(num, bitPosition) {
  return isBitSet(num, bitPosition) ? clearBit(num, bitPosition) : setBit(num, bitPosition);
}
