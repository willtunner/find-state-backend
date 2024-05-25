const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const SHIFT = 3;

export function encryptName(name: string): string {
  return name.split('').map(char => {
    const index = CHAR_SET.indexOf(char);
    if (index === -1) return char;
    return CHAR_SET[(index + SHIFT) % CHAR_SET.length];
  }).join('');
}

export function decryptName(encryptedName: string): string {
  return encryptedName.split('').map(char => {
    const index = CHAR_SET.indexOf(char);
    if (index === -1) return char;
    return CHAR_SET[(index - SHIFT + CHAR_SET.length) % CHAR_SET.length];
  }).join('');
}
