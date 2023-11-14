import { PropsWithChildren } from 'react'
import AccountLink from "../shared/AccountLink"
import { Horizon } from 'stellar-sdk';

export interface LiquidityPoolProps extends PropsWithChildren {
  id: string;
  totalTrustlines: string;
  totalShares: string;
  reserves: Horizon.Reserve[];
  pagingToken: string;
}

const LiquidityPoolDeposit = ({
  sourceAccount,
  reservesDeposited,
  sharesReceived
}: any) => (
  <span>
    <AccountLink account={sourceAccount} /> deposited&nbsp;
    {reservesDeposited.map(({ asset, amount }: any) => {
      let assetStr
      if (asset === 'native') {
        assetStr = 'XLM'
      } else {
        const [code] = asset.split(':')
        assetStr = code // (<Asset code={code} issuer={address} type="unknown" />)
      }
      return `${amount} ${assetStr}`
    }).join(', ')} for&nbsp;
    {sharesReceived}&nbsp;
    shares in liquidity pool
  </span>
)

const LiquidityPoolWithdraw = ({
  sourceAccount,
  reservesReceived,
  shares, // op uses this
  sharesRedeemed // effect uses this
}: any) => (
  <span>
    <AccountLink account={sourceAccount} /> withdrew&nbsp;
    {shares || sharesRedeemed}&nbsp;
    shares in liquidity pool for&nbsp;
    {reservesReceived.map(({ asset, amount }: any) => {
      let assetStr
      if (asset === 'native') {
        assetStr = 'XLM'
      } else {
        const [code] = asset.split(':')
        assetStr = code // (<Asset code={code} issuer={address} type="unknown" />)
      }
      return `${amount} ${assetStr}`
    }).join(', ')}
  </span>
)

export { LiquidityPoolDeposit, LiquidityPoolWithdraw }
