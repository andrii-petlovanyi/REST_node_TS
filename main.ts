import { App } from "./src/app";

async function bootstrap() {
    const app = new App()
    await app.init()
}

bootstrap()