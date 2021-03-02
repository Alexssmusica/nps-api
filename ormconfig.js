const testConfig = {
    type: "sqlite",
    database: "./src/database/database.sqlite",
    migrations: ["./src/database/migrations/**.ts"],
    entities: ["./src/models/**.ts"],
    logging: false,
    cli: {
        migrationsDir: "./src/database/migrations",
    },
};

const srcConfig = {
    name: "default",
    type: "postgres",
    host: String(process.env.DB_HOST),
    port: process.env.DB_PORT,
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_DATABASE),
    entities: ["./src/models/**.ts"],
    migrations: ["./src/database/migrations/**.ts"],
    cli: {
        migrationsDir: "./src/database/migrations",
    },
    logging:
        process.env.DB_LOGGING && process.env.DB_LOGGING === "true" ? true : false,
    cache: false,
};

const distConfig = {
    name: "default",
    type: "postgres",
    host: String(process.env.DB_HOST),
    port: process.env.DB_PORT,
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_DATABASE),
    entities: ["./dist/models/**.js"],
    migrations: ["./dist/database/migrations/**.js"],
    cli: {
        migrationsDir: "./dist/database/migrations",
    },
    logging:
        process.env.DB_LOGGING && process.env.DB_LOGGING === "true" ? true : false,
    cache: false,
};

if (process.env.NODE_ENV === "test") {
    module.exports = testConfig;
} else {
    if (process.env.TS_NODE && process.env.TS_NODE === "true") {
        module.exports = srcConfig;
    } else {
        module.exports = distConfig;
    }
};
