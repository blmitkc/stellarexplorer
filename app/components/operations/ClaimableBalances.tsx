import { PropsWithChildren } from 'react';
import AccountLink from "../shared/AccountLink"
import Asset from "../shared/Asset"

export interface ClaimableBalanceProps extends PropsWithChildren {
  id: string;
  pagingToken: string;
  asset: string;
  amount: string;
  sponsor: string;
  // claimants:
  // flags:
}

// export default function ClaimableBalance({
//   feeBp,
//   totalTrustlines,
//   totalShares,
// }: LiquidityPoolProps) {
//   return (
//     <span>
//       <FormattedMessage
//         id="operation.liquidity-pool"
//         values={{
//           amount: <FormattedAmount feeBp={feeBp} />,
//           asset: <Asset code={assetCode} issuer={assetIssuer} type={assetType} />,
//           recipient: <AccountLink account={toMuxed ? toMuxed : to} />,
//         }}
//         // values={{
//         //   amount: <FormattedAmount amount={amount} />,
//         //   asset: <Asset code={assetCode} issuer={assetIssuer} type={assetType} />,
//         //   recipient: <AccountLink account={toMuxed ? toMuxed : to} />,
//         // }}
//       />
//       {children}
//     </span>
//   )
// }

const CreateClaimableBalanceOperation = ({ amount, sponsor, asset }: any) => {
  const [assetCode, assetIssuer] = asset.split(':')
  return (
    <span>
      <AccountLink account={sponsor} /> created claimable balance for {amount} <Asset code={assetCode} issuer={assetIssuer} type="unknown" />
    </span>
  )
}

const ClaimClaimableBalanceOperation = ({ claimant }: any) => {
  return (
    <span>
      Claimant <AccountLink account={claimant} />
    </span>
  )
}

export { ClaimClaimableBalanceOperation, CreateClaimableBalanceOperation }