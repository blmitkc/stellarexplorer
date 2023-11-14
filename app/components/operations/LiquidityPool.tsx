import { PropsWithChildren } from 'react'
import AccountLink from "../shared/AccountLink"
import Asset from "../shared/Asset"

export interface LiquidityPoolProps extends PropsWithChildren {
  id: string;
  pagingToken: string;
  feeBp: number;
  // type: Horizon.LiquidityPoolType;
  totalTrustlines: string;
  totalShares: string;
  // reserves: Horizon.Reserve[];
}
// {
//   links: {
//     self: {
//       href: 'https://horizon.stellar.org/liquidity_pools/fffe949fa72b0957b381229a39a74a11add3a563b1f6a50b05a161ee622d2e81'
//     },
//     transactions: {
//       href: 'https://horizon.stellar.org/liquidity_pools/fffe949fa72b0957b381229a39a74a11add3a563b1f6a50b05a161ee622d2e81/transactions{?cursor,limit,order}',
//       templated: true
//     },
//     operations: {
//       href: 'https://horizon.stellar.org/liquidity_pools/fffe949fa72b0957b381229a39a74a11add3a563b1f6a50b05a161ee622d2e81/operations{?cursor,limit,order}',
//       templated: true
//     }
//   },
//   id: 'fffe949fa72b0957b381229a39a74a11add3a563b1f6a50b05a161ee622d2e81',
//   pagingToken: 'fffe949fa72b0957b381229a39a74a11add3a563b1f6a50b05a161ee622d2e81',
//   feeBp: 30,
//   type: 'constant_product',
//   totalTrustlines: '1',
//   totalShares: '53.8429211',
//   reserves: [
//     {
//       asset: 'AUTO:GBI36OIJT3C2P2WN7RLYQFLIAP6RW5QEUKBYONGNTHQTZQBJNOVLDB2O',
//       amount: '6187.0784186'
//     },
//     {
//       asset: 'VEND:GBZWXTV66FIXOLM7TINV2H4LD2HSDS6ZK3FANGVK6YCAFBGEN52T7E2I',
//       amount: '0.4701031'
//     }
//   ],
//   lastModifiedLedger: 48708267,
//   lastModifiedTime: '2023-10-24T23:07:28Z'
// }

export default function LiquidityPool({
  feeBp,
  totalTrustlines,
  totalShares,
}: LiquidityPoolProps) {
  return (
    <span>
      <FormattedMessage
        id="operation.liquidity-pool"
        values={{
          amount: <FormattedAmount feeBp={feeBp} />,
          asset: <Asset code={assetCode} issuer={assetIssuer} type={assetType} />,
          recipient: <AccountLink account={toMuxed ? toMuxed : to} />,
        }}
        // values={{
        //   amount: <FormattedAmount amount={amount} />,
        //   asset: <Asset code={assetCode} issuer={assetIssuer} type={assetType} />,
        //   recipient: <AccountLink account={toMuxed ? toMuxed : to} />,
        // }}
      />
      {children}
    </span>
  )
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
