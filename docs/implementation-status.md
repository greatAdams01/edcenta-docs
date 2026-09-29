# Implementation status and gap assessment

Assessment date: 29 September 2026. Status is based on the current backend and frontend source, not on historical completion reports.

## Executive assessment

EdCenta has a substantial platform core. Authentication, school tenancy models, platform RBAC, curriculum data, assignments/assessments, subscriptions, rewards, withdrawals, EV Connect, notifications, and analytics all have real backend or frontend implementations. The largest risk is not a missing foundation; it is incomplete end-to-end wiring and inconsistent persona portals.

Do not begin with the “unique features.” First make the four core journeys coherent: school operations, teaching/assignment delivery, learner completion/review, and billing/access. Then add messaging, delegation, discovery, and exports. Only after those are stable should referral, telecom data, e-library, blog, and Homework Buddy be scheduled.

## Capability matrix

| Area | Status | Evidence and remaining work |
| --- | --- | --- |
| Authentication and onboarding | Mostly implemented | Credential login, Google-to-EdCenta JWT exchange, verification, onboarding, account activation, route policies, and email templates exist. Complete regression coverage for every persona and remove remaining `accountType` authorization checks. |
| Platform admin and RBAC | Mostly implemented | Platform roles, admin roles/permissions, audit records, user controls, pricing, rewards, EV, subscription, transaction, and withdrawal screens exist. Replace remaining broad legacy role checks and verify every menu action against backend permissions. |
| School organization | Foundation implemented; portal partial | `SchoolMembership`, `SchoolInvitation`, `SchoolEnrollment`, school-owned subscription fields, permission policies, migration scripts, and `/school` exist. Academics and EV pages are thin, organization-derived counts need reconciliation, and legacy school arrays/ownership still require a controlled cutover. |
| Curriculum/content | Implemented with integration gaps | Grades, subjects, topics, worksheets, questions, assignments, and assessment models/operations exist. Confirm school-scoped authorship, bulk upload, e-book/video material, exam-board metadata, and all persona browse/preview paths. |
| Assessments | Substantially implemented | Attempt service, active attempt IDs, submission validation, auto-grading, pending subjective review, manual grading, analytics, and access checks exist. Add complete UI and contract/E2E coverage across student, tutor, and school contexts. |
| Parent experience | Partial | Student/group, assignment, review, rewards, reports, subscription, and EV pages exist. Missing or incomplete: scoped share delegation, tutor directory, robust child-context controls, unified exports/download centre, and persistent messaging. |
| Tutor experience | Partial to strong | Student/group, curriculum, assignments, review, analytics, EV, rewards, and subscription routes exist. Needs navigation/data consistency, durable messaging, exports, and school-versus-independent context tests. |
| Student experience | Partial to strong | Dashboard, to-do, assignments, completed work, courses, classes, analytics, rewards, notifications, and review routes exist. Verify preparatory learning content, one-year history, withdrawal UX, recommendations/control enforcement, and persistent inbox. |
| EV Connect | Substantially implemented | Virtual classes, LiveKit integration, signaling, rooms, whiteboard permissions, guest sharing/PIN, admin management, chat, and fixed/unlimited duration exist. Complete school-native management pages and production load/security tests. |
| Subscriptions/access | Substantially implemented | Plans, tiered student pricing, quotes, snapshots, entitlement overrides, centralized access policy, Paystack services, and student limits exist. Complete school-owned renewal/webhook reconciliation and concurrency tests. |
| Rewards/withdrawals | Substantially implemented | Configurable reward settings, fractional points, wallets, requests, reservations, approval/rejection, transfers, webhooks, and admin views exist. Verify feature-flagged production behavior, rate snapshots, recovery, and persona-specific withdrawal rules. |
| Analytics/reports | Implemented with UX gaps | Student performance services, dashboard analytics, and scheduled parent reports exist. Reconcile formulas, expose school aggregates, and add CSV/Excel export and a download history. |
| Notifications | Implemented | Model, resolvers, UI, and email flows exist. Notification delivery failure must remain isolated from committed financial/account state. |
| Persistent messaging/inbox | Missing | EV in-room chat is not a durable tutor/school/student inbox. Define conversations, membership/consent, retention, moderation, unread state, and attachments before implementation. |
| Parent delegation links | Missing | Build revocable, expiring, email-bound grants scoped to selected students and `assign/review` permissions; do not reuse EV guest links. |
| Tutor discovery | Missing | Define searchable public tutor profiles, availability, safeguarding, contact rules, and ranking before building the directory. |
| Unique account codes | Missing/unclear | Define whether these are support IDs, join codes, or public aliases. Never expose database IDs or use them as credentials. |
| Homework Buddy | Marketing/reference only | Requires a product specification before models, permissions, moderation, and pricing are added. |
| E-library and blog | Missing | Separate content-management products requiring licensing, ownership, moderation, search, and publication workflows. |
| Referral payouts | Missing | A configuration value is not a ledger. Requires attribution, qualification, anti-fraud, reversals, and payout reconciliation. |
| Discounted telecom data | Missing | Requires provider selection and commercial/settlement design before API work. |

## Recommended delivery order

### Gate 1 — stabilize existing core journeys

1. Finish the school portal using real school-scoped APIs: overview, staff, students, academics, EV, analytics, subscription, and settings.
2. Remove remaining legacy account-type and broad admin authorization checks.
3. Add E2E tests for each persona from signup/login through its landing page and primary action.
4. Reconcile school migration results and complete dual-read/write cutover safeguards.

### Gate 2 — complete teaching and reporting

1. Finish the assign → student attempt → objective/manual review → analytics flow for tutor, parent, and school contexts.
2. Implement export/download history and weekly report verification.
3. Complete school-owned subscription renewal, Paystack webhook, entitlement, and student-limit concurrency tests.
4. Harden EV Connect security, guest access, session cleanup, and school-native management.

### Gate 3 — close requested workflow gaps

1. Persistent messaging/inbox.
2. Parent delegation grants.
3. Tutor discovery.
4. Customer-facing account/support codes after semantics are approved.

### Gate 4 — differentiated products

Create separate approved specifications and business cases for Homework Buddy, referrals, e-library, blog, and telecom data. Do not couple them to the core stabilization release.

## Definition of done for each gate

- Backend and frontend type-check, test, lint, and production build pass from clean installs.
- Authorization tests include cross-school and cross-student denial.
- Existing GraphQL operation names and response fields remain compatible unless a versioned change is approved.
- Production migrations support dry run, idempotent rerun, reconciliation output, and rollback guidance.
- Empty, loading, error, permission-denied, and mobile states are implemented for every new screen.
- Documentation and the capability matrix are updated in the same change.
