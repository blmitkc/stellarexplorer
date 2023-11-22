import { Server } from 'soroban-client'
import networks from './networks'

export const sorobanRpcURIs: Record<string, string> = {
  future: 'https://rpc-futurenet.stellar.org',
  local: 'http://localhost:8000/soroban/rpc',
}

/**
 * Wrap the soroban-client Server.
 */
class SorobanServer extends Server {
  constructor(networkType: string, networkAddress: string) {
    // allowHttp: public/test use HTTPS; local can use HTTP
    super(networkAddress, { allowHttp: networkType === networks.local })
  }
}

export default SorobanServer
