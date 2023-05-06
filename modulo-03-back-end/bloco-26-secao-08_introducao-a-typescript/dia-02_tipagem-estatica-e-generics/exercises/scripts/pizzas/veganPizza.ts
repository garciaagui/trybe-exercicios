import Pizza from './mainPizza'
import { VeganFlavors } from './types'

interface VeganPizza extends Pizza {
  flavor: VeganFlavors;
}

export default VeganPizza;