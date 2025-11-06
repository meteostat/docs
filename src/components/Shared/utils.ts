export const normalizeUnit = (u?: string | null) => (u === null || u === undefined ? '—' : u);

export const joinUnique = (vals: Set<string>) => {
  const arr = Array.from(vals).filter(Boolean);
  if (arr.length === 0) return '—';
  return arr.join(', ');
};

export const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

export const joinAndCap = (vals: Set<string>) => {
  const arr = Array.from(vals).filter(Boolean);
  if (arr.length === 0) return '—';
  return arr.map(capitalize).join(', ');
};
