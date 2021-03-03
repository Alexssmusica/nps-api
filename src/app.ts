import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import createConnection from './database';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { AppError } from './errors/AppError';
import { router } from './router';

createConnection();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(router);
app.use(
    (err: Error, request: Request, response: Response, _next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message
            });
        }

        return response.status(500).json({
            status: 'Error',
            message: `Internal server error ${err.message}`
        });
    }
);

app.get('/', function(req: Request, res: Response) {
    
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
    
        <title>NPS - API</title>
      </head>
      <body class="d-flex flex-column justify-content-between">
        <div>
          <article class="p-3 mb-2 text-white text-center">
            <header>
              <h1>NPS API</h1>
              <p>Uma Api para pesquisa de satisfação sobre Produtos e Serviços.</p>
            </header>
          </article>
        </div>
        <div>
          <footer class="text-center">
            <small class="text-white"
              >Copyright © - Todos os direitos reservados</small
            >
          </footer>
        </div>
      </body>
    </html>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    <style>
      body {
        width: 100vw;
        height: 100vh;
      }
      article {
        background-color: #8257e6;
      }
      footer {
        background-color: #bdbdbd;
        padding: 1rem;
      }
    </style>    
  `);
});

export { app };

