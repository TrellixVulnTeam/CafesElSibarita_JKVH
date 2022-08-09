import Shopify from "@shopify/shopify-api";
import { FastifyPluginAsync } from "fastify";
import { SHOPIFY_SHOP, STOREFRONT } from "../../config";

export const checkoutMutation: FastifyPluginAsync = async (app) => {
	// app.get('/products', {preValidation: app.authenticate}, async (req, res) => {
	app.post<{ Body: { variantId: string } }>("/checkout", async (req, res) => {
		//Req
		// req.body;
		console.log("HOLAAAAA");
		const { variantId } = req.body;
		console.log(req.body);
		// Load the access token as per instructions above
		const storefrontAccessToken: string = STOREFRONT;

		// Shop from which we're fetching data
		const shop: string = SHOPIFY_SHOP;

		// StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
		const storefrontClient: any = new Shopify.Clients.Storefront(shop, storefrontAccessToken);

		// Use client.query and pass your query as `data`
		try {
			const product: any = await storefrontClient.query({
				data: {
					query: `mutation checkoutMutation($variantId: ID!) {
                    checkoutCreate(input: {
                        lineItems: {
                            variantId: $variantId
                            quantity: 1
                        }
                    }) {
                        checkout {
                            webUrl
                        }
                    }
                }`,
					variables: {
						variantId,
					},
				},
			});

			console.log(product.body);
			return product.body;
		} catch (error) {
			console.log(error);
		}
	});
};
