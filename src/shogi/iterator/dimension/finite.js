import Dimension from '../dimension.js'

class Finite extends Dimension {
  get value() {
    return this.position + this.delta
  }

  get valid() {
    return (this.iterator.infinite || this.offset === 1) && super.valid
  }
}

export default Finite
