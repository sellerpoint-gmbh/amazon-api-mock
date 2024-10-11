# Amazon API Mock

This is a mock server for [https://sellingpartnerapi-na.amazon.com](https://sellingpartnerapi-na.amazon.com). It allows you to test your integrations with Amazon APIs without actually making API calls.

The mock server is running at [https://amazon-api-mock-production-11956aa4a78892c3.up.railway.app/](https://amazon-api-mock-production-11956aa4a78892c3.up.railway.app/).

## Usage

### Mocking API Calls

To mock an API call replace the `https://sellingpartnerapi-na.amazon.com` with `https://amazon-api-mock-production-11956aa4a78892c3.up.railway.app` in the API call URL.

Supported API's:

- [Notifications API v1](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-reference)
- [Orders API v0](https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference)
- [Tokens API v2021-03-01](https://developer-docs.amazon.com/sp-api/docs/tokens-api-v2021-03-01-reference)

Mocked behavior:

- Rate limiting
- Validation
- Dynamic data
- Restricted data using [RDT](https://developer-docs.amazon.com/sp-api/docs/tokens-api-v2021-03-01-reference#post-tokens2021-03-01restricteddatatoken)

### Admin API

You can update the internal store by sending a `POST` request to `/admin/store/{collection}` with the collection name and the new data.

Supported collections:

- `orders`
- `destinations`
- `subscriptions`

Example:

```bash
curl -X POST 'https://amazon-api-mock-production-11956aa4a78892c3.up.railway.app/admin/store/destinations' \
-H 'Content-Type: application/json' \
--data-raw '[
    {
        "name": "SQSDestination",
        "destinationId": "3af276a7-e56d-4eaf-96be-9036ca618c6c",
        "resource": {
            "sqs": {
                "arn": "arn:aws:sqs:us-east-2:444455556666:queue1"
            }
        }
    }
]'
```

You can read the internal store by sending a `GET` request to `/admin/store/{collection}`.

## Local Setup

### Docker

1. Install Docker
2. Run `docker build -t amazon-api-mock .`
3. Run `docker run -p 3100:3100 amazon-api-mock`

### Manual Setup

1. Install Node.js
2. Run `npm install`
3. Run `npm run build:lib`
4. Run `npm run start`

## Project Structure

### `api/routes`

- All API routes are defined here
- Each route uses the `RequestHandler.handle` method
- The `RequestHandlerArgs` define validation and rate limiting if applicable for the route
- The callback function is the actual handler for the rout if validation passes
- The routes are served by `counterfact` which compiles all files into the `.cache` directory

### `api/types`

- Types are automatically generated from the OpenAPI spec with `npm run generate:types`
- Do not modify these files directly

### `lib`

- Utility functions and classes are defined here
- Run `npm run generate:zod` to generate the validation schemas
- Run `npm run build:lib` to compile the library
