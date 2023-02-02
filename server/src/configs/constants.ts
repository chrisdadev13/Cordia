import "dotenv/config";

export const PORT = process.env.PORT;

export const DB_ADMIN = process.env.DB_ADMIN;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;

export const DB_URI = `mongodb+srv://${DB_ADMIN}:${DB_PASSWORD}@cordia.ivpwndf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const TOKEN_KEY = process.env.SECRET_TOKEN;
