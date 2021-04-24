import { http } from './app';

const porta = process.env.PORT || 8080;

http.listen(porta, () => console.log('Servidor iniciado!'));
