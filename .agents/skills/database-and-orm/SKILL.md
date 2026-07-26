---
name: database-and-orm
description: Best practices for SQL/NoSQL database modeling, migrations, indexing, query performance, and ORM usage (Prisma, TypeORM, Mongoose).
---

# Database & ORM Skill

Use this skill when designing database schemas, writing ORM models, creating database migrations, or optimizing database queries.

## 1. Schema Design Principles
- **Normalized Data**: Avoid data duplication in relational databases (3NF); denormalize selectively for performance read models.
- **Primary & Foreign Keys**: Use strongly typed IDs (UUIDv4/CUID or Auto-increment integers) and enforce foreign key constraints.
- **Timestamps**: Include `created_at` and `updated_at` on every table/collection.

## 2. Migrations & Version Control
- All schema changes must be managed via migration files (e.g., Prisma Migrations, Knex, Liquibase).
- Migrations must be backwards-compatible to prevent downtime during deployments.
- Never manually modify production database tables outside of versioned migration scripts.

## 3. Query Optimization & ORM Practices
- Add indexes to columns frequently queried in `WHERE`, `JOIN`, and `ORDER BY` clauses.
- Avoid N+1 query problems by using batch loading or eager loading relations.
- Keep database transactions short to reduce lock contention.
