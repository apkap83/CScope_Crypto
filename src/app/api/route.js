export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const apiAddress = process.env.COIN_GECKO_API_URL;
    const apiKey = process.env.COIN_GECKO_API_KEY;
    const currency = "usd";

    const rowsPerPage = searchParams.get("rowsPerPage");
    const pageNumber = searchParams.get("pageNumber");
    const fields = searchParams.get("fields");
    const query = searchParams.get("query").toLowerCase();

    const url = `${apiAddress}/coins/markets?vs_currency=${currency}&per_page=${rowsPerPage}&page=${pageNumber}&ids=${query}&x_cg_demo_api_key=${apiKey}`;

    console.log("Coin Gecko Request: ", url);
    // Fetching data from CoinGecko API
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data from CoinGecko API");
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

    return Response.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return an error response
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from CoinGecko API" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
