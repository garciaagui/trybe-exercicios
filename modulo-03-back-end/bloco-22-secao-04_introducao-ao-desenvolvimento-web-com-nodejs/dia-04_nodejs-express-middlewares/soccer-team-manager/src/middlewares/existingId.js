const existingId = (teamsData) => {
  return (req, res, next) => {
    const isThisIdValid = teamsData.some((team) => team.id === Number(req.params.id))
    if (isThisIdValid) next();
    else res.status(400).send({message: 'Id inválido'});
  }
}

module.exports = existingId;