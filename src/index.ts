import { initMongoConnection } from './db/initMongoConnections.ts';
import { startServer } from './server.ts';

async function bootstrap() {
    await initMongoConnection();
    startServer();
}

bootstrap();
