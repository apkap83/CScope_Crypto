import { unstable_noStore as noStore } from "next/cache";
export async function fetchCoinsList(query, currentPage) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // 1 sec artificial delay to show the Loading state
    await new Promise((res) => setTimeout(res, 1000));
    const ITEMS_PER_PAGE = 12;

    const apiAddress = process.env.COIN_GECKO_API_URL;
    const apiKey = process.env.COIN_GECKO_API_KEY;
    const currency = "usd";
    const fields =
      "name,symbol,current_price,high_24h,low_24h,price_change_percentage_24h";
    query = query.toLowerCase();

    const url = `${apiAddress}/coins/markets?vs_currency=${currency}&per_page=${ITEMS_PER_PAGE}&page=${currentPage}&ids=${query}&x_cg_demo_api_key=${apiKey}`;

    console.log("url", url);
    console.log("Request Towards:", url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    let data = await response.json();

    // If fields query parameter is provided, filter the data to include only specified fields
    if (fields) {
      const selectedFields = fields.split(","); // Splitting fields by comma
      data = data.map((item) => {
        const filteredItem = {};
        filteredItem["image"] = item["image"];
        filteredItem["id"] = item["id"];
        selectedFields.forEach((field) => {
          if (item.hasOwnProperty(field)) {
            filteredItem[field] = item[field];
          }
        });
        return filteredItem;
      });
    }

    return data;
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
