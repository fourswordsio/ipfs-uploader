import IPFS from 'ipfs-mini'

export function initIPFS(payload) {
  const ipfs = new IPFS({
    host: 'pin.poba.app',
    port: 5001,
    protocol: 'https'
  })

  return {
    type: 'INIT_IPFS',
    payload: ipfs
  }
}
