module.exports = () => {
  const index = Math.floor(Math.random() * 100);

  const isAdmin = index <= 50 ? false : true;

  return isAdmin;
}