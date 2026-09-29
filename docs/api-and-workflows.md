# API and workflows

This guide describes compatibility boundaries and end-to-end behavior. The executable GraphQL schema remains the field-level reference.

## API contract

- GraphQL is served at `/graphql`.
- Preserve existing operation names and response fields. Add optional fields when extending a flow.
- MongoDB identifiers remain `ObjectId` values internally and become strings at GraphQL/UI boundaries.
- Errors use stable GraphQL extension codes and must distinguish validation, authentication, permission, access-policy, and provider failures.

## Authentication

### Credentials

1. Verify credentials and account status.
2. Resolve platform role and active school membership context.
3. Issue an EdCenta JWT.
4. Persist only the EdCenta JWT in Redux.
5. Route to `/admin`, `/school`, `/dashboard`, or the student portal from effective context.

### Google

NextAuth acquires Google identity only. The frontend exchanges the short-lived Google ID token through `googleLogin`; the backend verifies issuer, audience, expiry, and verified normalized email, links or creates the user, and returns the same EdCenta auth payload as credential login.

## School onboarding and membership

1. A person signs up and selects the school path.
2. Onboarding creates the School organization plus the initial `OWNER` membership transactionally.
3. The owner invites staff by email with an expiring school invitation and a fixed role.
4. Acceptance creates the active membership, subject to one-school enforcement.
5. Students join through `SchoolEnrollment`; transfers close the prior enrollment and retain history.
6. Subscription, entitlement, and student limit checks resolve against the School.

## Assignment and assessment

1. Authorized parent/tutor/school staff browse permitted curriculum and create an assignment.
2. Student access is checked against ownership/enrollment, schedule, retry, and subscription policies.
3. `startAssessment` returns the persisted attempt ID.
4. Submission must target that active attempt and is idempotent.
5. Objective questions are auto-graded. Mixed/subjective work remains pending review.
6. An authorized reviewer grades subjective answers and feedback; the service then finalizes score, percentage, pass status, completion time, analytics, and configured rewards.
7. Correct answers are never exposed before permitted review.

## Subscription and access

1. Request a server-generated quote for plan, billing cycle, and selected student count.
2. Persist the price, tier, rule version, and student count snapshot with the subscription.
3. Paystack references are created/reconciled idempotently; browser-supplied prices are never trusted.
4. The centralized access policy considers account status, active subscription, school/user ownership, expiry, entitlement override, feature restrictions, and active-student limit.

## Rewards and withdrawals

1. Reward calculations use versioned AppConfig rules and support fractional points.
2. Point transactions snapshot the applicable rule version.
3. Withdrawal cash value uses the active conversion rule at request time.
4. A request validates ownership, bank details, minimum, and available balance, then reserves funds transactionally.
5. Admin approval creates a durable unique reference and pending ledger entry before invoking Paystack.
6. Success finalizes the withdrawal; failure releases reserved funds. Duplicate approvals and webhooks are idempotent.
7. Notifications occur after committed financial state and cannot roll it back.

## EV Connect

Authorized hosts create fixed or unlimited virtual classes. Unlimited means a 24-hour server maximum. Guest access uses a revocable unguessable token plus separate PIN and returns a classroom-only LiveKit token. Guests count toward limits and cannot access academic, profile, reward, or account APIs. Guest attendance is separate from student attendance.

## Planned workflows

Persistent messaging, parent delegation, tutor discovery, exports/download history, referral payouts, e-library, blog, telecom data, and Homework Buddy require their own approved contracts before GraphQL fields are added.
