export function checkEnvVariable(name: string, defaultValue: string): string {
  const value = process.env[name] || defaultValue;

  if (!process.env[name]) {
    console.warn(`⚠️  Zmienna ${name} nie jest ustawiona!`);
    console.warn(`⚠️  Zostanie użyta wartość domyślna: ${defaultValue}`);
    process.env[name] = defaultValue;
  }

  return value;
}
