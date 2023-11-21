const validateBody = (req, res, next) => {
    const { body } = req;
   
    if (body.title === undefined || body.descricao === undefined || body.date === undefined) {
        return res.status(400).json({ message: 'The fields is required' });
    }
    if (body.title === '' || body.descricao === '' || body.date === '') {
        return res.status(400).json({ message: 'The fields cannot be empty' });
    }
    next();
};

module.exports = {
    validateBody
}