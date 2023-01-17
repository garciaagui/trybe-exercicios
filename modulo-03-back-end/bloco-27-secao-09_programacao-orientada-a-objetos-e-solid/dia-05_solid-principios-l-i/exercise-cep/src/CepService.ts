import FooCepAPI from './FooCepAPI';
import ICepAPI from './ICepAPI';

class CepService {
  constructor(
    private readonly cepApi: ICepAPI = new FooCepAPI()
  ) { }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;