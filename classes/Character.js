const Core = require('../libs/Core')

const basePath = 'characters'

module.exports = class Character extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  one(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/`)
  }
  corpHistory(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/corporationhistory/`)
  }
  // TODO	make post
  xcharacterzz(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/`)
  }

  // RESTRICTED
  medals(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/medals/`, toonID)
  }
  clones(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/clones/`, toonID)
  }
  contracts(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/contracts/`, toonID)
  }
  implants(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/implants/`, toonID)
  }
  // TODO ?
  lp(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/loyalty/points/`, toonID)
  }
  opportunities(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/opportunities/`, toonID)
  }
  planets(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/planets/`, toonID)
  }
  seach(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/search/`, toonID)
  }
}