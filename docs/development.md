# Development

## Prerequisites

- Node.js 26.x for the backend.
- Yarn 1.22.x, following the existing lockfiles. Do not mix Yarn and npm lockfiles.
- MongoDB. Transactions require a replica set; production is expected to use Atlas or another replica-set deployment.

## Backend

```bash
cd edcenta-bc
yarn install --frozen-lockfile
cp .env.example .env
yarn dev
```

Important environment groups:

- Runtime/database: `PORT`, `MONGO_URI`.
- JWT/authentication: `TOKENKEY`, `ALGORITHM`, `JWT_SECRET_KEY`, `SECRET`.
- Payments/webhooks: `PAYSTACK_SECRET`, `WEBHOOK_SECRET`, `FLUTTER_SECRET`, `PAYSTACK_TRIAL_AUTH_AMOUNT_KOBO`.
- URLs: `SITE_URL`, `SERVER_URL`.
- Cloudinary: `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`.
- Email: production `MAIL_PROXY_URL` and `MAIL_PROXY_SECRET`, or local SMTP settings; sender identity uses `MAIL_FROM`, `MAIL_FROM_NAME`, `MAIL_REPLY_TO`, and `MAIL_LOGO_URL`.

Checks:

```bash
yarn type-check
yarn lint
yarn test
yarn build
```

Migrations load `.env` automatically:

```bash
yarn migrate:client-corrections
yarn migrate:school-organizations --dry-run
```

Never run a migration against production without reviewing its dry-run report and backup/recovery plan.

## Frontend

```bash
cd edcenta-fc
yarn install --frozen-lockfile
yarn dev
```

Checks:

```bash
yarn type-check
yarn lint
yarn test
yarn build
```

## Development rules

- Add live GraphQL data; do not introduce mock dashboard arrays.
- Keep resolvers thin and place business logic in domain services.
- Reuse centralized account, permission, organization, route, and subscription policies.
- Test success, validation, loading, empty, error, permission-denied, and cross-tenant cases.
- Do not authorize from frontend visibility or deprecated `accountType` values.
- Update maintained documentation when a contract, workflow, environment variable, or rollout status changes.
