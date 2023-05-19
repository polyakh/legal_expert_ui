// lib/translations.ts

import fs from 'fs';
import path from 'path';

export function loadLocaleData(locale: string = 'en'): Record<string, unknown> {
  const filepath = path.join(process.cwd(), 'public', 'locales', `${locale}.json`)
  let messages: Record<string, unknown> = {};

  try {
    const fileData = fs.readFileSync(filepath, 'utf8');
    messages = JSON.parse(fileData);
  } catch (error) {
    console.error(`Error loading locale data for ${locale}: `, error);
  }

  return messages;
}
