import fs from 'fs';
import path from 'path';

export function getPersonalWorkImages(): string[] {
  const dir = path.join(process.cwd(), 'public', 'assets', 'personal-work');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f));

  // Sort naturally (numeric parts in filenames) so authors can control order by prefixing numbers
  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  return files.map((f) => `/assets/personal-work/${f}`);
}
