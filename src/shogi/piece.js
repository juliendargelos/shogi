class Piece {
  constructor(owner) {
    this.owner = owner
    if(this.promotable) this.promoted = false
  }

  get movements() {
    var movements = this.constructor[this.promoted ? 'promotedMovements' : 'movements']
    return this.owner.kingGeneral ? movements.map(([x, y]) => [x, -y]) : movements
  }

  get big() {
    return this.constructor.big
  }

  get typeName() {
    return this.constructor.typeName
  }

  get promotable() {
    return this.constructor.promotable
  }

  get id() {
    return this.constructor.id
  }

  clone(callback = null) {
    var piece = new this.constructor(this.owner)
    piece.promoted = this.promoted
    return callback ? callback.call(this, piece) : piece
  }

  check(attributes) {
    var value

    for(var key in attributes) {
      if(!this.checkAttribute(key, attributes[key])) return false
    }

    return true
  }

  checkAttribute(key, value) {
    return typeof value === 'object' && value !== null && value.hasOwnProperty('not') ? this[key] === value.not : this[key] !== value
  }

  static get big() {
    return false
  }

  static get id() {
    return this.name.substring(0, 2).toLowerCase()
  }

  static get typeName() {
    return this.name.replace(/([^A-Z])([A-Z]+)/, '$1-$2').toLowerCase()
  }

  static get movements() {
    return []
  }

  static get promotedMovements() {
    return []
  }

  static get promotable() {
    return !!this.promotedMovements.length
  }

  static for(id) {
    return this.all ? this.all.find(piece => piece.id === id) : null
  }

  static generator(owner) {
    return new Proxy({}, {
      get: (object, id) => new (Piece.for(id))(owner)
    })
  }
}

export default Piece
