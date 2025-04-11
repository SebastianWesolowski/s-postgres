export function checkEnvVariable(name: string, defaultValue: string): string {
  const value = process.env[name] || defaultValue;

  if (!process.env[name]) {
    console.warn(`⚠️  Variable ${name} is not set!`);
    console.warn(`⚠️  Default value will be used: ${defaultValue}`);
    process.env[name] = defaultValue;
  }

  return value;
}
