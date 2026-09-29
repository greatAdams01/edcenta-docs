# Architecture

## Repositories

- `edcenta-bc`: Node.js 26 TypeScript API using Express, Apollo Server 4, GraphQL, MongoDB/Mongoose, JWT, Paystack, email delivery, and LiveKit/Socket.IO services.
- `edcenta-fc`: Next.js 14 TypeScript web application using Apollo Client and Redux for persisted EdCenta JWT authentication.
- `edcenta-docs`: maintained product, engineering, and operational guidance.

## Identity and tenancy

Authentication belongs to a person. Organization access belongs to a membership.

```text
User ── SchoolMembership ── School
Student ── SchoolEnrollment ── School
School ── Subscription
```

- `User.platformRole`: `USER`, `MODERATOR`, `ADMIN`, or `SUPERADMIN`.
- `SUPERADMIN` is the unrestricted EdCenta platform-owner role.
- School membership role: `OWNER`, `ADMIN`, `MODERATOR`, or `TUTOR`.
- A user has at most one active school membership.
- A student has at most one active school enrollment, with enrollment history retained.
- A school has exactly one active owner and ownership must be transferred transactionally.
- `accountType` is a compatibility field, not the source of authorization truth.

## Authorization boundaries

- Platform operations use centralized platform permission checks.
- School operations require both the target school and an active membership with the required school permission.
- Student ownership/assignment checks are independent of platform and school permissions.
- Frontend navigation reflects permissions for usability; backend checks remain authoritative.
- Disabling a user invalidates authorization immediately, including existing JWTs.

## Major domains

- Identity: users, verification, onboarding, authentication, roles, and audit logs.
- Schools: organizations, memberships, invitations, enrollment, and ownership transfer.
- Learning: grades, curriculum, topics, worksheets, questions, assignments, assessments, and attempts.
- Live learning: virtual classes, signaling, guest invitations, attendance, whiteboard, and chat.
- Billing: plans, tiered pricing, subscriptions, entitlements, Paystack, and transactions.
- Rewards: point rules, point transactions, wallets, withdrawals, approval, and reconciliation.
- Engagement: notifications, analytics, and scheduled parent reports.

## Compatibility strategy

New school organization fields are introduced additively. Legacy school `userId`, `students`, `tutors`, and account-type aliases remain only during migration. Reads and writes may be dual-routed behind configuration while reconciliation is active. Remove legacy fields only after production reports show zero mismatches and affected JWTs have been refreshed.

## Frontend portals

- `/admin`: EdCenta platform administration.
- `/school`: school owner and school staff management.
- `/dashboard`: independent parent and tutor experiences.
- Student routes: learning, assignments, classes, analytics, rewards, and notifications.

Route metadata, sidebar visibility, guards, and logout behavior should share one policy definition per portal.
