// config.ts

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY as string;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY as string;

export const ADMIN_ACCESS_TOKEN_SECRET = process.env.ADMIN_ACCESS_TOKEN_SECRET as string;
export const ADMIN_ACCESS_TOKEN_EXPIRY = process.env.ADMIN_ACCESS_TOKEN_EXPIRY as string;
export const ADMIN_REFRESH_TOKEN_SECRET = process.env.ADMIN_REFRESH_TOKEN_SECRET as string;
export const ADMIN_REFRESH_TOKEN_EXPIRY = process.env.ADMIN_REFRESH_TOKEN_EXPIRY as string;

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string;

export const PORT = process.env.PORT as string;

export const DATABASE_URL = process.env.DATABASE_URL as string;
