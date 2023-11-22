import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { useLoaderData } from '@remix-run/react'

import Card from 'react-bootstrap/Card'
import CardHeader from 'react-bootstrap/CardHeader'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import TransactionTable from '../components/TransactionTable'
import { setTitle } from '../lib/utils'

import type { TransactionProps } from './tx.$txHash'
import Paging from '~/components/shared/Paging'
import { horizonRecordsLoader } from '~/lib/loader-util'

const RECORD_LIMIT = 20

export const loader = horizonRecordsLoader<ReadonlyArray<TransactionProps>>(
  'transactions',
  RECORD_LIMIT,
)

export default function Transactions() {
  const { records, cursor } = useLoaderData<typeof loader>()

  useEffect(() => {
    setTitle('Transactions')
  }, [])

  return (
    <Container>
      <Row>
        <Card>
          <CardHeader>
            <FormattedMessage id="transactions" />
          </CardHeader>
          <Card.Body>
            <Paging baseUrl="/txs" records={records} currentCursor={cursor}>
              <TransactionTable
                records={records}
                showLedger
                showSource
                compact={false}
              />
            </Paging>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}
