import Table from "react-bootstrap/Table"
import { FormattedMessage } from "react-intl"

import Operation from "./operations/Operation"
import type { LiquidityPoolProps } from './operations/LiquidityPool'

interface LiquidityPoolTableProps {
  compact: boolean
  records: ReadonlyArray<LiquidityPoolProps>
  horizonURL?: string
}

export default function LiquidityPoolTable({
  compact,
  records,
  horizonURL
}: LiquidityPoolTableProps) {
  return (
    <div>
      <Table
        id="liquidity-pool-table"
        className="table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            <th>
              <FormattedMessage id="account" />
            </th>
            <th>
              <FormattedMessage id="liquidity-pool" />
            </th>
            {compact === false && (
              <th>
                <FormattedMessage id="transaction" />
              </th>
            )}
            {compact === false && (
              <th>
                <FormattedMessage id="type" />
              </th>
            )}
            <th>
              <FormattedMessage id="time" />
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {records.map((liquidity_pool) => (
            <Operation
              key={liquidity_pool.id}
              compact={compact}
              op={liquidity_pool}
              horizonURL={horizonURL}
            />
          ))}
        </tbody>
      </Table>
      {/* <div className="text-center" id="csv-export">
      <ExportToCSVComponent server={server} account={account} />
    </div> */}
    </div>
  )
}
