import { app } from './app';


const porta = process.env.PORT || 8080;

app.listen(porta, () => console.log('Servidor iniciado!'));
