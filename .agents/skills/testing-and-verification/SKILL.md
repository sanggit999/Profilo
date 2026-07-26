---
name: testing-and-verification
description: Best practices for writing unit tests, integration tests, E2E tests, mock data strategy, and build verification.
---

# Testing & Verification Skill

Use this skill when adding test suites, validating builds, mocking dependencies, or setting up test automation.

## 1. Test Pyramid Strategy
- **Unit Tests**: Test isolated functions, custom hooks, and utility modules (Fast, high coverage).
- **Integration Tests**: Test interactions between components, services, and state stores.
- **E2E Tests**: Test critical user flows end-to-end (e.g., Auth, Checkout, Form Submission).

## 2. Test File Conventions & Structure
- Place unit tests alongside the source file with `.test.ts`/`.spec.tsx` extensions (e.g., `date-utils.test.ts`).
- Group test suites using clear `describe` blocks and descriptive `it`/`test` titles:
  ```ts
  describe('calculateDiscount', () => {
    it('should return 20% discount for premium members', () => {
      // Test implementation
    });
  });
  ```

## 3. Mocking & Verification Rules
- Mock external network requests, database connections, and third-party services.
- Never write tests that mutate live production data.
- Run build/typecheck validation (`npm run typecheck` or `npm test`) to verify before finalizing code changes.
