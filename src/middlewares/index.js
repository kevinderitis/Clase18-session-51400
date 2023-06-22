export const auth = (req, res, next) => {
    if(req.session.admin){
        next()
    }else{
        res.send('No estas autorizado')
    }
}

export const validateName = (req, res, next) => {
    if(req.session.name == 'Kevin'){
        next()
    }else{
        res.send('No sos kevin')
    }
}