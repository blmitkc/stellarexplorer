import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useLoaderData } from '@remix-run/react'

import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/CardHeader'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import PaymentTable from '../components/PaymentTable'
import { setTitle } from '../lib/utils'

import type { PaymentProps } from '~/components/operations/Payment'
import { horizonRecordsLoader } from '~/lib/loader-util'
import Paging from '~/components/shared/Paging'
import { ClaimableBalanceProps } from '~/components/operations/ClaimableBalances'

export const loader = horizonRecordsLoader<ReadonlyArray<ClaimableBalanceProps>>(`claimableBalances`, 30)

export default function ClaimableBalances() {
  const { records, cursor, horizonURL } = useLoaderData<typeof loader>()
  console.log(JSON.stringify(records[0]))
  // {
  //   "links": {
  //     "self": {
  //       "href": "https://horizon.stellar.org/claimable_balances/00000000eecfd46928fda6520914404c0b686225467ed0544d2bcf59e0b551cc6aabd979"
  //     },
  //     "transactions": {
  //       "href": "https://horizon.stellar.org/claimable_balances/00000000eecfd46928fda6520914404c0b686225467ed0544d2bcf59e0b551cc6aabd979/transactions{?cursor,limit,order}",
  //       "templated": true
  //     },
  //     "operations": {
  //       "href": "https://horizon.stellar.org/claimable_balances/00000000eecfd46928fda6520914404c0b686225467ed0544d2bcf59e0b551cc6aabd979/operations{?cursor,limit,order}",
  //       "templated": true
  //     }
  //   },
  //   "id": "00000000eecfd46928fda6520914404c0b686225467ed0544d2bcf59e0b551cc6aabd979",
  //   "asset": "GOLDBRIDGE13:GDEUQ2MX3YXMITFOTC3CO3GW5V3XE3IVG7JKLZZAOZ7WFYIN256INDUS",
  //   "amount": "1000000.0000000",
  //   "sponsor": "GB5YEYTFL2VKQTY34XUTYAS24BGNHHEUEGNLPMQZNJULGCZ2C5UIBMLC",
  //   "lastModifiedLedger": 49039264,
  //   "lastModifiedTime": "2023-11-16T05:16:54Z",
  //   "claimants": [
  //     {
  //       "destination": "GB5YEYTFL2VKQTY34XUTYAS24BGNHHEUEGNLPMQZNJULGCZ2C5UIBMLC",
  //       "predicate": {
  //         "not": {
  //           "abs_before": "2023-11-17T05:16:52Z",
  //           "abs_before_epoch": "1700198212"
  //         }
  //       }
  //     },
  //     {
  //       "destination": "GCOKWIMZFQA6ZUD2DDTO4YQ6ODANZWEQZQMBCLCHW5UXQPIPRZFPFYAT",
  //       "predicate": {
  //         "unconditional": true
  //       }
  //     }
  //   ],
  //   "flags": {
  //     "clawback_enabled": false
  //   },
  //   "pagingToken": "49039264-00000000eecfd46928fda6520914404c0b686225467ed0544d2bcf59e0b551cc6aabd979"
  // }

  const { formatMessage } = useIntl()
  useEffect(() => {
    setTitle(formatMessage({ id: 'claimable-balances' }))
  }, [])

  // return (
  //   <Container>
  //     <Row>
  //       <Card>
  //         <CardHeader>
  //           <FormattedMessage id="payments" />
  //         </CardHeader>
  //         <Card.Body>
  //           <Paging
  //             baseUrl='/payments'
  //             records={records}
  //             currentCursor={cursor}>
  //             <PaymentTable
  //               records={records}
  //               // showPayment
  //               // showSource
  //               compact={false}
  //               horizonURL={horizonURL}
  //             // limit={20}
  //             />
  //           </Paging>
  //         </Card.Body>
  //       </Card>
  //     </Row>
  //   </Container>
  // )
}
