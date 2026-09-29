# Product scope

## Purpose

EdCenta is a multi-persona learning platform for students, parents, independent tutors, schools, and EdCenta platform staff. The client PDFs are UX/product references; they are not implementation instructions. This document consolidates their intent with decisions agreed during implementation.

## Product areas

### Students

- Dashboard, assigned work, to-do list, completed work, notifications, and classes.
- Learning material before questions: introductions, worked examples, videos, and e-book links.
- Worksheets and assessments, including timed work and manual review of subjective answers.
- Subject/topic performance analytics, scores, points, cash-value previews, withdrawals, and at least one year of filterable activity history.
- Persistent communication with their authorized tutor or school staff.

### Parents

- Dashboard for children and groups, with safe entry into a child's learning context.
- Browse, search, preview, assign, and review curriculum activities.
- Filter completed work and export/download results.
- Find an independent tutor.
- Per-child analytics, reward approval, access controls, recommendations, and self-assignment controls.
- Revocable, child-scoped delegation links for an invited tutor or school.
- Weekly guardian progress emails, account management, subscription management, and notifications.

### Tutors

- Manage students and groups, assign and review learning activities, provide feedback, and view analytics.
- Use EV Connect for scheduled or immediate one-to-one/group virtual classes, whiteboard, screen sharing, chat, guest links, and PIN access.
- Manage curriculum content, subscription, rewards, notifications, and account settings.
- Independent tutors remain valid even when a tutor also belongs to a school.

### Schools

- School is an organization, not a login account. People authenticate as users and join through memberships.
- One owner, with school-scoped `OWNER`, `ADMIN`, `MODERATOR`, and `TUTOR` roles.
- Invite and manage staff, enroll and transfer students, organize academics, run EV Connect, view analytics, and manage school-owned billing and entitlements.
- School staff use `/school`; EdCenta platform staff use `/admin`.

### Platform administration

- Manage users, account status, full-access overrides, subscriptions, plans, student pricing, withdrawals, transactions, rewards, and audit history.
- Manage grades, subjects, topics, worksheets, assessments, question banks, and curriculum ownership.
- Manage EV Connect sessions and platform analytics.
- Permission-based admin roles; `SUPERADMIN` is the unrestricted EdCenta owner role.
- Generate or expose unambiguous identifiers where customer support needs them.

### Platform capabilities

- Credential login and Google identity exchange into one EdCenta JWT authorization model.
- Subscription access policies, per-student pricing, Paystack billing, wallet ledger, withdrawal approval, and idempotent reconciliation.
- Notifications, weekly reports, analytics, audit logging, and production health endpoints.
- Longer-term differentiators: Homework Buddy, e-library, blog, referral payouts, discounted data integration, and real-time support.

## Decisions that supersede the PDFs

- `SUPERADMIN` is the EdCenta platform owner. School `OWNER` is a membership role, never a platform account type.
- School billing, overrides, and student limits belong to the School organization and survive an owner transfer.
- Reward rates are configurable. The current defaults are 0.5 points per correct answer and ₦100 per 1,000 points; PDF examples are not constants.
- Withdrawals follow request → admin approval/rejection → Paystack transfer → webhook reconciliation. The PDF's parent/tutor/school reimbursement chain is not the approved payment design.
- “Unlimited” EV sessions have a server-enforced 24-hour maximum.
- Browser screenshot prevention cannot be guaranteed. Use deterrence such as restricted selection/downloads and personalized watermarking where justified.
- Inactive free accounts must be suspended or archived under an explicit retention policy; they must not be silently hard-deleted after three months.
- The old combined tutor/school screens are references only. Tutor and school authorization and navigation are separate.

## Items requiring a product decision

- Exact Homework Buddy user journey, pricing, and moderation rules.
- Referral qualification, fraud controls, refund clawback, and payout timing.
- Telecom provider, countries, pricing, and settlement for discounted data.
- E-library licensing, upload rights, content moderation, and download policy.
- Whether parent reward approval is advisory or blocks earned points.
- Retention period and reactivation policy for free/inactive accounts.
