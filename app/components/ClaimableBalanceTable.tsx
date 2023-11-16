import Table from "react-bootstrap/Table"
import { FormattedMessage } from "react-intl"

import Operation from "./operations/Operation"
import type { ClaimableBalanceProps } from "./operations/ClaimableBalances"

interface ClaimableBalanceTableProps {
  compact: boolean
  records: ReadonlyArray<ClaimableBalanceProps>
  horizonURL?: string
}

// export default function ClaimableBalanceTable({
//   compact,
//   records,
//   horizonURL
// }: ClaimableBalanceTableProps) {
//   return (
//     <div>
//       <Table
//         id="payment-table"
//         className="table-striped table-hover table-condensed"
//       >
//         <thead>
//           <tr>
//             <th>
//               <FormattedMessage id="account" />
//             </th>
//             <th>
//               <FormattedMessage id="payment" />
//             </th>
//             {compact === false && (
//               <th>
//                 <FormattedMessage id="transaction" />
//               </th>
//             )}
//             {compact === false && (
//               <th>
//                 <FormattedMessage id="type" />
//               </th>
//             )}
//             <th>
//               <FormattedMessage id="time" />
//             </th>
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((payment) => (
//             <Operation
//               key={payment.id}
//               compact={compact}
//               op={payment}
//               horizonURL={horizonURL}
//             />
//           ))}
//         </tbody>
//       </Table>
//       {/* <div className="text-center" id="csv-export">
//       <ExportToCSVComponent server={server} account={account} />
//     </div> */}
//     </div>
//   )
}
