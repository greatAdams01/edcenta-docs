# EdCenta Documentation

Welcome to the EdCenta platform documentation! This guide will help you understand, develop, and maintain the EdCenta educational platform.

## 📚 Table of Contents

### [1. Getting Started](./01-getting-started/)
Start here if you're new to the project
- [Project Overview](./01-getting-started/project-overview.md) - What EdCenta is and how it works
- [Architecture Overview](./01-getting-started/architecture.md) - System architecture and design
- [Quick Start Guide](./01-getting-started/quick-start.md) - Get up and running quickly
- [Development Setup](./01-getting-started/development-setup.md) - Setting up your development environment

### [2. API Reference](./02-api-reference/)
Complete API documentation for developers
- [Student API Reference](./02-api-reference/student-api.md) - All student queries and mutations
- [GraphQL Schema](./02-api-reference/graphql-schema.md) - Complete GraphQL schema documentation
- [Authentication](./02-api-reference/authentication.md) - Authentication and authorization
- [Error Handling](./02-api-reference/error-handling.md) - Error codes and handling

### [3. Developer Guides](./03-guides/)
Step-by-step guides for common tasks
- [Working with Student Data](./03-guides/student-data-integration.md) - How to fetch and display student data
- [Subscription & Access Control](./03-guides/subscription-filtering.md) - Implementing subscription-based access
- [Testing Guide](./03-guides/testing.md) - How to test your code
- [Frontend Hooks](./03-guides/frontend-hooks.md) - Using React hooks for data fetching

### [4. Technical Reports](./04-technical-reports/)
Detailed reports on fixes and implementations
- [Recent Fixes](./04-technical-reports/recent-fixes.md) - Latest bug fixes and improvements
- [Integration Reports](./04-technical-reports/integration-reports.md) - System integration documentation
- [Performance Improvements](./04-technical-reports/performance-improvements.md) - Performance optimizations

### [5. Project Information](./05-project-info/)
Project scope, structure, and organization
- [Project Scope](./05-project-info/scope.md) - What's in scope and what's not
- [Project Structure](./05-project-info/structure.md) - Codebase organization
- [Models & Database](./05-project-info/models.md) - Database schema and models

---

## 🚀 Quick Links

### For New Developers
1. Read [Project Overview](./01-getting-started/project-overview.md)
2. Follow [Development Setup](./01-getting-started/development-setup.md)
3. Review [Project Structure](./05-project-info/structure.md)
4. Start with [Quick Start Guide](./01-getting-started/quick-start.md)

### For Frontend Developers
1. [Student API Reference](./02-api-reference/student-api.md) - All available queries/mutations
2. [Frontend Hooks](./03-guides/frontend-hooks.md) - How to use data fetching hooks
3. [Authentication](./02-api-reference/authentication.md) - Auth flow and implementation
4. [Subscription Filtering](./03-guides/subscription-filtering.md) - Access control

### For Backend Developers
1. [GraphQL Schema](./02-api-reference/graphql-schema.md) - Complete schema reference
2. [Architecture Overview](./01-getting-started/architecture.md) - System design
3. [Models & Database](./05-project-info/models.md) - Data models
4. [Project Structure](./05-project-info/structure.md) - Code organization

### For QA/Testing
1. [Testing Guide](./03-guides/testing.md) - How to test the application
2. [Student Data Integration](./03-guides/student-data-integration.md) - Test scenarios
3. [Recent Fixes](./04-technical-reports/recent-fixes.md) - What was fixed recently

---

## 📖 Documentation Standards

### When to Update Docs
- ✅ Adding new features or APIs
- ✅ Fixing bugs that affect behavior
- ✅ Changing architecture or design patterns
- ✅ Updating dependencies or configurations

### How to Write Good Docs
1. **Be Clear**: Use simple language, avoid jargon
2. **Be Complete**: Include all necessary information
3. **Be Concise**: Don't repeat yourself
4. **Use Examples**: Show code examples where helpful
5. **Keep Updated**: Update docs when code changes

