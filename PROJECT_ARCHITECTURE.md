# PROJECT ARCHITECTURE & GOVERNANCE

## 1. Top Skills & IA Guidelines
- **Token-Saving:** Code & responses are concise, modular, and dense in context.
- **Visual Architecture:** Mermaid diagrams required for data flows, CI/CD, and logic.

## 2. Git & CI/CD Strategy
- `main`: Production (100% stable).
- `development`: Integration & local testing.
- `feature/*`: Short-lived branches from/to `development`.
- **Vercel:** Auto-preview deployments on PRs for security audits.

```mermaid
gitGraph
   commit id: "Init"
   branch development
   checkout development
   commit id: "Setup"
   branch feature/ui-components
   checkout feature/ui-components
   commit id: "Add Hero"
   commit id: "Add Bento Grid"
   checkout development
   merge feature/ui-components id: "PR: UI"
   checkout main
   merge development id: "Release 1.0 (Vercel Prod)"
```

## 3. UI/UX & Tech Stack
- **Design:** Figma + v0.dev.
- **Stack:** Tailwind CSS, Shadcn UI, Dark/Light modes.
- **Structure:**
  1. Hero Section (Value + CTA).
  2. Bento Grid (Projects: Problem, Tech, Results).
  3. Tech Stack (Icons).
  4. About/Philosophy.
  5. Footer & Contact Form.

## 4. Security (Data Layer)
- **Client (UX):** Visual validation, error/loading states (prevent double submit).
- **Server (Vercel API):**
  - Schema Validation (Zod) for XSS/Injection mitigation.
  - Rate Limiting (Vercel WAF) for spam/DoS mitigation.

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant Vercel WAF
    participant Vercel API
    
    User->>Client: Fills form & Submit
    Client->>Client: UX Validation (Loading state)
    Client->>Vercel WAF: POST /api/contact
    Vercel WAF->>Vercel WAF: Rate Limiting Check
    alt Rate Limit Exceeded
        Vercel WAF-->>Client: 429 Too Many Requests
    else Allowed
        Vercel WAF->>Vercel API: Forward Request
        Vercel API->>Vercel API: Zod Schema Validation
        alt Invalid Schema
            Vercel API-->>Client: 400 Bad Request
        else Valid Schema
            Vercel API->>Vercel API: Process Data (Email/DB)
            Vercel API-->>Client: 200 OK
        end
    end
    Client-->>User: Success/Error Feedback (Reset state)
```
