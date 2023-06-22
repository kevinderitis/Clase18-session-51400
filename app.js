import express from 'express';
import session from 'express-session';
import sessionRouter from './src/routes/session.js';
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'esteesmmisecreto',
    saveUninitialized: true,
    resave: true
}));

app.use('/session', sessionRouter)


const server = app.listen(8080, () => console.log('Server running'))
server.on('error', error => console.log(error))