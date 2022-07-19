const delay = (
  callback: () => unknown,
  delayTime: number
): Promise<unknown> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback());
    }, delayTime);
  });
};

export default delay;
