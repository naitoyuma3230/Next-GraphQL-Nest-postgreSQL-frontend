import { initUrqlClient } from "next-urql";
import { Client } from "urql";

// requestのエンドポイント
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
	return new Promise((resolve, reject) => {
		// クライアントの作成
		const client = initUrqlClient(
			{
				url: GRAPHQL_ENDPOINT,
			},
			false
		);
		if (!client) {
			reject(Error("Failed to init initUrqlClient."));
		} else {
			resolve(client);
		}
	});
}
