---
name: code-conventions
description: Rules, standards, and best practices for code structure, naming, formatting, error handling, security, and git workflows.
---

# Code Conventions & Best Practices Skill

Use this skill when designing, writing, reviewing, or refactoring code in this repository.

## 1. Naming Conventions & File Structure
- **Directories & Utilities**: Use `kebab-case` (e.g., `user-service`, `date-utils.ts`).
- **UI Components**: Use `PascalCase` (e.g., `UserProfileCard.tsx`).
- **Variables & Functions**: Use `camelCase` (e.g., `calculateTotal`, `isUserActive`).
- **Interfaces & Types**: Use `PascalCase` (e.g., `UserData`, `ApiResponse<T>`).
- **Constants**: Use `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`, `API_BASE_URL`).

## 2. Code Quality & Standards
- **DRY (Don't Repeat Yourself)**: Extract reusable logic into helper functions or hooks.
- **KISS (Keep It Simple, Stupid)**: Avoid over-engineering; keep implementations concise.
- **Single Responsibility**: Functions and classes should do one thing and do it well.
- **Strict Typing**: Enforce strict types. Do not use `any` unless absolutely unavoidable.

## 3. Error Handling & Resilience
- **Catch & Log**: Always catch expected errors and log helpful contextual messages.
- **Graceful Degraded States**: Provide UI fallbacks or default states when external calls fail.
- **Sanitization**: Validate and sanitize all user input before processing.

## 4. Git & Workflow Standards
- **Commit Messages**: Use standard prefixes:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation changes
  - `style`: Formatting, missing semi-colons, etc.
  - `refactor`: Code change that neither fixes a bug nor adds a feature
  - `test`: Adding missing tests
  - `chore`: Maintenance tasks, dependency updates
