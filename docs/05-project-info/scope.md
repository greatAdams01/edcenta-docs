# Edcenta Platform - Consolidated Documentation

## Project Overview
Edcenta is a comprehensive educational platform designed to facilitate online learning, homework management, and performance tracking across multiple user types including students, parents, tutors, schools, and administrators.

## Platform Architecture

### User Roles & Access Levels
1. **Super Admin** - Full platform control and management
2. **Admin** - Administrative access with controlled permissions
3. **Moderator** - Limited administrative functions
4. **Schools** - Institutional accounts with teacher management
5. **Tutors** - Individual educator accounts
6. **Parents** - Guardian accounts for student oversight
7. **Students** - Primary learning accounts
8. **Homework Buddy** - University students providing remote homework support

## Core Features

### 1. Virtual Classroom (EV Connect)
- Interactive whiteboard and teaching tools
- One-on-one and group class capabilities
- Screen sharing functionality
- Class scheduling system
- Virtual quiz integration
- Available only for tutors and schools

### 2. Points-to-Cash Reward System
- Students earn 1 point per correct answer
- 1,000 points = ₦500 cash equivalent
- Withdrawal enabled at 5,000 points minimum
- E-wallet integration for payments
- Configurable point-to-cash ratios (Super Admin controlled)

### 3. Data Analytics & Performance Tracking
- Real-time performance analysis per subject/topic
- Best performing topics (>70% scores)
- Areas needing improvement (<70% scores)
- Weekly automated email reports to parents
- Comprehensive scoring dashboards

### 4. Activities Management
- Worksheet and assessment creation/assignment
- Subject-based categorization
- National curriculum alignment
- Topic-based organization
- Automatic recommendations based on performance

## User Backend Structures

### Student Backend
**Menu Structure:**
- **Dashboard** - Overview of activities and assignments
- **Activities**
  - To Do List - Assigned worksheets
  - Completed - Finished homework view
- **Messages**
  - Send Message - Two-way communication
  - Inbox - Receive messages from tutors/schools
- **Progress**
  - Scores - Subject-wise analytical data
  - Rewards - Points-to-cash management
  - Activities History - Historical performance data (7 days to 1 year)

### Parent Backend
**Menu Structure:**
- **Dashboard** - Student overview and access
- **Activities**
  - Browse and Assign - View/assign activities by subject/year
  - Find a Tutor - Search for tutors
  - Search - Filter activities by keywords/subjects
  - Preview Assigned - View assigned activities
  - Review Completed - Monitor completed work
- **Downloads** - Downloaded files management
- **Share Link**
  - Generate - Create secure access links for tutors/schools
- **Progress**
  - Scores - Student performance overview
  - Rewards - Approve point withdrawals
- **Accounts**
  - My Profile - Account details management
  - My Account - Subscription management
  - Manage Students - Student settings and controls
  - My Subscription - Plan management
  - My Notifications - Performance alerts

### Tutor/School Backend
**Menu Structure:**
- **Dashboard** - Student groups and class overview
- **EV Connect**
  - New Class - Virtual classroom creation
  - Schedule - Class scheduling
  - Whiteboard - Interactive teaching tools
  - Share Screen - Screen sharing capabilities
- **Activities**
  - Browse and Assign - Activity management
  - Search - Activity filtering
  - Preview Assigned - Assignment overview
  - Review Completed - Completed work review
- **Downloads** - File management
- **Messages**
  - Send Message - Communication system
  - Inbox - Message management
- **Progress**
  - Scores - Student performance tracking
  - Rewards - Approve student rewards
- **Accounts**
  - My Profile - Account management
  - My Account - Subscription management
  - Manage Groups - Student grouping system
  - Manage Students - Student controls and settings
  - My Subscription - Plan management
  - My Notifications - Performance alerts

### Super Admin Features
- **User Management**
  - Unique code assignment for all users
  - Enable/disable/delete accounts
  - Role-based access control
  - Account search by email/ID
- **Content Management**
  - Worksheet/quiz creation
  - Subject and class category management
  - Exam board integration (WAEC, NECO, JAMB, etc.)
  - Question bank management with multimedia support
- **System Configuration**
  - Payment plan management
  - Points-to-cash ratio adjustments
  - Platform-wide settings

## Educational Structure

### Grade Levels
- **Primary 1-6** - Basic subjects (Maths, English, Science)
- **JSS 1-3** - Junior Secondary with WAEC preparation
- **SSS 1-3** - Senior Secondary with multiple exam boards

### Exam Boards Supported
- Common Entrance Exam
- Junior WAEC
- SSCE WAEC
- NECO
- JAMB

## Security Features
- Email verification for shared access links
- Screenshot/copy protection for worksheets
- Role-based access restrictions
- Secure payment processing
- Account access controls

## Additional Features

### E-Library Integration
- Free e-library access for students
- Topic-specific resource linking
- PDF and HTML support

### Communication Systems
- Real-time messaging between all user types
- Automated email reporting
- Notification systems
- Front-end chat support

### Business Features
- Referral program (2% commission)
- Free trial with limited access
- Subscription management
- API integration for discounted data plans
- Blog functionality

### Account Management
- Free registration with one monthly activity
- Automatic account deletion after 3 months without subscription
- Upgrade prompts for unlimited activities
- Flexible payment plans

## Technical Requirements
- Multi-platform support (web, mobile, desktop)
- Real-time collaboration tools
- Secure payment processing
- Data export capabilities (CSV)
- Automated email systems
- Content protection mechanisms
- Performance analytics engine

## Workflow Summary
1. Users register and receive unique identification codes
2. Content is created and managed by Super Admin/Admin
3. Tutors/Schools/Parents assign activities to students
4. Students complete assignments and earn points
5. Performance is tracked and analyzed automatically
6. Reports are generated and distributed
7. Rewards are processed through the e-wallet system
8. Communication flows between all stakeholders in real-time

This platform represents a comprehensive educational ecosystem designed to enhance learning outcomes through technology, gamification, and detailed performance tracking.