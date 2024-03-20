import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { fetchCoinsList } from "@/app/lib/data";

async function CoinList({ query, currentPage }) {
  const coinsList = await fetchCoinsList(query, currentPage);
  return (
    <Fragment>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {coinsList?.map((coin) => (
                <div
                  key={coin.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <Image
                          src={coin.image}
                          className="mr-2 rounded-full"
                          width={28}
                          height={28}
                          alt={`${coin.name}'s profile picture`}
                        />
                        <p>{coin.name}</p>
                      </div>
                      <p className="text-sm text-gray-500">{coin.symbol}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">
                        {coin.current_price}
                      </p>
                      <p>
                        {coin.price_change_percentage_24h?.toFixed(2) + "%"}
                      </p>
                    </div>
                    <div className="flex justify-end gap-2"></div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-2 py-5 font-medium ">
                    Symbol
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium text-right">
                    Current Price
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium text-right">
                    High 24h
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium text-right">
                    Low 24h
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium text-right">
                    % 24h
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {coinsList?.map((coin) => (
                  <tr
                    key={coin.name}
                    className="hover:bg-gray-200 cursor-pointer w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <Link href={`/coins/${coin.id}`}>
                        <div className="flex items-center gap-3">
                          <Image
                            src={coin.image}
                            className="mr-2 rounded-full"
                            width={28}
                            height={28}
                            alt={`${coin.name}'s profile picture`}
                          />
                          <p>{coin.name}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Link href={`/coins/${coin.name}`}>{coin.symbol}</Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">
                      <Link href={`/coins/${coin.id}`}>
                        {coin.current_price}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">
                      <Link href={`/coins/${coin.id}`}>{coin.high_24h}</Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">
                      <Link href={`/coins/${coin.id}`}>{coin.low_24h}</Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">
                      <Link href={`/coins/${coin.id}`}>
                        {coin.price_change_percentage_24h?.toFixed(2) + "%"}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CoinList;
