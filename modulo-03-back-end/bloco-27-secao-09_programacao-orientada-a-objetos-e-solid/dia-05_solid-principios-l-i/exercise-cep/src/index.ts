import CepService from './CepService';
// import FooCepAPI from './FooCepAPI'
// import MockCepAPI from './MockCepAPI'

async function main() {
  // const cepSvc = new CepService(new FooCepAPI());
  // const cepSvc = new CepService(new MockCepAPI());
  const cepSvc = new CepService();

  console.log(
    'get address by cep',
    '->',
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address',
    '->',
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();