import { Router } from 'express';
import { auth, validateName } from '../middlewares/index.js';
const sessionRouter = Router();

sessionRouter.get('/login', (req, res) => {
    if(req.session.counter){
        req.session.counter++;
        res.send(`${req.session.name} vistaste el sitio ${req.session.counter} veces.`)
    }else{
        let nombre = req.query.nombre ? req.query.nombre : '';
        req.session.counter = 1;
        req.session.name = nombre;
        res.send(`Bienvenido ${req.session.name} al sitio.`)
    }
})

sessionRouter.get('/loginAdmin', (req, res) => {
    if(req.session.counter){
        req.session.counter++;
        res.send(`${req.session.name} vistaste el sitio ${req.session.counter} veces.`)
    }else{
        let nombre = req.query.nombre ? req.query.nombre : '';
        req.session.counter = 1;
        req.session.name = nombre;
        req.session.admin = true;
        res.send(`Bienvenido ${req.session.name} al sitio.`)
    }
})

sessionRouter.get('/privada', auth, (req, res) => {
    res.send('Esto es privado')
})

sessionRouter.get('/kevin', validateName, (req, res) => {
    res.send('Esto es privado para kevin')
})

sessionRouter.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err) return res.send('Logout ok');
        res.send('Error al desloguear')
    })
})

export default sessionRouter;