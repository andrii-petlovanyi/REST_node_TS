import express, { Express } from 'express';
import { Server } from 'node:http'

export class App {
  app: Express;
  port: number;
  server: Server;


  constructor() {
    this.app = express()
    this.port = 3002
  }

  useRoutes() {
    this.app.use('/users', (req, res) => {
      res.send('hello')
    })
  }

  public async init() {
    this.useRoutes()
    this.server = this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`)
    })
  }
}
