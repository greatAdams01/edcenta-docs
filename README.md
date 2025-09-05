# EdCenta Platform

> A comprehensive educational platform facilitating online learning, homework management, and performance tracking across multiple user types.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-4.9+-blue.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/mongodb-5.0+-green.svg)](https://www.mongodb.com/)
[![GraphQL](https://img.shields.io/badge/graphql-16+-pink.svg)](https://graphql.org/)

## 🎯 Overview

EdCenta is a comprehensive educational ecosystem designed to enhance learning outcomes through technology, gamification, and detailed performance tracking. The platform serves students, parents, tutors, schools, and administrators with role-specific features and seamless integration.

## ✨ Key Features

### 🎓 **Multi-Role Platform**
- **Students** - Interactive learning with points-to-cash rewards
- **Parents** - Comprehensive progress monitoring and activity management
- **Tutors** - Virtual classroom tools and content creation
- **Schools** - Institutional management and bulk operations
- **Administrators** - Full platform control and analytics

### 💰 **Points-to-Cash Reward System**
- Students earn 1 point per correct answer
- 1,000 points = ₦500 cash equivalent
- Withdrawal enabled at 5,000 points minimum
- E-wallet integration for seamless payments

### 🎓 **Virtual Classroom (EV Connect)**
- Interactive whiteboard and teaching tools
- One-on-one and group class capabilities
- Screen sharing functionality
- Class scheduling system
- Virtual quiz integration

### 📊 **Advanced Analytics & Performance Tracking**
- Real-time performance analysis per subject/topic
- Best performing topics (>70% scores)
- Areas needing improvement (<70% scores)
- Weekly automated email reports to parents
- Comprehensive scoring dashboards

### 📚 **Comprehensive Content Management**
- Worksheet and assessment creation/assignment
- Subject-based categorization
- National curriculum alignment (WAEC, NECO, JAMB)
- Topic-based organization
- Automatic recommendations based on performance

## 🏗️ Architecture

### **Backend (Node.js + TypeScript)**
```
edcenta-bc/
├── src/
│   ├── databases/
│   │   ├── model/          # Database models
│   │   └── connection/     # MongoDB connection
│   ├── app/               # Feature modules
│   │   ├── user/          # User management
│   │   ├── student/       # Student features
│   │   ├── tutor/         # Tutor features
│   │   ├── school/        # School management
│   │   ├── worksheet/     # Content management
│   │   └── curriculum/    # Educational content
│   ├── common/            # Shared utilities
│   └── types.ts           # TypeScript definitions
```

### **Frontend (Next.js + TypeScript)**
```
edcenta-fc/
├── src/
│   ├── pages/             # Application pages
│   │   ├── student/       # Student dashboard
│   │   ├── parent/        # Parent dashboard
│   │   ├── tutor/         # Tutor dashboard
│   │   └── school/        # School dashboard
│   ├── components/        # Reusable components
│   ├── utils/             # Utility functions
│   └── types.ts           # TypeScript definitions
```

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
- Backend GraphQL: http://localhost:4000/graphql

## 👥 User Roles & Permissions

### **Students**
- Complete worksheets and assessments
- Earn points for correct answers
- Track personal progress
- Access virtual classrooms
- Withdraw earned rewards

### **Parents**
- Monitor child's academic progress
- Assign activities to children
- Approve point withdrawals
- Receive automated progress reports
- Communicate with tutors/schools

### **Tutors**
- Create and manage content
- Conduct virtual classes
- Assign activities to students
- Track student performance
- Manage class schedules

### **Schools**
- Manage multiple tutors and students
- Bulk assignment operations
- Institutional analytics
- Virtual classroom management
- Content distribution

### **Administrators**
- Full platform management
- User account control
- Content moderation
- System configuration
- Analytics and reporting

## 📊 Database Schema

### **Core Models**
- **User** - Authentication and common data
- **Student** - Student-specific information
- **Parent** - Parent/guardian management
- **Tutor** - Educator profiles and credentials
- **School** - Institutional management
- **WorkSheet** - Educational content
- **Question** - Assessment items
- **Assessment** - Tests and quizzes
- **Assignment** - Student tasks
- **Points** - Reward system
- **Wallet** - Financial management

### **Key Relationships**
```
School → Tutors → Students
Parent → Students
Student → Assignments → WorkSheets → Questions
Student → Points → Wallet
```

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

### **Code Structure**
- **TypeScript** for type safety
- **GraphQL** for API communication
- **MongoDB** with Mongoose ODM
- **Next.js** for frontend framework
- **Tailwind CSS** for styling

## 📈 Current Status

### **✅ Completed Features**
- User authentication and management
- Basic student, tutor, parent, school models
- Worksheet and question management
- Assessment creation and attempts
- Basic assignment system
- Wallet and transaction management

### **🚧 In Development**
- Points-to-cash reward system
- Enhanced user verification
- Communication system
- Performance analytics
- Virtual classroom features

### **📋 Planned Features**
- Learning paths and curriculum
- Gamification system
- Advanced analytics
- Mobile applications
- API integrations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📚 Documentation

- [System Architecture](edcenta-system-architecture.md) - Detailed system design
- [Project Roadmap](edcenta-project-roadmap.md) - Development progress and plans
- [API Documentation](docs/api.md) - GraphQL API reference
- [Database Schema](docs/database.md) - Database design and relationships
- [Deployment Guide](docs/deployment.md) - Production deployment instructions

## 🔒 Security

- Role-based access control
- Email verification for shared access links
- Screenshot/copy protection for worksheets
- Secure payment processing
- Account access controls
- Data encryption in transit and at rest

## 📞 Support

- **Documentation**: [Project Wiki](https://github.com/your-org/edcenta/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-org/edcenta/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/edcenta/discussions)
- **Email**: support@edcenta.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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
