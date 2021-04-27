export const checkLocation = (
  event: React.MouseEvent<HTMLElement>,
  path: string[],
  name: string,
  pos: number
) => {
  if (path.length > pos && path[pos] === name) event.preventDefault();
};
