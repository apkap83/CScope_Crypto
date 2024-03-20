import Image from "next/image";
import Link from "next/link";
import { fetchDetailsForCoin } from "@/app/lib/data";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default async function Page({ params }) {
  const resp = await fetchDetailsForCoin(params.id);

  return (
    <div
      style={{
        height: "800px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        columnGap: "1.5rem",
      }}
      className="p-4"
    >
      <div
        className="flex items-start"
        style={{
          gridRow: "1 / 2",
          gridColumn: "1 / 2",
          // backgroundColor: "#1a1a1a",
        }}
      >
        <div className="flex items-center flex-col text-black ">
          <Image
            src={resp?.image?.small}
            className="mr-2 rounded-full"
            width={28}
            height={28}
            alt={`${resp.name}'s profile picture`}
          />
          <span style={{ fontSize: "2.3rem" }}>{resp.name}</span>

          <p
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: resp.description.en }}
          ></p>
        </div>
      </div>
      <div
        style={{
          gridRow: "1 / 4",
          gridColumn: "2 / 4",
        }}
        className="p-3"
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Current Price</TableCell>
                <TableCell align="right">High 24h</TableCell>
                <TableCell align="right">Low 24h</TableCell>
                <TableCell align="right">Price Change 24h %</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={resp.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {resp.market_data.current_price.usd}
                </TableCell>
                <TableCell align="right">
                  {resp.market_data.high_24h.usd}
                </TableCell>
                <TableCell align="right">
                  {resp.market_data.low_24h.usd}
                </TableCell>
                <TableCell align="right">
                  {Number(resp.market_data.price_change_percentage_24h).toFixed(
                    2
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div
        style={{
          gridRow: "3 / 4",
          gridColumn: "1 / 2",
        }}
      >
        <Link href="/coins/markets">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Coins Market
          </button>
        </Link>
      </div>
    </div>
  );
}
