# EdCenta Platform

> A comprehensive educational platform facilitating online learning, homework management, and performance tracking across multiple user types.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-4.9+-blue.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/mongodb-5.0+-green.svg)](https://www.mongodb.com/)
[![GraphQL](https://img.shields.io/badge/graphql-16+-pink.svg)](https://graphql.org/)

## 🎯 Overview

EdCenta is a comprehensive educational ecosystem designed to enhance learning outcomes through technology, gamification, and detailed performance tracking. The platform serves students, parents, tutors, schools, and administrators with role-specific features and seamless integration.

## 📊 Current Status: **45% Complete** ✅

### ✅ **Infrastructure Complete**
- **Backend**: Building and running successfully
- **Database**: MongoDB with Mongoose ODM
- **API**: GraphQL with automated schema validation
- **Architecture**: Domain-driven design implemented
- **Critical Issues**: All resolved (Plans/Subscriptions integration fixed)

### ✅ **Onboarding System Complete**
- **Multi-step onboarding**: 6-step process for all user types
- **Role-specific verification**: Different flows for SCHOOL/TUTOR/PARENT
- **Dynamic plan selection**: Database-driven subscription plans
- **Account creation flow**: Complete user registration process
- **Frontend integration**: Seamless step-by-step UI

### 🚧 **In Progress**
- Integration testing and validation
- Documentation updates
- Core business models development

### 📋 **Next Phase**
- Student Points System (core business model)
- Enhanced User Management
- Communication System
- Performance Analytics

---

## ✨ Key Features

### 🎓 **Multi-Role Platform**
- **Students** - Interactive learning with points-to-cash rewards
- **Parents** - Comprehensive progress monitoring and activity management
- **Tutors** - Virtual classroom tools and content creation
- **Schools** - Institutional management and bulk operations
- **Administrators** - Full platform control and analytics

### 💰 **Points-to-Cash Reward System** (Planned)
- Students earn 1 point per correct answer
- 1,000 points = ₦500 cash equivalent
- Withdrawal enabled at 5,000 points minimum
- E-wallet integration for seamless payments

### 🎓 **Virtual Classroom (EV Connect)** (Planned)
- Interactive whiteboard and teaching tools
- One-on-one and group class capabilities
- Screen sharing functionality
- Class scheduling system
- Virtual quiz integration

### 📊 **Advanced Analytics & Performance Tracking** (Planned)
- Real-time performance analysis per subject/topic
- Best performing topics (>70% scores)
- Areas needing improvement (<70% scores)
- Weekly automated email reports to parents
- Comprehensive scoring dashboards

---

## 🏗️ Architecture

### **Backend Structure (Domain-Driven Design)**
```
edcenta-bc/
├── src/
│   ├── core/                    # Core abstractions
│   │   ├── entities/           # BaseEntity
│   │   ├── repositories/       # BaseRepository
│   │   └── services/           # BaseService
│   ├── infrastructure/         # Technical concerns
│   │   ├── database/          # DatabaseConnection
│   │   └── graphql/           # SchemaValidator
│   ├── shared/                # Common utilities
│   │   ├── types/             # DomainTypes
│   │   └── utils/             # ValidationUtils
│   ├── app/                   # GraphQL modules
│   │   ├── user/              # User management
│   │   ├── student/           # Student features
│   │   ├── tutor/             # Tutor features
│   │   ├── school/            # School management
│   │   ├── plan/              # Subscription plans
│   │   ├── subscription/      # User subscriptions
│   │   ├── worksheet/         # Content management
│   │   ├── curriculum/        # Educational content
│   │   └── transaction/       # Payment processing
│   ├── databases/             # Data layer
│   │   ├── model/             # Mongoose models
│   │   └── connection/        # MongoDB connection
│   └── common/                # Shared utilities
```

### **Frontend Structure (Next.js)**
```
edcenta-fc/
├── src/
│   ├── pages/                 # Application pages
│   │   ├── student/           # Student dashboard
│   │   ├── parent/            # Parent dashboard
│   │   ├── tutor/             # Tutor dashboard
│   │   └── school/            # School dashboard
│   ├── components/            # Reusable components
│   ├── utils/                 # Utility functions
│   └── types.ts               # TypeScript definitions
```

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+
- MongoDB 5.0+
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/your-org/edcenta.git
cd edcenta
```

2. **Install dependencies**
```bash
# Backend
cd edcenta-bc
npm install

# Frontend
cd ../edcenta-fc
npm install
```

3. **Environment Setup**
```bash
# Backend environment
cp edcenta-bc/.env.example edcenta-bc/.env
# Edit edcenta-bc/.env with your configuration

# Frontend environment
cp edcenta-fc/.env.example edcenta-fc/.env.local
# Edit edcenta-fc/.env.local with your configuration
```

4. **Start the development servers**
```bash
# Terminal 1 - Backend
cd edcenta-bc
npm run dev

# Terminal 2 - Frontend
cd edcenta-fc
npm run dev
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend GraphQL: http://localhost:8080/graphql

---

## 📊 Database Schema

### **Core Models**
- **User** - Authentication and common data
- **Student** - Student-specific information
- **Tutor** - Educator profiles and credentials
- **School** - Institutional management
- **Plan** - Subscription plans
- **Subscription** - User subscriptions
- **WorkSheet** - Educational content
- **Question** - Assessment items
- **Assessment** - Tests and quizzes
- **Assignment** - Student tasks
- **Wallet** - Financial management
- **Transaction** - Payment processing

### **Key Relationships**
```
School → Tutors → Students
Parent → Students
Student → Assignments → WorkSheets → Questions
Student → Subscriptions → Plans
Student → Wallet → Transactions
```

---

## 🔧 Development

### **Available Scripts**

#### **Backend (edcenta-bc)**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run tests
npm run lint         # Run linter
```

#### **Frontend (edcenta-fc)**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run type-check   # TypeScript type checking
```

### **Code Quality**
- **TypeScript** for type safety
- **GraphQL** for API communication
- **MongoDB** with Mongoose ODM
- **Domain-Driven Design** architecture
- **Automated Schema Validation**
- **Comprehensive Error Handling**

---

## 📈 Development Progress

### **Phase 1: Infrastructure & Architecture** ✅ **COMPLETED**
- [x] **Critical Issues Resolved**
  - Plans/Subscriptions integration fixed
  - TypeScript build errors resolved
  - Missing dependencies installed
  - Domain structure implemented

- [x] **Domain-Driven Architecture**
  - Core layer: BaseEntity, BaseRepository, BaseService
  - Infrastructure layer: DatabaseConnection, SchemaValidator
  - Shared layer: Types, utilities, validation helpers

- [x] **GraphQL Schema Management**
  - Automated schema validation
  - All modules properly integrated
  - Comprehensive error checking

### **Phase 1.5: Onboarding System** ✅ **COMPLETED**
- [x] **Multi-Step Onboarding Process**
  - 6-step onboarding flow: Basic Info → Role Selection → Profile Creation → Plan Selection → Verification → Review
  - Dynamic step generation based on account type
  - Real-time form validation and progress tracking

- [x] **Role-Specific Onboarding**
  - SCHOOL: School profile setup with institutional details
  - TUTOR: Tutor profile with qualifications and teaching classes
  - PARENT: Parent profile with occupation and emergency contacts
  - Dynamic field rendering based on role requirements

- [x] **Subscription Integration**
  - Database-driven plan selection from admin-created plans
  - Currency formatting in Naira (₦)
  - Billing cycle selection (Monthly/Quarterly/Yearly)
  - School-specific student count input

- [x] **Frontend Integration**
  - Seamless step-by-step UI with progress bar
  - Dynamic form field rendering (text, email, radio, multiselect, etc.)
  - Real-time validation and error handling
  - Responsive design for all device types

### **Phase 2: Core Business Models** 🚧 **NEXT**
- [ ] **Student Points System**
  - Points tracking and calculation
  - Withdrawal request system
  - Parent approval workflow
  - Payment processing integration

- [ ] **Enhanced User Management**
  - User model refactoring
  - Role-specific models
  - Verification systems
  - Parent-Student relationships

### **Phase 3: Communication & Analytics** 📋 **PLANNED**
- [ ] **Communication System**
  - Real-time messaging
  - Notification system
  - Email notifications

- [ ] **Performance Analytics**
  - Real-time performance tracking
  - Automated reports
  - Parent dashboards

---

## 🚨 Critical Issues Status

### ✅ **Resolved Issues**
- [x] **Plans/Subscriptions Integration** - Now properly integrated into main GraphQL schema
- [x] **TypeScript Build Errors** - Backend builds successfully
- [x] **Missing Dependencies** - All required packages installed
- [x] **Domain Structure** - Clean architecture implemented
- [x] **Onboarding System** - Complete multi-step user registration process
- [x] **Role-Specific Verification** - Different onboarding flows for each user type
- [x] **Frontend Step Management** - Dynamic step loading and validation

### ⚠️ **Remaining Critical Issues**
- [ ] **No Points System** - Core business model missing
- [ ] **No Communication** - Users can't interact
- [ ] **No Analytics** - Parents can't track progress

---

## 🎯 Success Metrics

### **Infrastructure Success** ✅ **ACHIEVED**
- [x] Backend builds without errors
- [x] Server starts successfully
- [x] All GraphQL modules accessible
- [x] Database connections stable
- [x] Schema validation working
- [x] Domain structure established

### **Onboarding Success** ✅ **ACHIEVED**
- [x] Multi-step onboarding process working
- [x] Role-specific verification flows implemented
- [x] Dynamic plan selection from database
- [x] Frontend step management and validation
- [x] Account creation and user registration complete

### **Next Phase Goals**
- [ ] Student points system implemented
- [ ] Enhanced user management
- [ ] Communication system working
- [ ] Performance analytics active

---

## 👥 User Roles & Permissions

### **Students**
- Complete worksheets and assessments
- Earn points for correct answers (planned)
- Track personal progress
- Access virtual classrooms (planned)
- Withdraw earned rewards (planned)

### **Parents**
- Monitor child's academic progress
- Assign activities to children
- Approve point withdrawals (planned)
- Receive automated progress reports (planned)
- Communicate with tutors/schools (planned)

### **Tutors**
- Create and manage content
- Conduct virtual classes (planned)
- Assign activities to students
- Track student performance
- Manage class schedules (planned)

### **Schools**
- Manage multiple tutors and students
- Bulk assignment operations
- Institutional analytics (planned)
- Virtual classroom management (planned)
- Content distribution

### **Administrators**
- Full platform management
- User account control
- Content moderation
- System configuration
- Analytics and reporting

---

## 🔒 Security

- Role-based access control
- JWT-based authentication
- Email verification for shared access links
- Screenshot/copy protection for worksheets (planned)
- Secure payment processing (planned)
- Account access controls
- Data encryption in transit and at rest

---

## 📚 Documentation

### **Architecture Documentation**
- [Domain Structure Guide](edcenta-bc/src/DOMAIN_STRUCTURE.md) - Detailed architecture documentation
- [Critical Issues](CRITICAL_ISSUES.md) - Resolved and remaining issues
- [Integration Validation](INTEGRATION_VALIDATION.md) - Development guidelines

### **Development Resources**
- [Project Roadmap](edcenta-project-roadmap.md) - Development progress and plans
- [Quick Checklist](edcenta-quick-checklist.md) - Daily development tasks
- [Implementation Status](IMPLEMENTATION_STATUS.md) - Comprehensive status report

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### **Code Standards**
- Follow TypeScript best practices
- Use domain-driven design patterns
- Write comprehensive tests
- Update documentation
- Follow Git commit conventions

---

## 📞 Support

- **Documentation**: [Project Wiki](https://github.com/your-org/edcenta/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-org/edcenta/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/edcenta/discussions)
- **Email**: support@edcenta.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Educational content providers
- Open source contributors
- Beta testing community
- Development team

---

**Built with ❤️ for better education**

[![GitHub stars](https://img.shields.io/github/stars/your-org/edcenta?style=social)](https://github.com/your-org/edcenta)
[![GitHub forks](https://img.shields.io/github/forks/your-org/edcenta?style=social)](https://github.com/your-org/edcenta)
[![GitHub watchers](https://img.shields.io/github/watchers/your-org/edcenta?style=social)](https://github.com/your-org/edcenta)