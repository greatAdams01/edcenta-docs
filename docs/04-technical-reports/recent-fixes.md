# Recent Fixes and Updates

This document tracks recent bug fixes, improvements, and updates to the EdCenta platform.

---

## November 5, 2025

### 🔧 GraphQL Variables Fix
**Issue**: Assignment queries not receiving required `studentId` variable  
**Impact**: Students could potentially see all assignments instead of only theirs  
**Fix**: Updated `useStudentAssignments` hook to automatically extract and pass `studentId` from auth cookie  
**Files Changed**:
- `/edcenta-fc/src/apollo/queries/dashboard.ts`
- `/edcenta-fc/src/hooks/useStudentData.ts`
- `/edcenta-fc/src/pages/student/dashboard.tsx`

**Details**: [Subscription Filtering Guide](../03-guides/subscription-filtering.md)

---

### 🔒 Subscription-Based Access Control
**Issue**: Students could see subjects they don't have access to  
**Impact**: Security and subscription enforcement  
**Fix**: Implemented subscription filtering based on `allowedCourseList` from JWT token  
**Files Changed**:
- `/edcenta-fc/src/pages/student/courses.tsx`

**Key Changes**:
- Fetch real subjects from backend (removed mock data)
- Extract subscription data from auth cookie
- Filter subjects by `allowedCourseList`
- Display subscription status and accessible subject count
- Added proper states (loading, error, no subscription)

**Details**: [Subscription Filtering Guide](../03-guides/subscription-filtering.md)

---

### 📊 Added Points History Hook
**Issue**: Points history was being fetched with direct `useQuery` instead of centralized hook  
**Impact**: Code duplication and inconsistency  
**Fix**: Created `usePointsHistory` hook  
**Files Changed**:
- `/edcenta-fc/src/hooks/useStudentData.ts`
- `/edcenta-fc/src/pages/student/rewards.tsx`

**Usage**:
```typescript
const { pointsHistory, loading, error } = usePointsHistory(20);
```

---

### 🧹 Removed Dummy Data from Student Dashboard
**Issue**: Student components showing hardcoded/mock data  
**Impact**: Inaccurate information displayed to students  
**Fix**: Integrated real backend data for all student components  
**Files Changed**:
- `/edcenta-fc/src/pages/student/index.tsx`
- `/edcenta-fc/src/pages/student/dashboard.tsx`
- `/edcenta-fc/src/pages/student/courses.tsx`
- `/edcenta-fc/src/components/dashbord/StudentSidebar.tsx`

**Confirmed**: No dummy data remains in student-facing components

---

## Previous Fixes

### Student Dashboard Loading Issue (Resolved)
**Issue**: Infinite loading state on student dashboard  
**Root Cause**: Loading state check was commented out  
**Fix**: Uncommented loading check to properly display loading spinner  
**Date**: November 3, 2025

---

### Toast Notification System Migration (Completed)
**Issue**: Old `react-toastify` system being used inconsistently  
**Fix**: Complete migration to `@/utils/toast` custom utility  
**Files**: 25+ files updated across dashboard, admin, and auth pages  
**Date**: November 2, 2025

---

### Authentication Centralization (Completed)
**Issue**: Manual cookie parsing scattered across components  
**Fix**: Created `useAuth`, `useStudentAuth`, `useAdminAuth` hooks  
**Note**: Later reverted for student components per user request  
**Date**: November 1, 2025

---

## Testing Checklist

### ✅ Completed Tests

#### Assignments Query
- [x] Student ID automatically extracted from cookie
- [x] Student ID passed to assignments query
- [x] Only student's own assignments returned
- [x] Status filtering works (client-side)

#### Subscription Filtering
- [x] Subscription data extracted from auth cookie
- [x] Subjects filtered by `allowedCourseList`
- [x] Students only see accessible subjects
- [x] "No subscription" state displays correctly

#### Points System
- [x] Points history fetched correctly
- [x] Withdrawal eligibility calculated properly
- [x] Leaderboard displays top students

#### Dummy Data Removal
- [x] No hardcoded data in student dashboard
- [x] No hardcoded data in student index
- [x] No hardcoded data in student sidebar
- [x] No hardcoded data in courses page

---

## Known Issues

### 📋 None Currently

All major issues have been resolved. Minor improvements and enhancements are tracked separately.

---

## Upcoming Improvements

### Performance
- [ ] Implement pagination for large assignment lists
- [ ] Add caching strategy for subject data
- [ ] Optimize GraphQL query batching

### Features
- [ ] Real-time assignment notifications
- [ ] Offline mode for viewing completed work
- [ ] Progressive Web App (PWA) support

### Code Quality
- [ ] Increase test coverage to 80%
- [ ] Add E2E tests for critical flows
- [ ] Implement Storybook for component library

---

## Rollback Procedures

### If Issues Arise

#### Variables Fix Rollback
```bash
git revert <commit-hash>
# Restore previous ASSIGNMENTS query definition
```

#### Subscription Filter Rollback
```bash
# Restore /pages/student/courses.tsx to previous version
git checkout HEAD~1 -- edcenta-fc/src/pages/student/courses.tsx
```

---

## Impact Assessment

### Security
✅ **Improved**: Students now properly scoped to their own data  
✅ **Improved**: Subscription access control enforced  

### Performance
✅ **Improved**: Reduced unnecessary data fetching  
⚠️ **Monitor**: Client-side filtering for status (consider backend implementation)  

### User Experience
✅ **Improved**: Accurate data display  
✅ **Improved**: Clear subscription status  
✅ **Improved**: No more confusing mock data  

### Maintainability
✅ **Improved**: Centralized data fetching hooks  
✅ **Improved**: Consistent patterns across components  
✅ **Improved**: Better documentation  

---

## Related Documentation

- [Student Data Integration Guide](../03-guides/student-data-integration.md)
- [Subscription Filtering Guide](../03-guides/subscription-filtering.md)
- [Student API Reference](../02-api-reference/student-api.md)
- [Testing Guide](../03-guides/testing.md)

---

**Last Updated**: November 5, 2025  
**Maintained by**: EdCenta Development Team

