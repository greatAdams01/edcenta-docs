# EdCenta Project Structure

## 📁 Repository Organization

```
edcenta/
├── README.md                           # 🏠 Main project documentation (GitHub auto-serves)
├── PROJECT_STRUCTURE.md               # 📋 This file - project organization
├── LICENSE                            # 📄 Project license
├── .github/                           # 🔧 GitHub configurations
│   ├── workflows/                     # CI/CD pipelines
│   │   ├── docs.yml                  # Documentation deployment
│   │   └── ci.yml                    # Continuous integration
│   └── ISSUE_TEMPLATE/               # Issue templates
├── docs/                             # 📚 Documentation (GitHub Pages)
│   ├── README.md                     # Documentation index
│   ├── .vuepress/                    # VuePress configuration
│   │   └── config.js                 # Documentation site config
│   ├── system-architecture.md        # System design
│   ├── project-roadmap.md            # Development roadmap
│   ├── quick-checklist.md            # Progress tracking
│   ├── getting-started.md            # Quick start guide
│   ├── api-reference.md              # API documentation
│   ├── database-schema.md            # Database design
│   └── user-guides/                  # User documentation
│       ├── student.md                # Student guide
│       ├── parent.md                 # Parent guide
│       ├── tutor.md                  # Tutor guide
│       ├── school.md                 # School guide
│       └── admin.md                  # Admin guide
├── edcenta-bc/                       # 🔧 Backend (Node.js + TypeScript)
│   ├── README.md                     # Backend documentation
│   ├── package.json                  # Dependencies
│   ├── tsconfig.json                 # TypeScript config
│   ├── .env.example                  # Environment template
│   ├── src/                          # Source code
│   │   ├── index.ts                  # Application entry
│   │   ├── types.ts                  # TypeScript definitions
│   │   ├── databases/                # Database layer
│   │   │   ├── model/                # Database models
│   │   │   │   ├── User.ts           # User model
│   │   │   │   ├── Student.ts        # Student model
│   │   │   │   ├── Tutor.ts          # Tutor model
│   │   │   │   ├── School.ts         # School model
│   │   │   │   ├── WorkSheet.ts      # Worksheet model
│   │   │   │   ├── Question.ts       # Question model
│   │   │   │   ├── Assessment.ts     # Assessment model
│   │   │   │   ├── Assignment.ts     # Assignment model
│   │   │   │   ├── Wallet.ts         # Wallet model
│   │   │   │   └── Transaction.ts    # Transaction model
│   │   │   └── connection/           # Database connection
│   │   │       └── index.ts          # MongoDB connection
│   │   ├── app/                      # Feature modules
│   │   │   ├── user/                 # User management
│   │   │   ├── student/              # Student features
│   │   │   ├── tutor/                # Tutor features
│   │   │   ├── school/               # School management
│   │   │   ├── worksheet/            # Content management
│   │   │   └── curriculum/           # Educational content
│   │   └── common/                   # Shared utilities
│   │       ├── errors.ts             # Error handling
│   │       ├── roles.ts              # Role definitions
│   │       └── utils.ts              # Utility functions
│   └── dist/                         # Compiled JavaScript
├── edcenta-fc/                       # 🎨 Frontend (Next.js + TypeScript)
│   ├── README.md                     # Frontend documentation
│   ├── package.json                  # Dependencies
│   ├── next.config.js                # Next.js configuration
│   ├── tailwind.config.js            # Tailwind CSS config
│   ├── .env.example                  # Environment template
│   ├── src/                          # Source code
│   │   ├── pages/                    # Application pages
│   │   │   ├── student/              # Student dashboard
│   │   │   ├── parent/               # Parent dashboard
│   │   │   ├── tutor/                # Tutor dashboard
│   │   │   ├── school/               # School dashboard
│   │   │   └── auth/                 # Authentication pages
│   │   ├── components/               # Reusable components
│   │   │   ├── ui/                   # UI components
│   │   │   ├── forms/                # Form components
│   │   │   └── layout/               # Layout components
│   │   ├── utils/                    # Utility functions
│   │   ├── hooks/                    # React hooks
│   │   ├── types.ts                  # TypeScript definitions
│   │   └── styles/                   # Global styles
│   └── public/                       # Static assets
└── scripts/                          # 🛠️ Development scripts
    ├── setup.sh                      # Project setup script
    ├── deploy.sh                     # Deployment script
    └── migrate.js                    # Database migration script
```

