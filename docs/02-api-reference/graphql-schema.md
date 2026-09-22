# GraphQL schema

The backend exposes a single Apollo Server 4 endpoint at `/graphql`. Existing credentials and Google identity exchange both produce an EdCenta JWT, which clients send as `Authorization: Bearer <token>`.

Important public authentication operations are `login`, `loginStudent`, and `googleLogin(idToken)`.

Assessment attempts use `startAssessment` to obtain an attempt ID. `submitAssessment` requires that ID. Objective answers are graded immediately; mixed assessments remain `PENDING` until an administrator calls `gradeAssessment` with scores for every subjective answer.

Reward withdrawal operations are `requestRewardWithdrawal`, `approveWithdrawalRequest`, and `rejectWithdrawalRequest`. Status progresses through `PENDING`, `PROCESSING`, and `APPROVED`; rejected and provider-failed requests release reserved points.

The executable schema in the backend source remains the authoritative contract.
