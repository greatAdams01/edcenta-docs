# Student Queries and Mutations - Complete Reference

## Date: November 5, 2025

This document provides a comprehensive list of all GraphQL queries and mutations available for student accounts, as implemented in the EdCenta platform.

---

## Table of Contents
1. [Queries](#queries)
   - [Student Profile](#student-profile)
   - [Assignments](#assignments)
   - [Grades & Analytics](#grades--analytics)
   - [Points & Rewards](#points--rewards)
   - [Subjects & Topics](#subjects--topics)
2. [Mutations](#mutations)
   - [Authentication](#authentication)
   - [Assignment Submission](#assignment-submission)
3. [Variable Requirements](#variable-requirements)
4. [Authentication Context](#authentication-context)

---

## Queries

### Student Profile

#### 1. `student` - Get Student Details
**Description:** Fetch details of a specific student or the authenticated student.

**Schema:**
```graphql
query Student($id: ID) {
  student(id: $id) {
    _id
    name
    username
    age
    email
    reward
    isActive
    lastLoggedIn
    createdAt
    grade {
      _id
      stage
      ages
      year
    }
  }
}
```

**Variables:**
- `id` (optional): Student ID. If not provided, returns authenticated student's data.

**Frontend Hook:** `useStudentProfile(studentId?)`

**Returns:** Student object with personal details and grade information.

---

### Assignments

#### 2. `assignments` - Get Student Assignments
**Description:** Fetch assignments for a specific student, optionally filtered by worksheet.

**Schema:**
```graphql
query Assignments($studentId: String, $worksheetId: String) {
  assignments(
    studentId: $studentId
    worksheetId: $worksheetId
  ) {
    data {
      _id
      worksheetId {
        _id
        title
        subjectId {
          name
          _id
        }
      }
      answers {
        _id
      }
      createdAt
      attemptedAt
      score
      status
    }
    totalPage
    totalRecord
  }
}
```

**Variables:**
- `studentId` (required): The student's ID for filtering assignments
- `worksheetId` (optional): Filter by specific worksheet

**Frontend Hook:** `useStudentAssignments(filters?)`

**Returns:** List of assignments with worksheet details, status, and scores.

**Note:** Frontend implements client-side status filtering since backend doesn't support it in this query.

#### 3. `assignment` - Get Single Assignment
**Description:** Fetch details of a specific assignment.

**Schema:**
```graphql
query Assignment($id: ID!) {
  assignment(id: $id) {
    _id
    student {
      _id
      name
      username
    }
    worksheetId {
      _id
      title
      body {
        _id
        text
        img
      }
      difficulty
    }
    status
    score
    answers {
      _id
      questionId
      answer
      isCorrect
    }
    createdAt
    attemptedAt
    updatedAt
  }
}
```

**Variables:**
- `id` (required): Assignment ID

**Returns:** Complete assignment details including worksheet and answers.

---

### Grades & Analytics

#### 4. `fetchGrades` - Get Performance Summary
**Description:** Comprehensive performance analytics for the authenticated student.

**Schema:**
```graphql
query FetchGrades {
  fetchGrades {
    overallScore
    activitiesCompleted
    totalPoints
    totalTimeSpent
    averageTimePerAssignment
    overallPerformanceLevel
    subjectScores {
      averageScore
      activitiesCompleted
      performanceLevel
      subject {
        _id
        name
        slug
        description
      }
    }
    bestPerformingTopics {
      score
      activitiesCompleted
      timeSpent
      performanceLevel
      subject {
        _id
        name
      }
      topic {
        _id
        name
      }
    }
    topicsToWorkOn {
      score
      activitiesCompleted
      timeSpent
      performanceLevel
      subject {
        _id
        name
      }
      topic {
        _id
        name
      }
    }
    recentProgress {
      assignmentId
      worksheet
      subject
      topic
      score
      points
      timeSpent
      completedAt
      performanceLevel
    }
  }
}
```

**Variables:** None (uses authenticated student's context)

**Frontend Hook:** `useStudentGrades()`

**Returns:** 
- Overall performance metrics
- Subject-wise breakdown
- Best performing topics (score > 70%)
- Topics needing improvement (score < 70%)
- Recent progress history

**Performance Levels:**
- `EXCELLENT` (90-100%)
- `GOOD` (70-89%)
- `AVERAGE` (50-69%)
- `NEEDS_IMPROVEMENT` (<50%)

#### 5. `getSubjectAnalytics` - Get Subject-Specific Analytics
**Description:** Detailed analytics for a specific subject.

**Schema:**
```graphql
query GetSubjectAnalytics($subjectId: ID!) {
  getSubjectAnalytics(subjectId: $subjectId) {
    subject {
      _id
      name
      description
    }
    totalAssignments
    averageScore
    totalPoints
    performanceLevel
    topicBreakdown {
      topic {
        _id
        name
      }
      averageScore
      attemptsCount
      totalTimeSpent
      performanceLevel
    }
  }
}
```

**Variables:**
- `subjectId` (required): ID of the subject to analyze

**Frontend Hook:** `useSubjectAnalytics(subjectId)`

**Returns:** Subject performance with topic-level breakdown.

#### 6. `getPerformanceTrends` - Get Performance Over Time
**Description:** Track performance trends over a specified period.

**Schema:**
```graphql
query GetPerformanceTrends($days: Int) {
  getPerformanceTrends(days: $days) {
    period
    trend
    improvementRate
    totalAssignments
    averageScore
    dataPoints {
      date
      averageScore
      assignmentsCompleted
      pointsEarned
    }
  }
}
```

**Variables:**
- `days` (optional, default: 30): Number of days to analyze

**Frontend Hook:** `usePerformanceTrends(days?)`

**Returns:** 
- Performance trend analysis
- Daily data points for graphing
- Improvement rate calculation

**Trend Values:**
- `improving`: Performance is increasing
- `stable`: Performance is consistent
- `declining`: Performance is decreasing
- `no_data`: Insufficient data for analysis

#### 7. `getRecommendations` - Get AI-Powered Recommendations
**Description:** Personalized learning recommendations based on performance.

**Schema:**
```graphql
query GetRecommendations {
  getRecommendations {
    type
    priority
    title
    description
    suggestion
    topics {
      name
      subject
      currentScore
      targetScore
      score
    }
  }
}
```

**Variables:** None (uses authenticated student's context)

**Frontend Hook:** `useStudentRecommendations()`

**Returns:** List of recommendations with priorities and actionable topics.

**Recommendation Types:**
- `practice_more`: Topics requiring more practice
- `review`: Topics to review
- `challenge`: Advanced topics to try
- `strengthen_basics`: Foundational topics to reinforce

**Priority Levels:**
- `high`: Urgent attention needed
- `medium`: Should focus on soon
- `low`: Nice to improve

---

### Points & Rewards

#### 8. `getPointsHistory` - Get Points Transaction History
**Description:** Fetch history of points earned by the student.

**Schema:**
```graphql
query GetPointsHistory($limit: Int) {
  getPointsHistory(limit: $limit) {
    _id
    studentId
    assignmentId
    questionId
    pointsEarned
    multiplier
    bonus
    totalPoints
    transactionType
    reason
    createdAt
    metadata {
      difficulty
      timeSpent
      streakCount
    }
  }
}
```

**Variables:**
- `limit` (optional, default: 50): Number of transactions to return

**Frontend Hook:** `usePointsHistory(limit?)`

**Returns:** List of points transactions with earning details.

**Transaction Types:**
- `ASSIGNMENT_COMPLETION`: Points for completing assignments
- `CORRECT_ANSWER`: Points for correct answers
- `STREAK_BONUS`: Bonus for consecutive correct answers
- `TIME_BONUS`: Bonus for completing within time
- `DIFFICULTY_BONUS`: Bonus for harder questions

#### 9. `checkWithdrawalEligibility` - Check Points Withdrawal Status
**Description:** Check if student has enough points to withdraw.

**Schema:**
```graphql
query CheckWithdrawalEligibility {
  checkWithdrawalEligibility {
    currentPoints
    minimumRequired
    isEligible
    cashEquivalent
    pointsNeeded
  }
}
```

**Variables:** None (uses authenticated student's context)

**Frontend Hook:** `useWithdrawalEligibility()`

**Returns:**
- Current points balance
- Minimum points required for withdrawal (typically 5000)
- Eligibility status
- Naira equivalent of current points
- Points needed to reach minimum (if not eligible)

**Conversion Rate:** 100 points = ₦1

#### 10. `getLeaderboard` - Get Top Students Leaderboard
**Description:** View top-performing students globally or by topic.

**Schema:**
```graphql
query GetLeaderboard($topicId: ID, $limit: Int) {
  getLeaderboard(topicId: $topicId, limit: $limit) {
    rank
    totalPoints
    student {
      _id
      name
      username
      email
    }
  }
}
```

**Variables:**
- `topicId` (optional): Filter leaderboard by specific topic
- `limit` (optional, default: 10): Number of top students to return

**Frontend Hook:** `useLeaderboard(topicId?, limit?)`

**Returns:** Ranked list of top students by points.

---

### Subjects & Topics

#### 11. `subjects` - Get Available Subjects
**Description:** Fetch all subjects (to be filtered by subscription on frontend).

**Schema:**
```graphql
query Subjects($page: Int, $limit: Int) {
  subjects(page: $page, limit: $limit) {
    data {
      _id
      name
      slug
      tags
      description
      topics {
        data {
          _id
          name
          slug
        }
      }
      createdAt
    }
  }
}
```

**Variables:**
- `page` (optional): Page number for pagination
- `limit` (optional): Number of subjects per page

**Returns:** List of subjects with associated topics.

**Note:** Frontend filters this list based on the student's subscription `allowedCourseList`.

#### 12. `subject` - Get Single Subject Details
**Description:** Fetch details of a specific subject.

**Schema:**
```graphql
query Subject($subjectId: ID!) {
  subject(id: $subjectId) {
    _id
    name
    description
    slug
    tags
    createdAt
    updatedAt
  }
}
```

**Variables:**
- `subjectId` (required): Subject ID

**Returns:** Subject details.

#### 13. `topics` - Get Topics List
**Description:** Fetch topics, optionally filtered by subject or level.

**Schema:**
```graphql
query Topics(
  $page: Int
  $limit: Int
  $filter: String
  $levelId: String
  $subjectId: String
) {
  topics(
    page: $page
    limit: $limit
    filter: $filter
    levelId: $levelId
    subjectId: $subjectId
  ) {
    data {
      _id
      name
      subject
      type
    }
    totalPage
    totalRecord
  }
}
```

**Variables:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `filter` (optional): Search filter
- `levelId` (optional): Filter by education level
- `subjectId` (optional): Filter by subject

**Returns:** Paginated list of topics.

#### 14. `topic` - Get Single Topic Details
**Description:** Fetch details of a specific topic.

**Schema:**
```graphql
query Topic($topicId: ID!) {
  topic(id: $topicId) {
    _id
    name
    description
    slug
    levelId
  }
}
```

**Variables:**
- `topicId` (required): Topic ID

**Returns:** Topic details.

---

## Mutations

### Authentication

#### 1. `loginStudent` - Student Login
**Description:** Authenticate a student and receive auth token.

**Schema:**
```graphql
mutation LoginStudent($username: String!, $password: String!) {
  loginStudent(username: $username, password: $password) {
    _id
    token
    accountType
  }
}
```

**Variables:**
- `username` (required): Student's username
- `password` (required): Student's password

**Returns:**
- Student ID
- JWT token (includes student ID, username, accountType, and subscription data)
- Account type (always "STUDENT")

**Token Contents:**
```json
{
  "_id": "student_id",
  "username": "student_username",
  "accountType": "STUDENT",
  "subscription": {
    "title": "Plan Name",
    "type": "PREMIUM",
    "allowedCourseList": ["subject_id_1", "subject_id_2", ...]
  }
}
```

**Note:** The subscription data includes the `allowedCourseList` which is used on the frontend to filter accessible subjects.

---

### Assignment Submission

#### 2. `submitAssignment` - Submit Assignment Answers
**Description:** Submit answers for an assignment and receive automated grading.

**Schema:**
```graphql
mutation SubmitAssignment(
  $studentId: ID!
  $worksheetId: ID!
  $answers: [AnswerInput!]!
) {
  submitAssignment(
    studentId: $studentId
    worksheetId: $worksheetId
    answers: $answers
  ) {
    _id
    student {
      _id
      name
    }
    worksheetId {
      _id
      title
    }
    status
    score
    answers {
      _id
      questionId
      answer
      isCorrect
    }
    createdAt
    attemptedAt
    updatedAt
  }
}
```

**Input Type - AnswerInput:**
```graphql
input AnswerInput {
  questionId: ID!
  answer: String!
  isCorrect: Boolean
  timeSpent: Float
  explanation: String
}
```

**Variables:**
- `studentId` (required): Student ID (must match authenticated student)
- `worksheetId` (required): Worksheet/assignment ID
- `answers` (required): Array of answer objects

**Returns:** 
- Updated assignment with calculated score
- Individual answer correctness
- Assignment status (updated to "DONE" or "FAILED" based on passing criteria)

**Backend Processing:**
1. Validates answers against correct answers
2. Calculates score percentage
3. Awards points based on performance:
   - Base points for correct answers
   - Difficulty multiplier
   - Time bonus (if completed quickly)
   - Streak bonus (for consecutive correct answers)
4. Updates assignment status
5. Records points transaction

**Points Calculation:**
- Base: 10 points per correct answer
- Difficulty multiplier:
  - Easy: 1.0x
  - Medium: 1.5x
  - Hard: 2.0x
- Time bonus: Up to 20% extra for fast completion
- Streak bonus: Up to 50% extra for consecutive correct answers

#### 3. `updateAssignment` - Update Assignment Metadata
**Description:** Update assignment details (for admin/tutor use, not scoring).

**Schema:**
```graphql
mutation UpdateAssignment(
  $id: ID!
  $input: AssignmentInput!
) {
  updateAssignment(
    id: $id
    input: $input
  )
}
```

**Input Type - AssignmentInput:**
```graphql
input AssignmentInput {
  studentId: ID!
  worksheetId: ID!
  status: String!
  score: Float!
  answers: [AnswerInput!]
}
```

**Variables:**
- `id` (required): Assignment ID
- `input` (required): Assignment update data

**Returns:** Success message

**Note:** This mutation should NOT be used for scoring. Use `submitAssignment` instead. This is primarily for administrative updates.

#### 4. `updateAssignmentScore` - Manual Score Update
**Description:** Manually update an assignment's score (admin/tutor only).

**Schema:**
```graphql
mutation UpdateAssignmentScore(
  $id: ID!
  $score: String!
) {
  updateAssignmentScore(
    id: $id
    score: $score
  )
}
```

**Variables:**
- `id` (required): Assignment ID
- `score` (required): New score value

**Returns:** Success message

**Note:** This is for manual grading overrides, typically not used by students.

---

## Variable Requirements

### Summary Table

| Query/Mutation | Required Variables | Optional Variables | Context Required |
|----------------|-------------------|-------------------|------------------|
| `student` | - | `id` | Yes (if id not provided) |
| `assignments` | `studentId` | `worksheetId` | Yes |
| `assignment` | `id` | - | Yes |
| `fetchGrades` | - | - | Yes |
| `getSubjectAnalytics` | `subjectId` | - | Yes |
| `getPerformanceTrends` | - | `days` | Yes |
| `getRecommendations` | - | - | Yes |
| `getPointsHistory` | - | `limit` | Yes |
| `checkWithdrawalEligibility` | - | - | Yes |
| `getLeaderboard` | - | `topicId`, `limit` | Yes |
| `subjects` | - | `page`, `limit` | No |
| `subject` | `subjectId` | - | No |
| `topics` | - | All | No |
| `topic` | `topicId` | - | No |
| `loginStudent` | `username`, `password` | - | No |
| `submitAssignment` | `studentId`, `worksheetId`, `answers` | - | Yes |

---

## Authentication Context

### How Authentication Works

1. **Login Process:**
   - Student logs in via `loginStudent` mutation
   - Backend validates credentials
   - Backend fetches student's creator's subscription (parent/tutor)
   - Backend generates JWT token containing:
     - Student ID
     - Username
     - Account type
     - Subscription details (including `allowedCourseList`)

2. **Token Storage:**
   - Frontend stores token in cookie named `token`
   - Frontend stores parsed auth data in cookie named `Authdata`

3. **Authenticated Requests:**
   - All queries requiring authentication use the JWT token
   - Backend middleware decodes token and injects into GraphQL context
   - Context includes `_id`, `accountType`, and `subscription`

4. **Context-Based Queries:**
   - Most student queries automatically use `context._id` from the authenticated session
   - No need to manually pass student ID for personal data queries
   - Some queries (like `assignments`) still require explicit `studentId` parameter

### Frontend Implementation

**Extracting Student ID from Cookie:**
```typescript
const getStudentIdFromCookie = (): string | null => {
  const authData = getCookie('Authdata');
  if (authData) {
    try {
      const parsedData = JSON.parse(authData as string);
      return parsedData._id || null;
    } catch (error) {
      console.error('Error parsing Authdata cookie:', error);
      return null;
    }
  }
  return null;
};
```

**Extracting Subscription Data:**
```typescript
const getSubscriptionFromCookie = () => {
  const authData = getCookie('Authdata');
  if (authData) {
    try {
      const parsedData = JSON.parse(authData as string);
      return parsedData.subscription || null;
    } catch (error) {
      return null;
    }
  }
  return null;
};
```

---

## Frontend Hooks Summary

All student data hooks are centralized in `/src/hooks/useStudentData.ts`:

| Hook | Purpose | Parameters |
|------|---------|------------|
| `useStudentProfile()` | Get student details | `studentId?` |
| `useStudentGrades()` | Get performance summary | None |
| `useStudentAssignments()` | Get assignments | `{ worksheetId?, statusFilter? }` |
| `useStudentRecommendations()` | Get AI recommendations | None |
| `useWithdrawalEligibility()` | Check withdrawal status | None |
| `usePerformanceTrends()` | Get trends over time | `days?` |
| `useLeaderboard()` | Get top students | `topicId?, limit?` |
| `usePointsHistory()` | Get points history | `limit?` |
| `useStudentDashboardData()` | Get all dashboard data | None |

**Comprehensive Hook:**
```typescript
useStudentDashboardData()
```
This hook combines multiple data sources for dashboard pages:
- Student profile
- Grades summary
- Recent assignments
- Recommendations
- Withdrawal eligibility
- Performance trends

Returns combined loading/error states and a unified refetch function.

---

## Subscription-Based Access Control

### How Subscription Filtering Works

1. **Backend (Login):**
   ```typescript
   // Fetch subscription with allowedCourseList
   const subscription = await db.Subscription.findOne({
     user: { _id: student.creatorId },
     endDate: { $gte: new Date() },
     status: "active"
   }).populate({
     path: "plan",
     select: "title type allowedCourseList"
   });
   
   // Include in token
   const token = generateToken({
     _id: student._id,
     subscription: subscription?.plan || null,
   });
   ```

2. **Frontend (Courses Page):**
   ```typescript
   // Extract subscription from cookie
   const subscription = parsedAuthData.subscription;
   
   // Filter subjects by allowedCourseList
   const allowedSubjects = allSubjects.filter((subject) => 
     subscription.allowedCourseList.includes(subject._id)
   );
   ```

### Subscription Structure

```typescript
{
  title: string;              // e.g., "Premium Plan"
  type: string;               // e.g., "PREMIUM", "BASIC"
  allowedCourseList: string[]; // Array of subject IDs
}
```

### Access Control Rules

- **No Subscription:** Student sees "No Active Subscription" message
- **Expired Subscription:** Treated as no subscription
- **Active Subscription:** Student can only access subjects in `allowedCourseList`

---

## Best Practices

### 1. Always Use Hooks
```typescript
// ✅ Good
const { grades, loading, error } = useStudentGrades();

// ❌ Bad
const { data, loading, error } = useQuery(FETCH_GRADES);
```

### 2. Handle Loading and Error States
```typescript
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
```

### 3. Pass Required Variables
```typescript
// ✅ Good - studentId automatically included
const { assignments } = useStudentAssignments();

// ❌ Bad - missing required variable
const { data } = useQuery(ASSIGNMENTS);
```

### 4. Use Status Filtering Correctly
```typescript
// ✅ Good - client-side filtering
const { assignments } = useStudentAssignments({ statusFilter: 'DONE' });

// ❌ Bad - backend doesn't support this
const { assignments } = useStudentAssignments({ filter: 'DONE' });
```

### 5. Check Subscription Before Rendering
```typescript
if (!subscription || !subscription.allowedCourseList) {
  return <NoSubscriptionMessage />;
}
```

---

## Conclusion

This document provides a complete reference for all student-related GraphQL operations. Key points:

- ✅ All queries properly documented with schemas and variables
- ✅ Mutations include input types and processing details
- ✅ Frontend hooks centralized for consistency
- ✅ Subscription-based access control explained
- ✅ Authentication flow documented
- ✅ Best practices outlined

For implementation details, refer to:
- Backend: `/edcenta-bc/src/app/student/`
- Frontend Queries: `/edcenta-fc/src/apollo/queries/dashboard.ts`
- Frontend Hooks: `/edcenta-fc/src/hooks/useStudentData.ts`