### Documentation Structure
```
docs/
├── README.md (This file - master index)
├── 01-getting-started/
│   ├── README.md
│   ├── project-overview.md
│   ├── architecture.md
│   ├── quick-start.md
│   └── development-setup.md
├── 02-api-reference/
│   ├── README.md
│   ├── student-api.md
│   ├── graphql-schema.md
│   ├── authentication.md
│   └── error-handling.md
├── 03-guides/
│   ├── README.md
│   ├── student-data-integration.md
│   ├── subscription-filtering.md
│   ├── testing.md
│   └── frontend-hooks.md
├── 04-technical-reports/
│   ├── README.md
│   ├── recent-fixes.md
│   ├── integration-reports.md
│   └── performance-improvements.md
└── 05-project-info/
    ├── README.md
    ├── scope.md
    ├── structure.md
    └── models.md
```

---

## 🎯 Key Concepts

### User Roles
- **Admin**: Platform administrators with full access
- **Tutor/Parent**: Create and manage students, assign work
- **Student**: Complete assignments, view progress

### Authentication Flow
1. User logs in (Student: `loginStudent`, Others: `loginUser`)
2. Backend generates JWT token with user data and subscription info
3. Frontend stores token in cookies
4. All subsequent requests include token for authentication

### Subscription Model
- Tutors/Parents purchase subscription plans
- Plans include `allowedCourseList` (subjects student can access)
- Students inherit subscription from their creator
- Frontend filters content based on subscription

### Data Flow
```
Frontend (React/Next.js)
    ↓ GraphQL Query
Apollo Client
    ↓ HTTP Request (with JWT)
Backend (Node.js/Express)
    ↓ GraphQL Resolver
Service Layer
    ↓ Database Query
MongoDB
```

---

## 🔧 Tech Stack

### Frontend
- **Framework**: Next.js 13 (React)
- **State Management**: Apollo Client (GraphQL)
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Heroicons
- **Animation**: Framer Motion

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **API**: GraphQL (Apollo Server)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Payments**: Paystack, Flutterwave

---

## 📞 Getting Help

### Documentation Issues
If you find errors or gaps in documentation:
1. Check if the issue is already documented in [Technical Reports](./04-technical-reports/)
2. Review [Recent Fixes](./04-technical-reports/recent-fixes.md) for updates
3. Ask the development team

### Code Issues
If you encounter code issues:
1. Check [Error Handling](./02-api-reference/error-handling.md) guide
2. Review [Recent Fixes](./04-technical-reports/recent-fixes.md)
3. Look at test files for examples
4. Ask the development team

### Feature Requests
Check [Project Scope](./05-project-info/scope.md) to see if it's in scope, then discuss with the team.

---

## 🔄 Recent Updates

### November 5, 2025
- ✅ Fixed missing `studentId` in assignments query
- ✅ Implemented subscription-based subject filtering
- ✅ Added `usePointsHistory` hook
- ✅ Removed all dummy data from student components
- ✅ Reorganized documentation structure

See [Recent Fixes](./04-technical-reports/recent-fixes.md) for details.

---

## 📝 Contributing to Docs

When adding or updating documentation:

1. **Choose the Right Category**:
   - Getting Started: Introductory content
   - API Reference: Technical specs and references
   - Guides: How-to articles
   - Technical Reports: Implementation details and fixes
   - Project Info: Project-level information

2. **Use Clear Titles**: Make it obvious what the document covers

3. **Include Examples**: Show, don't just tell

4. **Keep It Updated**: Update docs when code changes

5. **Link Related Docs**: Help users find related information

---

## 📄 License

This documentation is part of the EdCenta platform. All rights reserved.

---

**Last Updated**: November 5, 2025  
**Version**: 1.0.0  
**Maintained by**: EdCenta Development Team
