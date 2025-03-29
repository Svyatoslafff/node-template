import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar<T>(name: string, defaultValue?: T): string | T {
    const value: string | undefined = process.env[name];

    if (value) return value;

    if (defaultValue) return defaultValue;

    throw new Error(`Missing: procces.enc[${name}]`);
}
