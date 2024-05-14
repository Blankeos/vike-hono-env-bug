// Environment variables live here for type-safety.

export const config = {
  PORT: (process.env.PORT! ?? 3000) as unknown as number,
  NODE_ENV: process.env.NODE_ENV as "development" | "production",
  DATABASE_URL: process.env.DATABASE_URL! as string,
  BASE_ORIGIN: process.env.BASE_ORIGIN! as string,
};
