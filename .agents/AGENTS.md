# Workspace Agent Guidelines & Best Practices

## General Principles
- **Clean Code & Maintainability**: Always write clear, self-documenting code. Prefer readability over cleverness.
- **Strict Typing**: Use TypeScript/strongly-typed constructs where applicable. Avoid `any`.
- **Modularity & Separation of Concerns**: Keep components, business logic, and utility functions isolated.
- **Verification**: Never declare success without running build/test verification steps.

## Code Conventions
1. **Naming Conventions**:
   - Files & Folders: `kebab-case` for general files/directories, `PascalCase` for UI Components.
   - Variables & Functions: `camelCase`.
   - Types & Interfaces: `PascalCase`.
   - Constants: `UPPER_SNAKE_CASE`.
2. **Error Handling**:
   - Do not swallow errors silently. Handle exceptions gracefully and provide meaningful error messages.
3. **Security**:
   - Never hardcode secrets, private keys, or credentials. Use environment variables (`.env`).
4. **Git Commits**:
   - Follow Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `test:`, `chore:`.
