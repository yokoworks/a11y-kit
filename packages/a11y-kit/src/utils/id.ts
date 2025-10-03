let uid = 0;
export function useAutoId(prefix = 'field'): string {
  const id = `${prefix}-${++uid}`;
  return id;
}
