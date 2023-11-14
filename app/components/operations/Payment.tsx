import React, { PropsWithChildren } from 'react'
import { FormattedMessage } from 'react-intl'
import Asset from '../shared/Asset'
import AccountLink from '../shared/AccountLink'
import FormattedAmount from '../shared/FormattedAmount'

export interface PaymentProps extends PropsWithChildren {
  id: string
  amount: string
  assetCode: string
  assetIssuer: string
  assetType: string
  to: string
  toMuxed: string
  sourceAccount: string
  time: string
  pagingToken: string
  // The following is not defined although they exist in the response.
  // time
  // links
  // type ('payment')
  // typeI (1)
  // createdAt
  // transactionHash
  // from
}
// {
//   time: '2023-11-13T23:35:23Z',
//   links: {
//     self: {
//       href: 'https://horizon.stellar.org/operations/210478961150320684'
//     },
//     transaction: {
//       href: 'https://horizon.stellar.org/transactions/ca6b657fb71f881abdad8e3db05d12037b46893ecec1d604079919bb58f8e1db'
//     },
//     effects: {
//       href: 'https://horizon.stellar.org/operations/210478961150320684/effects'
//     },
//     succeeds: {
//       href: 'https://horizon.stellar.org/effects?order=desc&cursor=210478961150320684'
//     },
//     precedes: {
//       href: 'https://horizon.stellar.org/effects?order=asc&cursor=210478961150320684'
//     }
//   },
//   id: '210478961150320684',
//   pagingToken: '210478961150320684',
//   transactionSuccessful: true,
//   sourceAccount: 'GBN32NH6TMWE4ZD4G245CF3UVOQRXD4FK3FDCLZ4DE5642HWFKSLLRMB',
//   type: 'payment',
//   typeI: 1,
//   createdAt: '2023-11-13T23:35:23Z',
//   transactionHash: 'ca6b657fb71f881abdad8e3db05d12037b46893ecec1d604079919bb58f8e1db',
//   assetType: 'credit_alphanum12',
//   assetCode: 'APSUSDM',
//   assetIssuer: 'GB7OUO5NY5WQKXJJ7PFFZEJOKN4BA7IOEN3Z6SWAY26LGTREJJYZH2ZT',
//   from: 'GBN32NH6TMWE4ZD4G245CF3UVOQRXD4FK3FDCLZ4DE5642HWFKSLLRMB',
//   to: 'GC7CBXCT6DA2PYB57P5DV7WINQIQG2UWOUHCHSFUDAMYN4LURTYSZDW4',
//   amount: '0.2300000'
// }


export default function Payment({
  amount,
  assetCode,
  assetIssuer,
  assetType,
  children,
  to,
  toMuxed,
}: PaymentProps) {
  return (
    <span>
      <FormattedMessage
        id="operation.payment"
        values={{
          amount: <FormattedAmount amount={amount} />,
          asset: <Asset code={assetCode} issuer={assetIssuer} type={assetType} />,
          recipient: <AccountLink account={toMuxed ? toMuxed : to} />,
        }}
      />
      {children}
    </span>
  )
}