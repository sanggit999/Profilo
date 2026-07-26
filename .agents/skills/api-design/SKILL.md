---
name: api-design
description: Design principles and standards for RESTful APIs, GraphQL endpoints, request/response payloads, authentication, and error responses.
---

# API Design & Integration Skill

Use this skill when designing backend endpoints, integrating third-party APIs, or structuring client-server data contracts.

## 1. RESTful Endpoints & HTTP Naming
- Use plural nouns for resources (e.g., `/api/v1/users`, `/api/v1/products`).
- Standardize HTTP methods:
  - `GET`: Fetch resources (Idempotent)
  - `POST`: Create a new resource
  - `PUT`: Replace an existing resource completely
  - `PATCH`: Partially update a resource
  - `DELETE`: Remove a resource

## 2. Standardized Status Codes & Responses
- **Success Responses**:
  - `200 OK`: Standard success response with body
  - `201 Created`: Resource successfully created
  - `204 No Content`: Successful request with empty body (e.g., DELETE)
- **Client Error Responses**:
  - `400 Bad Request`: Validation failure or bad payload
  - `401 Unauthorized`: Unauthenticated request
  - `403 Forbidden`: Authenticated but non-authorized access
  - `404 Not Found`: Resource does not exist

## 3. Error Payload Format
All error responses must follow a consistent JSON structure:
```json
{
  "success": false,
  "error": {
    "code": "INVALID_INPUT",
    "message": "The provided email format is invalid.",
    "details": []
  }
}
```

## 4. Input Validation & Security
- Validate all incoming request body and query parameters using schemas (e.g., Zod, Yup, Joi).
- Pass authentication credentials via HTTP Authorization headers (`Bearer <token>`).
