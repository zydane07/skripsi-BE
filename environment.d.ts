declare namespace NodeJS {
  export interface ProcessEnv {
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_SCHEMA: string;
    DATABASE_URL: string;
    secret: string;
  }
}
