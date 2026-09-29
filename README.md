# EdCenta documentation

This repository is the maintained source of truth for the EdCenta product and its implementation. Start here; historical fix reports and duplicated guides have been removed because Git already preserves their history.

## Reading order

1. [Product scope](docs/product-scope.md) — what the client expects and how conflicting requirements are resolved.
2. [Implementation status](docs/implementation-status.md) — what exists, what is partial, and what should be built next.
3. [Architecture](docs/architecture.md) — repositories, identity, school tenancy, and major domains.
4. [API and workflows](docs/api-and-workflows.md) — the principal end-to-end flows and compatibility rules.
5. [Development](docs/development.md) — local setup, commands, environment variables, and tests.
6. [Operations](docs/operations.md) — migrations, deployment, health checks, and release verification.

## Source-of-truth rules

- Running code and automated tests describe current behaviour.
- `product-scope.md` describes the agreed product outcome.
- `implementation-status.md` records delivery status; update it in the same change that completes a feature.
- New decisions should update the relevant maintained document, not create another one-off report.
- Old reports remain recoverable from Git history.

## Repository layout

```text
edcenta/
├── edcenta-bc/    Node.js 26, TypeScript, Apollo Server and MongoDB backend
├── edcenta-fc/    Next.js 14 web application
└── edcenta-docs/  Maintained product and engineering documentation
```
