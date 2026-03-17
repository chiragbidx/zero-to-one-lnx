## [2024-06-09] TeamTrackr Brand Launch & Core CRM Schema

- Rebranded all landing, navbar, auth, and dashboard copy to "TeamTrackr": CRM focus, new logo, headings, and copy.
- Pruned/updated sections and nav: features, team, contact, FAQ, footer now highlight CRM use case.
- Auth experience (sign in, sign up, forgot/reset password) now uses TeamTrackr messages and visuals.
- Dashboard nav, sidebar, greeting, and empty states reflect CRM workflow language.
- Added Postgres schema for core CRM entities:
  - `clients`, `contacts`, `projects`, `invoices`, `project_tasks`, `project_milestones`, `project_comments`, `activity_logs`
- Committed Drizzle migration journal update for new entities.
- Updated CHANGELOG.md for traceability.