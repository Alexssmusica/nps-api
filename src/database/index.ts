import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
    const defaultOption = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOption, {
            name,
            database: process.env.NODE_ENV === 'test' ? './src/database/database.test.sqlite' : defaultOption.database
        })
    );
};
