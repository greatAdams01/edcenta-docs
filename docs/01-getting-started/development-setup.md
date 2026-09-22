# Development setup

EdCenta is maintained as three sibling repositories: `edcenta-bc`, `edcenta-fc`, and `edcenta-docs`.

## Requirements

- Node.js 20 and npm
- MongoDB replica set or MongoDB Atlas
- Paystack sandbox credentials for payment work
- Google OAuth credentials for Google sign-in

## Backend

Create `edcenta-bc/.env` with at least `MONGO_URI`, `PORT`, `JWT_SECRET` (32+ characters), `TOKENKEY` (16+ characters), `SITE_URL`, `SERVER_URL`, `PAYSTACK_SECRET`, and `GOOGLE_ID`. Set `PAYMENT_WITHDRAWALS_ENABLED=true` only after Paystack sandbox reconciliation tests pass. Then run:

```bash
npm install
npm run type-check
npm test
npm run dev
```

GraphQL is served at `/graphql`. Health probes are `/health`, `/health/live`, `/health/ready`, and `/health/detailed`.

## Frontend

Create `edcenta-fc/.env.local` with `NEXT_PUBLIC_SERVER_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `GOOGLE_ID`, and `GOOGLE_SECRET`. Then run:

```bash
yarn install --frozen-lockfile
yarn type-check
yarn test
yarn dev
```
