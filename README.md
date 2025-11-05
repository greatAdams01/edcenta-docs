# EdCenta Platform

Welcome to EdCenta - a comprehensive educational platform connecting tutors, parents, and students in an interactive learning environment.

## 🚀 Quick Start

👉 **Start here**: [Complete Documentation](./docs/README.md)

---

## 📚 Documentation

All documentation has been reorganized for easy navigation:

### 🏠 [Master Documentation Index](./docs/README.md)
Your starting point for all EdCenta documentation

### 📖 Main Sections

1. **[Getting Started](./docs/01-getting-started/)** - Project overview, architecture, setup
2. **[API Reference](./docs/02-api-reference/)** - Complete API documentation
3. **[Developer Guides](./docs/03-guides/)** - How-to guides and tutorials
4. **[Technical Reports](./docs/04-technical-reports/)** - Implementation details and fixes
5. **[Project Information](./docs/05-project-info/)** - Scope, structure, and models

---

## 🎯 Quick Links by Role

### 👨‍💻 **New Developers**
1. [Project Overview](./docs/01-getting-started/project-overview.md) - Understand what EdCenta is
2. [Architecture](./docs/01-getting-started/architecture.md) - How it's built
3. [Development Setup](./docs/01-getting-started/development-setup.md) - Get started

### 🎨 **Frontend Developers**
1. [Student API Reference](./docs/02-api-reference/student-api.md) - Available APIs
2. [Frontend Hooks](./docs/03-guides/frontend-hooks.md) - Data fetching patterns
3. [Student Data Integration](./docs/03-guides/student-data-integration.md) - Implementation guide

### ⚙️ **Backend Developers**
1. [GraphQL Schema](./docs/02-api-reference/graphql-schema.md) - Complete schema
2. [Architecture](./docs/01-getting-started/architecture.md) - System design
3. [Models & Database](./docs/05-project-info/models.md) - Database schema

### 🧪 **QA/Testing**
1. [Testing Guide](./docs/03-guides/testing.md) - How to test
2. [Recent Fixes](./docs/04-technical-reports/recent-fixes.md) - What was fixed

---

## 🏗️ Repository Structure

```
edcenta-docs/
├── docs/                    # 📚 All documentation (START HERE!)
│   ├── README.md           # Master index
│   ├── 01-getting-started/
│   ├── 02-api-reference/
│   ├── 03-guides/
│   ├── 04-technical-reports/
│   └── 05-project-info/
│
├── edcenta-bc/             # 🔧 Backend (Node.js + GraphQL)
│   └── src/
│       ├── app/            # Feature modules
│       ├── common/         # Shared utilities
│       ├── databases/      # MongoDB models
│       └── types.ts        # TypeScript types
│
└── edcenta-fc/             # 🎨 Frontend (Next.js + React)
    └── src/
        ├── apollo/         # GraphQL queries/mutations
        ├── components/     # React components
        ├── hooks/          # Custom hooks
        ├── pages/          # Next.js pages
        └── utils/          # Utilities
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 13 (React 18)
- **Language**: TypeScript
- **Data**: Apollo Client (GraphQL)
- **Styling**: Tailwind CSS
- **UI**: Headless UI, Heroicons

### Backend
- **Runtime**: Node.js (TypeScript)
- **Framework**: Express.js
- **API**: GraphQL (Apollo Server)
- **Database**: MongoDB + Mongoose
- **Auth**: JWT

---

## 🔧 Development

### Prerequisites
- Node.js 16+
- MongoDB
- npm or yarn

### Quick Setup
```bash
# Backend
cd edcenta-bc
npm install
npm run dev

# Frontend
cd edcenta-fc
npm install
npm run dev
```

**Full setup guide**: [Development Setup](./docs/01-getting-started/development-setup.md)

---

## 📝 Recent Updates

### November 5, 2025
- ✅ Complete documentation reorganization
- ✅ Fixed GraphQL variables in student queries
- ✅ Implemented subscription-based filtering
- ✅ Added `usePointsHistory` hook
- ✅ Removed all dummy data from student components

**Details**: [Recent Fixes](./docs/04-technical-reports/recent-fixes.md)

---

## 🤝 Contributing

1. Read [Project Scope](./docs/05-project-info/scope.md)
2. Review [Project Structure](./docs/05-project-info/structure.md)
3. Follow existing patterns
4. Update documentation
5. Write tests

---

## 📞 Getting Help

### Documentation
- 🏠 Start at [Master Index](./docs/README.md)
- 📖 Check relevant sections
- 🔍 Use table of contents

### Code Issues
- Review [Recent Fixes](./docs/04-technical-reports/recent-fixes.md)
- Check [API Reference](./docs/02-api-reference/)
- See [Testing Guide](./docs/03-guides/testing.md)

---

## 📄 License

All rights reserved © EdCenta Platform

---

## 🎯 What is EdCenta?

EdCenta is an educational platform that enables:

✅ **For Students**
- Complete interactive assignments
- Track progress and performance
- Earn points and rewards
- Access personalized learning

✅ **For Tutors/Parents**
- Manage multiple students
- Assign worksheets
- Monitor progress
- Control subscriptions

✅ **For Administrators**
- Manage platform content
- Create subscription plans
- Monitor system health

---

## 🔗 Important Links

- 📚 [Complete Documentation](./docs/README.md)
- 🚀 [Getting Started Guide](./docs/01-getting-started/)
- 📖 [API Reference](./docs/02-api-reference/)
- 📝 [Developer Guides](./docs/03-guides/)
- ℹ️ [Project Information](./docs/05-project-info/)

---

**Last Updated**: November 5, 2025  
**Version**: 1.0.0  
**Maintained by**: EdCenta Development Team

---

## ⭐ Start Here

👉 **[Go to Documentation](./docs/README.md)**

Everything you need to know about EdCenta is organized and waiting for you in the docs folder!
