const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    const temperature = callback();
    return console.log(`Current Mars temperature: ${temperature} degree(s) Celsius`);
  }, messageDelay())
}

sendMarsTemperature(getMarsTemperature);
