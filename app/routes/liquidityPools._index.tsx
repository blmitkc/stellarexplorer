import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useLoaderData } from '@remix-run/react'

import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/CardHeader'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { setTitle } from '../lib/utils'

import { horizonRecordsLoader } from '~/lib/loader-util'
import Paging from '~/components/shared/Paging'
import type { LiquidityPoolProps } from '~/components/operations/LiquidityPool'
import LiquidityPoolTable from '~/components/LiquidityPoolTable'

export const loader = horizonRecordsLoader<ReadonlyArray<LiquidityPoolProps>>(`liquidityPools`, 30)

export default function LiquidityPools() {
  const { records, cursor, horizonURL } = useLoaderData<typeof loader>()
  console.log(records[0])

  const { formatMessage } = useIntl()
  useEffect(() => {
    setTitle(formatMessage({ id: 'liquidity-pools' }))
  }, [])

  // return (
  //   <Container>
  //     <Row>
  //       <Card>
  //         <CardHeader>
  //           <FormattedMessage id="liquidity-pools" />
  //         </CardHeader>
  //         <Card.Body>
  //           <Paging
  //             baseUrl='/liquidityPools'
  //             records={records}
  //             currentCursor={cursor}>
  //             <LiquidityPoolTable
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
