import Pizza from './mainPizza'
import { SweetFlavors } from './types'

interface SweetPizza extends Pizza {
  flavor: SweetFlavors;
  slices: 4;
}

export default SweetPizza;