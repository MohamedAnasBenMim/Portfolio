# Mohamed Anas Ben Mim — Software Engineering Portfolio

A responsive Angular portfolio presenting my software engineering, backend, frontend, and full-stack work. The site combines professional experience, education, skills, achievements, certifications, and detailed project case studies.

## Featured engineering projects

| Project | Focus | Engineering highlights |
| --- | --- | --- |
| [CodeAtlas](https://github.com/MohamedAnasBenMim/CodeAtlas) | Software Engineering | AST dependency analysis, architecture policies, change-impact reports, tests and CI |
| [FlowForge](https://github.com/MohamedAnasBenMim/FlowForge) | Backend Engineering | Durable workflows, PostgreSQL state, Redis workers, retries, idempotency and recovery |
| [SignalBoard](https://github.com/MohamedAnasBenMim/SignalBoard) | Frontend Engineering | Live analytics, 100,000-row virtualization, accessibility, Playwright and Lighthouse |
| [CollabDesk](https://github.com/MohamedAnasBenMim/CollabDesk) | Full-Stack Engineering | Multi-tenant SaaS, JWT, RBAC, Prisma, real-time workspaces and audit trails |

## AI, ML and data projects

| Project | Focus | Measured highlights |
| --- | --- | --- |
| [AgentPilot](https://github.com/MohamedAnasBenMim/AgentPilot) | AI Agent Engineering | Typed tools, approval gates, failure recovery, execution traces and strategy benchmarks |
| [ModelGuard](https://github.com/MohamedAnasBenMim/ModelGuard) | Machine Learning Engineering | 0.792 PR-AUC, versioned serving, train-serving consistency and PSI drift monitoring |
| [InvoiceFlow](https://github.com/MohamedAnasBenMim/InvoiceFlow) | Applied AI | Structured invoice extraction, validation, uncertainty and human exception routing |
| [EvidenceAI](https://github.com/MohamedAnasBenMim/EvidenceAI) | LLM / RAG Engineering | Hybrid retrieval, permissions, reranking, grounded citations and systematic evaluation |
| [StreamPulse](https://github.com/MohamedAnasBenMim/StreamPulse) | Data Engineering | Kafka-compatible ingestion, DLQ recovery, warehouse models and data quality monitoring |

## Cloud, DevOps, SRE and distributed systems

| Project | Focus | Measured highlights |
| --- | --- | --- |
| [CloudBlueprint](https://github.com/MohamedAnasBenMim/CloudBlueprint) | Cloud Engineering | Validated Terraform, multi-AZ AWS design, encrypted data, monitoring, backup and recovery |
| [ReleaseRail](https://github.com/MohamedAnasBenMim/ReleaseRail) | DevOps | Tested faulty release detection, automatic rollback and 100% controller coverage |
| [ReliabilityLab](https://github.com/MohamedAnasBenMim/ReliabilityLab) | SRE | SLO evaluation, correlated telemetry, 300 ms detection and 1.95 s recovery experiment |
| [DevLaunch](https://github.com/MohamedAnasBenMim/DevLaunch) | Platform Engineering | Golden-path scaffolding, service catalog, 1.45 ms p95 local onboarding and 97.65% coverage |
| [QuorumKV](https://github.com/MohamedAnasBenMim/QuorumKV) | Distributed Systems | Quorum commits, partition safety, leader recovery and 335 local writes/s |
| [InfraFoundry](https://github.com/MohamedAnasBenMim/InfraFoundry) | Infrastructure Engineering | Ansible hardening, HAProxy failover, checksum backups and verified restoration |

The portfolio also includes E-Fatoora, Smart Stock System, ZumPortal, Socially, and PromptPay.

## Stack

- Angular 14 and TypeScript
- Bootstrap-based responsive layout
- Swiper and Fancybox media galleries
- Netlify SPA routing
- Karma/Jasmine unit-test setup

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Quality checks

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

The production build is generated in `dist/portfolio`.

## Deployment

`netlify.toml` configures the Angular build and redirects client-side routes to `index.html`.

## Author

Mohamed Anas Ben Mim — Software Engineer based in Tunisia.
