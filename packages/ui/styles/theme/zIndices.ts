export const zIndexOrder = [
  'base',
  'banner',
  'modal',
  'tooltip',
  'cardCountdown',
] as const;

type ZIndexValues = typeof zIndexOrder[number];
export type ZIndexRecord = Record<ZIndexValues, number>;

const zIndices = zIndexOrder.reduce(
  (acc: ZIndexRecord, current: ZIndexValues, index: number) => {
    acc[current] = index;
    return acc;
  },
  {} as ZIndexRecord
);

export default zIndices;
