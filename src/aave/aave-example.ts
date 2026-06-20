import { AaveClient, ChainsFilter } from "@aave/client";
import { chains } from "@aave/client/actions";

import { client } from "./client.ts";

// Fetch all chains supported by Aave
const result = await chains(client, {
    query: { filter: ChainsFilter.ALL },
});

if (result.isOk()) {
    console.log("Chains:", result.value);
} else {
    console.error("Error:", result.error);
}