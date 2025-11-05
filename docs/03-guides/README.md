# Developer Guides

Step-by-step guides for implementing common features and working with the EdCenta platform.

## 📚 Guides in This Section

### [Student Data Integration](./student-data-integration.md)
**How to fetch and display student data correctly**
- Backend discovery and schema analysis
- Frontend integration patterns
- Data fetching hooks
- Component implementation
- Testing and validation
- Complete integration report

**Use this when**: Implementing any student-facing feature

---

### [Subscription & Access Control](./subscription-filtering.md)
**Implementing subscription-based access control**
- How subscriptions work in EdCenta
- Extracting subscription from JWT token
- Filtering content by `allowedCourseList`
- Handling "no subscription" states
- Security best practices
- Complete implementation guide

**Use this when**: Building features that should respect subscription limits

---

### [Frontend Hooks](./frontend-hooks.md)
**Using React hooks for data fetching**
- Available hooks reference
- Hook usage patterns
- Error handling
- Loading states
- Cache management
- Best practices

**Use this when**: Fetching data in React components

---

### [Testing Guide](./testing.md)
**How to test your code**
- Unit testing
- Integration testing
- E2E testing
- Testing hooks
- Testing GraphQL queries
- Testing strategies

**Use this when**: Writing or reviewing tests

---

## 🎯 Common Scenarios

### Scenario 1: Adding a New Student Feature
**Steps**:
1. Check [Student API Reference](../02-api-reference/student-api.md) for available queries
2. Review [Frontend Hooks](./frontend-hooks.md) for data fetching patterns
3. Follow [Student Data Integration](./student-data-integration.md) for implementation
4. Ensure [Subscription Filtering](./subscription-filtering.md) is applied if needed
5. Write tests following [Testing Guide](./testing.md)

---

### Scenario 2: Displaying Subscription-Limited Content
**Steps**:
1. Read [Subscription & Access Control](./subscription-filtering.md) guide
2. Extract subscription from auth cookie
3. Filter content by `allowedCourseList`
4. Add proper "no access" states
5. Test with different subscription types

---

### Scenario 3: Fetching Student Performance Data
**Steps**:
1. Import `useStudentGrades` from `@/hooks/useStudentData`
2. Use the hook in your component
3. Handle loading and error states
4. Display the data
5. See [Student Data Integration](./student-data-integration.md) for examples

---

## 💡 Quick Tips

### Data Fetching
✅ **DO**: Use centralized hooks from `/hooks/useStudentData.ts`  
❌ **DON'T**: Create new `useQuery` calls directly in components  

### Subscription Filtering
✅ **DO**: Extract subscription from auth cookie  
✅ **DO**: Filter on both frontend and backend  
❌ **DON'T**: Hardcode subject lists  

### Error Handling
✅ **DO**: Handle loading, error, and empty states  
✅ **DO**: Provide clear user feedback  
❌ **DON'T**: Show raw error messages to users  

### Authentication
✅ **DO**: Use helper functions to extract auth data  
✅ **DO**: Validate user role before rendering  
❌ **DON'T**: Manually parse cookies in every component  

---

## 🔗 Related Documentation

- [API Reference](../02-api-reference/) - Complete API documentation
- [Getting Started](../01-getting-started/) - Platform overview
- [Technical Reports](../04-technical-reports/) - Implementation details

---

## 📝 Contributing Guides

When adding new guides:

1. **Focus on "How"**: Guides should be practical and actionable
2. **Include Code Examples**: Show real, working code
3. **Cover Edge Cases**: What could go wrong?
4. **Link Related Docs**: Help readers find related information
5. **Keep Updated**: Update when implementation changes

---

## 🆘 Getting Help

- **Can't find a guide?** Check if it's in [API Reference](../02-api-reference/)
- **Implementation issues?** Review [Technical Reports](../04-technical-reports/recent-fixes.md)
- **Architecture questions?** See [Architecture Overview](../01-getting-started/architecture.md)
- **Still stuck?** Ask the development team

---

**Last Updated**: November 5, 2025  
**Maintained by**: EdCenta Development Team

