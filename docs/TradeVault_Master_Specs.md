PROJECT: TradeVault (Corporate Learning Edition)
ROLE: Senior Full Stack Developer
MANAGER: Gemini (Chief Architect)

1. THE GOAL
Build a mobile-first Trading Journal SaaS.
Core USP: Upload MT5 screenshot -> Auto-extract Trade Data (Entry, SL, TP).

2. THE TECH STACK (STRICT)
-- Backend --
Runtime: Node.js (Latest)
Framework: Fastify (Strict separation of concerns)
Database: MySQL (Production), SQLite (Local Dev)
ORM: Sequelize (Strict typing, Migrations required)
Validation: TypeBox + AJV
Testing: Vitest (Unit), Cucumber (E2E)
Security: Helmet, CORS, Rate Limiting
-- Frontend --
Core: React 18 (Functional Components, Hooks)
Build: Webpack 5 (Manual Config - NO CRA/Vite)
State: Redux Toolkit (Global UI state) + React Query (Server Data)
Styling: Styled Components (Mobile-First approach)
Auth: Passport.js + OpenID Client

3. ARCHITECTURE HIGHLIGHTS
- Monorepo structure.
- "Feature-Sliced" folder organization.
- Strict Typescript usage (No 'any').
- Error Handling: Global Error Boundary in React, Centralized Error Handler in Fastify.

4. THE DATA MODEL (DRAFT)
- Users: id, email, password_hash, auth_provider
- Trades: id, user_id, symbol, direction (LONG/SHORT), entry_price, sl_price, tp_price, exit_price, screenshot_url, ai_analysis_json, status (OPEN/CLOSED/PENDING)

5. EXECUTION PROTOCOL
- Wait for Gemini's specific "Ticket" before coding.
- Always include comments explaining "Why" (Learning focus).
- No shortcuts.