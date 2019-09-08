const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class Asset extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }


  // RESTRICTED
  medals(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/medals/`, toonID)
  }
  

}