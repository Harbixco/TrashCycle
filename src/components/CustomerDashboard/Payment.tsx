import { Table, TableBody, TableCell, TableRow } from "flowbite-react";
import { PaymentDetails } from "../../DummyData";

export function Payment() {
  return (
    <>
      <div className="flex items-center justify-center bg-white py-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-2xl font-semibold">PAYMENT HISTORY</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableBody className="divide-y">
            <TableRow className="bg-white font-semibold">
              <TableCell className="whitespace-nowrap  text-gray-900 dark:text-white">
                ID
              </TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL ADDRESS</TableCell>
              <TableCell> RECEIPT NUMBER</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>

            {PaymentDetails.map((data, index) => {
              return (
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    key={index}
                  >
                    {data.id}
                  </TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.receiptNum}</TableCell>
                  <TableCell>{data.Status}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
