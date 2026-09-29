# Operations

## Health and routing

- `GET /health`: simple load-balancer health.
- `GET /health/live`: process liveness.
- `GET /health/ready`: dependency readiness.
- `GET /health/detailed`: detailed service checks; restrict publicly if it exposes operational detail.
- `POST /graphql`: GraphQL API.

The deployed service must listen on `0.0.0.0` and the platform-provided `PORT`. Docker `EXPOSE` metadata does not prove that the process is listening.

## Migration safety

For client-correction and school-organization migrations:

1. Confirm `MONGO_URI` is loaded from the intended environment.
2. Take a recoverable database backup.
3. Run dry mode and retain the report.
4. Investigate duplicates, orphaned profiles, legacy owner values, multi-school users/students, and unmapped grades.
5. Run the idempotent write migration in a controlled window.
6. Re-run dry mode and compare legacy and organization-derived counts.
7. Keep compatibility reads/writes until mismatch count is zero.
8. Invalidate affected JWTs at cutover and require a fresh login.

## Deployment gate

From clean installs, require:

- backend and frontend type-checking;
- non-mutating lint;
- unit, integration, contract, and critical security tests;
- backend and frontend production builds;
- GraphQL schema validation;
- migration reconciliation where models changed.

Payment changes remain behind configuration until sandbox transfer and webhook reconciliation tests pass.

## Post-deployment verification

1. Check liveness and readiness, then perform an authenticated GraphQL query.
2. Verify credential and Google login plus disabled-account rejection.
3. Verify one primary journey for student, parent, independent tutor, school member, and platform admin.
4. Verify assignment start/submission/manual review.
5. Verify subscription access and student limits.
6. In payment sandbox, verify request, approval, success/failure webhook, and duplicate-event handling.
7. Verify EV room creation, guest PIN access, revocation, and session cleanup.
8. Review logs for authorization denials, reconciliation mismatches, unhandled promise rejections, and provider retries.

## Incident principles

- Preserve the last healthy deployment when readiness fails.
- Capture application startup logs before replacing a failed container.
- Do not retry financial mutations without the original idempotency key.
- Treat notification delivery as asynchronous; it must not reverse committed account or financial state.
- Prefer console logging in production container environments and let the host aggregate and retain logs.
