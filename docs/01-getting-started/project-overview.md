# EdCenta Project Overview

## What is EdCenta?

EdCenta is a comprehensive educational platform that connects tutors, parents, and students in an interactive learning environment. The platform enables personalized education through:

- **Assignment Management**: Tutors can create and assign worksheets to students
- **Automated Grading**: Instant feedback on student performance
- **Progress Tracking**: Detailed analytics on student learning
- **Points & Rewards**: Gamified learning experience
- **Subscription Management**: Flexible plans for different needs

## Who Uses EdCenta?

### 👨‍🏫 Tutors & Parents (Creators)
- Create student accounts
- Purchase subscription plans
- Assign worksheets and assessments
- Monitor student progress
- Manage subscriptions

### 👨‍🎓 Students
- Complete assignments
- View grades and progress
- Earn points for achievements
- Access subjects based on subscription
- Track learning goals

### 🔐 Administrators
- Manage platform content (subjects, topics, worksheets)
- Monitor system health
- Create subscription plans
- Oversee all users

## Key Features

### For Students
✅ **Interactive Assignments**: Complete worksheets with instant feedback  
✅ **Progress Dashboard**: View scores, performance trends, and analytics  
✅ **Points System**: Earn points for correct answers and achievements  
✅ **Rewards**: Convert points to cash rewards  
✅ **Leaderboards**: Compete with other students  
✅ **Personalized Recommendations**: AI-powered study suggestions  

### For Tutors/Parents
✅ **Student Management**: Create and manage multiple students  
✅ **Assignment Creation**: Assign worksheets from subject library  
✅ **Progress Monitoring**: Track student performance in real-time  
✅ **Subscription Control**: Choose subjects students can access  
✅ **Bulk Operations**: Assign work to multiple students at once  

### For Administrators
✅ **Content Management**: Create subjects, topics, and questions  
✅ **User Management**: Oversee all platform users  
✅ **Plan Management**: Create and modify subscription plans  
✅ **Analytics**: Platform-wide usage statistics  

## Technology Stack

### Frontend
- **Framework**: Next.js 13 (React 18)
- **Language**: TypeScript
- **Data Fetching**: Apollo Client (GraphQL)
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Heroicons
- **Animation**: Framer Motion
- **State**: Apollo Client Cache + React Hooks

### Backend
- **Runtime**: Node.js (TypeScript)
- **Framework**: Express.js
- **API**: GraphQL (Apollo Server)
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary
- **Payments**: Paystack, Flutterwave
- **Email**: Mailjet

### Infrastructure
- **Frontend Hosting**: Netlify
- **Backend Hosting**: TBD
- **Database**: MongoDB Atlas
- **CDN**: Cloudinary

## System Architecture

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                            │
│                      (Next.js + React)                      │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Student    │  │    Tutor     │  │    Admin     │    │
│  │     UI       │  │      UI      │  │      UI      │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│                    Apollo Client                            │
└─────────────────────────┬───────────────────────────────────┘
                          │ GraphQL
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                         Backend                             │
│                    (Node.js + Express)                      │
│                                                             │
│                    Apollo Server (GraphQL)                  │
│                            │                                │
│  ┌─────────────────────────┼─────────────────────────┐    │
│  │                         │                         │    │
│  ▼                         ▼                         ▼    │
│ Resolvers              Services                 Utils      │
│  │                         │                         │    │
│  └─────────────────────────┼─────────────────────────┘    │
│                            │                                │
│                            ▼                                │
│                      Mongoose (ODM)                         │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
                  ┌────────────────┐
                  │    MongoDB     │
                  │   (Database)   │
                  └────────────────┘
```

## Core Concepts

### User Roles & Hierarchy
```
Administrator (Platform Manager)
    │
    ├─ Tutor (Creates & Manages Students)
    │   └─ Student (Completes Assignments)
    │
    ├─ Parent (Creates & Manages Students)
    │   └─ Student (Completes Assignments)
    │
    └─ School (Creates & Manages Students)
        └─ Student (Completes Assignments)
