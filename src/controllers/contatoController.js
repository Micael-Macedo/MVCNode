exports.paginaInicial = (req, res) =>{
    res.send('<form action="/" method="post"><button type="submit">Enviar</button></form>');
}

exports.trataPost = (req, res) =>{
    res.send('Rota post')
};
