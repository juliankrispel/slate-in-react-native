export const debounce = (cb: (...args: any[]) => void, wait = 100) => {
  let h: number;

  return (...args: unknown[]) => {
    clearTimeout(h);
    h = (setTimeout(() => cb(...args), wait) as unknown) as number;
  };
};
