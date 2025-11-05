# API Reference

Complete API documentation for the EdCenta platform.

## 📚 Documents in This Section

### [Student API Reference](./student-api.md)
**Complete reference for all student-related APIs**
- 14 Queries (profile, assignments, grades, analytics, points, leaderboard)
- 4 Mutations (login, submit assignment, update)
- Variable requirements
- Authentication context
- Frontend hooks usage
- Best practices

### [GraphQL Schema](./graphql-schema.md)
- Complete type definitions
- Query specifications
- Mutation specifications
- Input types
- Custom scalars

### [Authentication](./authentication.md)
- Login flow for all user types
- JWT token structure
- Session management
- Authorization levels
- Protected routes

### [Error Handling](./error-handling.md)
- Error codes and meanings
- GraphQL error format
- Frontend error handling
- Common errors and solutions

## 🔍 Quick Reference

### Most Used Student APIs

#### Queries
```graphql
# Get student assignments
assignments(studentId: String, worksheetId: String)

# Get performance summary
fetchGrades

# Get points history
getPointsHistory(limit: Int)

# Check withdrawal eligibility
checkWithdrawalEligibility
```

#### Mutations
```graphql
# Login
loginStudent(username: String!, password: String!)

# Submit assignment
submitAssignment(studentId: ID!, worksheetId: ID!, answers: [AnswerInput!]!)
```

### Authentication Header
```typescript
Authorization: Bearer <JWT_TOKEN>
```

### Frontend Hook Pattern
```typescript
import { useStudentGrades } from '@/hooks/useStudentData';

const { grades, loading, error } = useStudentGrades();
```

## 📖 How to Use This Section

### For Frontend Developers
1. Start with [Student API Reference](./student-api.md) to see all available APIs
2. Check [Authentication](./authentication.md) for auth implementation
3. Review [Error Handling](./error-handling.md) for proper error management

### For Backend Developers
1. Review [GraphQL Schema](./graphql-schema.md) for type definitions
2. Check [Student API Reference](./student-api.md) for resolver specifications
3. Understand [Authentication](./authentication.md) for middleware implementation

### For Integration
1. Read [Authentication](./authentication.md) first
2. Then [Student API Reference](./student-api.md) for endpoints
3. Finally [Error Handling](./error-handling.md) for edge cases

## 🎯 Common Tasks

### Task: Fetch Student Assignments
```typescript
// Using the hook (recommended)
const { assignments, loading, error } = useStudentAssignments({
  statusFilter: 'DONE'
});

// Direct GraphQL query
query Assignments($studentId: String!) {
  assignments(studentId: $studentId) {
    data {
      _id
      worksheetId { title }
      status
      score
    }
  }
}
```

### Task: Submit Assignment
```typescript
const [submitAssignment] = useMutation(SUBMIT_ASSIGNMENT);

await submitAssignment({
  variables: {
    studentId: student._id,
    worksheetId: worksheet._id,
    answers: [
      { questionId: '123', answer: 'A', timeSpent: 30 }
    ]
  }
});
```

### Task: Check Points Balance
```typescript
const { eligibility, loading } = useWithdrawalEligibility();

// eligibility.currentPoints - current point balance
// eligibility.isEligible - can withdraw?
// eligibility.cashEquivalent - naira value
```

## 🔗 Related Documentation

- [Student Data Integration Guide](../03-guides/student-data-integration.md) - How to use student APIs
- [Subscription Filtering Guide](../03-guides/subscription-filtering.md) - Access control
- [Frontend Hooks Guide](../03-guides/frontend-hooks.md) - Using React hooks
- [Testing Guide](../03-guides/testing.md) - Testing API integrations

## 📝 API Conventions

### Naming Conventions
- **Queries**: `getX`, `fetchX`, `checkX` (e.g., `getLeaderboard`, `fetchGrades`)
- **Mutations**: `createX`, `updateX`, `deleteX`, `submitX` (e.g., `submitAssignment`)
- **Types**: PascalCase (e.g., `Student`, `Assignment`)
- **Fields**: camelCase (e.g., `studentId`, `worksheetId`)

### Response Format
```json
{
  "data": {
    "queryName": {
      // Query result
    }
  }
}
```

### Error Format
```json
{
  "errors": [
    {
      "message": "Error message",
      "extensions": {
        "code": "ERROR_CODE"
      }
    }
  ]
}
```

### Pagination Format
```json
{
  "data": [...],
  "totalRecord": 100,
  "totalPage": 10
}
```

## ⚡ Performance Tips

1. **Use Proper Hooks**: Always use centralized hooks from `/hooks/useStudentData.ts`
2. **Cache Policy**: Most queries use `cache-and-network` for fresh data
3. **Skip Unnecessary Queries**: Use `skip` parameter when data isn't needed
4. **Batch Requests**: Apollo Client automatically batches requests
5. **Error Boundaries**: Wrap components in error boundaries

## 🛡️ Security Best Practices

1. **Never expose JWT tokens** in client-side code
2. **Always validate user role** before showing UI
3. **Use authenticated hooks** that automatically include studentId
4. **Filter subscription access** on frontend and backend
5. **Handle auth errors** with proper redirects

## 📊 API Status

### ✅ Production Ready
- Student authentication
- Assignment queries and submission
- Grades and analytics
- Points system
- Leaderboard

### 🚧 Beta
- Advanced analytics
- Recommendations (AI-powered)

### 📋 Planned
- Real-time notifications
- Video lessons API
- Live tutoring sessions API

---

**Need Help?**
- Check [Student API Reference](./student-api.md) for complete documentation
- See [Common Errors](./error-handling.md) for troubleshooting
- Review [Integration Guide](../03-guides/student-data-integration.md) for examples

