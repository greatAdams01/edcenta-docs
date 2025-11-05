# Project Information

High-level project information, scope, and organization.

## 📚 Documents in This Section

### [Project Scope](./scope.md)
**What's in scope and what's not**
- Feature boundaries
- User roles and permissions
- Technical constraints
- Out of scope items
- Future considerations

**Use this when**: Planning new features or understanding project limits

---

### [Project Structure](./structure.md)
**How the codebase is organized**
- Backend structure (`edcenta-bc/`)
- Frontend structure (`edcenta-fc/`)
- Folder conventions
- File naming patterns
- Module organization

**Use this when**: Navigating the codebase or adding new files

---

### [Models & Database](./models.md)
**Database schema and models**
- MongoDB collections
- Model relationships
- Schema comparisons
- Data integrity rules
- Migration history

**Use this when**: Working with database or understanding data models

---

## 🎯 Quick Reference

### Repository Structure
```
edcenta-docs/
├── edcenta-bc/          # Backend
│   ├── src/
│   │   ├── app/         # Feature modules
│   │   ├── common/      # Shared code
│   │   ├── databases/   # Models
│   │   └── types.ts     # Types
│   └── package.json
│
├── edcenta-fc/          # Frontend
│   ├── src/
│   │   ├── apollo/      # GraphQL
│   │   ├── components/  # UI
│   │   ├── hooks/       # Data hooks
│   │   ├── pages/       # Routes
│   │   └── utils/       # Utilities
│   └── package.json
│
└── docs/                # Documentation
    ├── 01-getting-started/
    ├── 02-api-reference/
    ├── 03-guides/
    ├── 04-technical-reports/
    └── 05-project-info/ # ← You are here
```

### Key Modules

#### Backend
- `app/student/` - Student management
- `app/worksheet/` - Content management  
- `app/subscription/` - Billing
- `app/user/` - User accounts
- `common/` - Utilities

#### Frontend
- `pages/student/` - Student UI
- `pages/dashboard/` - Tutor/Parent UI
- `pages/admin/` - Admin UI
- `hooks/` - Data fetching
- `components/` - Reusable UI

---

## 📊 Technology Stack

### Backend
- Node.js + TypeScript
- Express.js
- GraphQL (Apollo Server)
- MongoDB + Mongoose
- JWT Authentication

### Frontend
- Next.js 13 (React 18)
- TypeScript
- Apollo Client
- Tailwind CSS
- Headless UI

---

## 🔗 Related Documentation

- [Architecture Overview](../01-getting-started/architecture.md) - System design
- [Project Overview](../01-getting-started/project-overview.md) - What EdCenta is
- [Development Setup](../01-getting-started/development-setup.md) - Getting started

---

## 📝 Maintenance

### Updating Project Info

**Project Scope** should be updated when:
- Adding new user roles
- Changing feature boundaries
- Adjusting technical constraints

**Project Structure** should be updated when:
- Restructuring folders
- Adding new modules
- Changing naming conventions

**Models & Database** should be updated when:
- Adding new collections
- Modifying schemas
- Creating relationships

---

## 🎯 Project Metrics

### Codebase Size (Approximate)
- **Backend**: ~15,000 lines of TypeScript
- **Frontend**: ~20,000 lines of TypeScript/TSX
- **Documentation**: ~10,000 lines of Markdown

### Module Count
- **Backend Modules**: 12+ feature modules
- **Frontend Pages**: 30+ pages
- **React Components**: 50+ components
- **GraphQL Queries**: 30+ queries
- **GraphQL Mutations**: 20+ mutations

### Database Collections
- Users
- Students
- Assignments
- Worksheets
- Questions
- Subscriptions
- Transactions
- Points
- And more...

---

**Last Updated**: November 5, 2025  
**Maintained by**: EdCenta Development Team

