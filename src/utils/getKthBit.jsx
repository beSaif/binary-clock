const printKthBit = (n, k) => {
  return (n & (1 << (k - 1))) >> (k - 1);
};

export default printKthBit;
