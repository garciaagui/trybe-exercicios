import Pizza from './mainPizza'
import { CommonFlavors } from './types'

interface CommonPizza extends Pizza {
  flavor: CommonFlavors;
}

export default CommonPizza;