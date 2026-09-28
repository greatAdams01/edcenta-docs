# School organization migration

Schools are tenants; users authenticate and receive a scoped `SchoolMembership`. Students retain their existing login model and connect to a school through `SchoolEnrollment`.

## Roles and scope

- `platformRole` controls EdCenta-wide administration (`USER`, `MODERATOR`, `ADMIN`, `SUPERADMIN`).
- `SchoolMembership.role` controls one school (`OWNER`, `ADMIN`, `MODERATOR`, `TUTOR`).
- `SUPERADMIN` is the platform owner. `OWNER` is never a user account type; it is a school membership role.
- A user and a student can each have only one active school relationship. A school can have only one active owner.

## Deployment

From `edcenta-bc`, run the report before applying changes:

```bash
yarn migrate:school-organizations
yarn migrate:school-organizations --apply
```

The migration is idempotent. Review every `skipped` entry before enabling the school portal. It backfills owners, tutor memberships, student enrollments, platform roles, school-owned subscriptions, and school entitlement overrides while retaining legacy references.

After applying, require affected users to sign in again so authentication responses include `platformRole`, `school`, `schoolRole`, and `schoolPermissions`. Do not remove `School.userId`, `School.students`, `School.tutors`, `User.accountType`, or user-owned subscription references until production reconciliation reports no mismatches.

## Portal boundaries

- `/admin`: EdCenta platform administration.
- `/school`: school organization management.
- `/dashboard`: independent tutor and parent workflows.
- `/student`: student workflows.
