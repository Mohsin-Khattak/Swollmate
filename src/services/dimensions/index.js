import {height, totalSize, width} from 'react-native-dimension';

const xdWidth = 375;
const xdHeight = 812;

export const wp = w => {
  // console.log();
  return width((w * 100) / xdWidth);
};
export const hp = h => {
  return height((h * 100) / xdHeight);
};
export const fs = f => {
  return totalSize((f * 100) / (xdHeight * xdWidth));
};
