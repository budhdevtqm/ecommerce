export const getDate = (stamp: number) => new Date(stamp).toDateString();
export const getTime = (stamp: number) => new Date(stamp).toLocaleTimeString();

export const adjustProductName = (name: string) => {
  if (name.length < 20) return name;
  return name.slice(0, 19);
};
