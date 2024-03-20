import { unstable_noStore as noStore } from "next/cache";
export async function fetchCoinsList(query, currentPage) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // 1 sec artificial delay to show the Loading state
    await new Promise((res) => setTimeout(res, 1000));

    const urlSuffix = "http://localhost:3000/api";

    const ITEMS_PER_PAGE = 12;
    const url = `${urlSuffix}?pageNumber=${currentPage}&rowsPerPage=${ITEMS_PER_PAGE}&fields=name,symbol,current_price,high_24h,low_24h,price_change_percentage_24h&query=${query}`;

    console.log("Request Towards:", url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch coin list data.");
  }
}

export async function fetchDetailsForCoin(coinName) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // 1 sec artificial delay to show the Loading state
    await new Promise((res) => setTimeout(res, 1000));

    const apiAddress = process.env.COIN_GECKO_API_URL;
    const apiKey = process.env.COIN_GECKO_API_KEY;
    const currency = "usd";

    const url = `${apiAddress}/coins/${coinName.toLowerCase()}?x_cg_demo_api_key=${apiKey}`;

    console.log("Server Component Request Towards:", url);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();

    const { name, description, market_data, image } = jsonData;
    return { name, description, market_data, image };
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch coin details data.");
  }
}