## 🎯 Documentation Hierarchy

### **1. README.md (Main Entry Point)**
- **GitHub automatically serves this**
- **First thing visitors see**
- **Project overview and quick start**
- **Links to detailed documentation**

### **2. docs/ Directory (GitHub Pages)**
- **Detailed documentation**
- **Automatically deployed to GitHub Pages**
- **Organized by topic and audience**
- **Searchable and navigable**

### **3. Individual READMEs**
- **Each major directory has its own README**
- **Specific to that component**
- **Detailed setup and usage instructions**

## 📊 File Purposes

### **🏠 Main Documentation**
| File | Purpose | Audience | Auto-Served |
|------|---------|----------|-------------|
| `README.md` | Project overview, quick start | All visitors | ✅ GitHub |
| `PROJECT_STRUCTURE.md` | Repository organization | Developers | ❌ Manual |
| `docs/README.md` | Documentation index | All users | ✅ GitHub Pages |

### **📚 Detailed Documentation**
| File | Purpose | Audience | Status |
|------|---------|----------|--------|
| `docs/system-architecture.md` | System design | Developers | ✅ Complete |
| `docs/project-roadmap.md` | Development progress | Project managers | ✅ Complete |
| `docs/quick-checklist.md` | Daily tracking | Development team | ✅ Complete |
| `docs/getting-started.md` | Setup guide | New developers | 🚧 In Progress |
| `docs/api-reference.md` | API documentation | Developers | ❌ Pending |

### **👥 User Guides**
| File | Purpose | Audience | Status |
|------|---------|----------|--------|
| `docs/user-guides/student.md` | Student features | Students | ❌ Pending |
| `docs/user-guides/parent.md` | Parent features | Parents | ❌ Pending |
| `docs/user-guides/tutor.md` | Tutor features | Tutors | ❌ Pending |
| `docs/user-guides/school.md` | School features | Schools | ❌ Pending |
| `docs/user-guides/admin.md` | Admin features | Administrators | ❌ Pending |

## 🔧 GitHub Configuration

### **Automatic Serving**
- **README.md** → GitHub repository homepage
- **docs/** → GitHub Pages (if enabled)
- **LICENSE** → GitHub license display
- **.github/** → GitHub features and workflows

### **GitHub Pages Setup**
1. **Enable GitHub Pages** in repository settings
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` (created by workflow)
4. **URL**: `https://your-org.github.io/edcenta/`

### **Workflow Triggers**
- **Push to main** → Deploy documentation
- **Pull request** → Validate documentation
- **Path changes** → Only run on doc changes

## 📋 Maintenance Checklist

### **When Adding New Features**
- [ ] Update `README.md` if it affects overview
- [ ] Update `docs/project-roadmap.md` with progress
- [ ] Update `docs/quick-checklist.md` with tasks
- [ ] Create user guide if needed
- [ ] Update API documentation if applicable

### **When Updating Documentation**
- [ ] Update last modified date
- [ ] Update status in documentation index
- [ ] Test GitHub Pages deployment
- [ ] Verify all links work
- [ ] Update table of contents if needed

### **Weekly Review**
- [ ] Check documentation status
- [ ] Update progress percentages
- [ ] Review and update roadmaps
- [ ] Ensure all links are current
- [ ] Plan next week's documentation needs

## 🚀 Quick Start for New Contributors

1. **Read `README.md`** - Project overview
2. **Check `docs/getting-started.md`** - Setup instructions
3. **Review `docs/system-architecture.md`** - Understand the system
4. **Look at `docs/project-roadmap.md`** - Current progress
5. **Check `docs/quick-checklist.md`** - What's being worked on

## 📞 Documentation Support

- **Issues**: [GitHub Issues](https://github.com/your-org/edcenta/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/edcenta/discussions)
- **Email**: docs@edcenta.com

---

**Last Updated**: January 2024  
**Maintained By**: EdCenta Development Team  
**Version**: 1.0.0