```

### Subscription Model
1. **Creator** (Tutor/Parent/School) purchases a subscription plan
2. Plan includes:
   - Number of students allowed
   - List of accessible subjects (`allowedCourseList`)
   - Duration (monthly/yearly)
3. **Students** inherit subscription from their creator
4. Students can only access subjects in `allowedCourseList`

### Data Flow Example: Student Completing Assignment
```
1. Student logs in
   → Backend validates credentials
   → Returns JWT with student ID + subscription data

2. Student views assignments
   → Frontend extracts studentId from JWT
   → Queries assignments with studentId
   → Backend filters assignments for this student only

3. Student completes assignment
   → Frontend submits answers
   → Backend grades automatically
   → Backend awards points based on performance
   → Frontend displays results and updated points
```

## Project Structure

```
edcenta-docs/
├── edcenta-bc/          # Backend (Node.js + GraphQL)
│   └── src/
│       ├── app/         # Feature modules (student, tutor, etc.)
│       ├── common/      # Shared utilities
│       ├── databases/   # Database models and connection
│       └── types.ts     # TypeScript type definitions
│
├── edcenta-fc/          # Frontend (Next.js + React)
│   └── src/
│       ├── apollo/      # GraphQL queries/mutations
│       ├── components/  # React components
│       ├── hooks/       # Custom React hooks
│       ├── pages/       # Next.js pages (routes)
│       └── utils/       # Utility functions
│
└── docs/                # Documentation (You are here!)
    ├── 01-getting-started/
    ├── 02-api-reference/
    ├── 03-guides/
    ├── 04-technical-reports/
    └── 05-project-info/
```

## Key Workflows

### 1. Tutor Onboarding Flow
1. Tutor signs up → Creates account
2. Selects subscription plan
3. Makes payment (Paystack/Flutterwave)
4. Creates student accounts
5. Assigns worksheets to students

### 2. Student Learning Flow
1. Student logs in with credentials
2. Views assigned worksheets (filtered by subscription)
3. Completes assignment
4. Receives instant grade and points
5. Views progress dashboard

### 3. Content Creation Flow (Admin)
1. Admin creates Subject (e.g., "Mathematics")
2. Admin creates Topics under subject (e.g., "Algebra")
3. Admin creates Worksheets for topics
4. Admin adds Questions to worksheets
5. Content becomes available for assignment

## Points & Rewards System

### How Students Earn Points
- **Correct Answers**: 10 base points per correct answer
- **Difficulty Multiplier**:
  - Easy: 1.0x
  - Medium: 1.5x
  - Hard: 2.0x
- **Time Bonus**: Up to 20% extra for fast completion
- **Streak Bonus**: Up to 50% extra for consecutive correct answers

### Reward Withdrawal
- Minimum: 5,000 points (₦50)
- Conversion: 100 points = ₦1
- Students can request withdrawal when eligible
- Funds sent via bank transfer

## Current Status

### ✅ Completed Features
- User authentication (all roles)
- Student management
- Assignment creation and submission
- Automated grading
- Points system
- Subscription management
- Progress analytics
- Payment integration (Paystack, Flutterwave)

### 🚧 In Progress
- Enhanced analytics dashboard
- Mobile app development
- Advanced reporting features

### 📋 Planned Features
- Video lessons
- Live tutoring sessions
- Parent mobile app
- AI-powered question generation

## Getting Help

- **For Setup Issues**: See [Development Setup](./development-setup.md)
- **For API Questions**: See [API Reference](../02-api-reference/student-api.md)
- **For Architecture Questions**: See [Architecture Overview](./architecture.md)
- **For Project Scope**: See [Project Scope](../05-project-info/scope.md)

## Next Steps

Now that you understand what EdCenta is:
1. Read [Architecture Overview](./architecture.md) for technical details
2. Follow [Development Setup](./development-setup.md) to start coding
3. Review [Project Structure](../05-project-info/structure.md) for codebase organization

