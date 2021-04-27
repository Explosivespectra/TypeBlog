export const checkLocation = (
  event: React.MouseEvent<HTMLElement>,
  path: string[],
  name: string,
  pos: number
) => {
  if (path.length === pos + 1 && path[pos] === name) event.preventDefault();
};
