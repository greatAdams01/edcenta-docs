# Testing and release verification

Run the following in both application repositories before release:

```bash
npm ci
npm run type-check
npm test
npm run build
npm run lint
```

Backend integration tests can use the replica-set harness in `src/test-support/mongo.ts`, which supports transaction-dependent withdrawal scenarios.

Payment releases must be verified against Paystack sandbox events for transfer success, failure, reversal, and duplicate webhook delivery. Production withdrawal transfer handling should remain disabled until those checks pass.
