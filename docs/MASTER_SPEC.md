# TradeVault: Master Technical Specification

## 1. Project Overview
**Goal:** Enterprise-grade Trading Journal SaaS.
**Primary Interface:** Mobile Web (Responsive).
**Key Feature:** AI-powered Trade Entry (Screenshot -> Data).

## 2. Tech Stack (Strict)
### Backend (packages/server)
* **Runtime:** Node.js (LTS)
* **Framework:** Fastify
* **Language:** TypeScript
* **Database:** MySQL (Production), SQLite (Dev)
* **ORM:** Sequelize (v6+)
* **Validation:** TypeBox + AJV
* **Testing:** Vitest
* **Security:** Helmet, CORS

### Frontend (packages/client)
* **Library:** React 18
* **Bundler:** Webpack 5 (Manual Config)
* **State:** Redux Toolkit (Global), React Query (Async)
* **Styling:** Styled Components
* **Auth:** Passport.js (OpenID)

## 3. Database Schema (Draft)
**Table: Users**
* `id` (UUID, PK)
* `email` (String, Unique)
* `password_hash` (String)

**Table: Trades**
* `id` (UUID, PK)
* `user_id` (UUID, FK -> Users.id)
* `image_url` (String, Nullable)
* `symbol` (String)
* `direction` (Enum: 'LONG', 'SHORT')
* `entry_price` (Decimal 10,2)
* `sl_price` (Decimal 10,2)
* `tp_price` (Decimal 10,2)
* `status` (Enum: 'DRAFT', 'OPEN', 'CLOSED')
* `created_at` (Date)

## 4. API Contract (Core)
* `POST /api/v1/upload` -> Accepts Multipart File -> Returns Parsed JSON
* `POST /api/v1/trades` -> Creates Trade Record
* `GET /api/v1/trades` -> List Trades (Paginated) 