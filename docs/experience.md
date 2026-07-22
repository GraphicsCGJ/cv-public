# Experience

## MangoBoost — Software Engineering Group
*DevOps & Backend Engineer · 2025.06 – present*

[MangoBoost](https://www.mangoboost.io/) is a data-processing-unit (DPU) startup building networking and storage acceleration for large-scale AI/HPC datacenters ([company news](https://www.mangoboost.io/media/news) · [TechCrunch: $55M Series A](https://techcrunch.com/2023/10/23/ai-based-data-center-optimization-startup-mangoboost-raises-55m-series-a/) · [Seoul Economic Daily](https://en.sedaily.com/news/2026/03/29/near-unicorn-startup-mangoboost-enters-aidc-infrastructure)).

*Tech stack: Go, Python (Django, Airflow), React, Prometheus, Grafana, Parquet/DuckDB, Canonical MAAS, Cloud-init, Sentry, Git*

**HW/SW integration-test automation & data pipelines**

- Developed integration-test automation pipelines and a web UI to drive variable workloads (`iperf`, `perftest`, `fio`, etc.).
- Automated the full flow from build-artifact detection to deployment (CD) and nightly regression testing for new hardware/software (Git workflow, JFrog, Airflow).
- Built a parsing pipeline that accumulates large-scale test results in columnar (Parquet) storage for version-to-version performance comparison, with Grafana/Slack reporting.

**Bare-metal resource management & infrastructure visibility**

- Managed node resource ownership as RDBMS rows with row-level locking, preventing contention across concurrent tests.
- Automated bare-metal OS provisioning for dozens of servers with Canonical MAAS (PXE boot) and Cloud-init, ensuring configuration consistency.
- Built a hardware-monitoring collection environment for network switches and bare-metal nodes (BMC) using SNMP and Redfish.
- Developed a dedicated Prometheus Exporter in Go to collect metrics from the company's in-house RNIC.

---

## Tmax Tibero — Software Engineer
*2020.02 – 2025.06*

### Data Synchronization Engine Team
*2020.02 – 2022.12, 2023.07 – 2025.06*

The team develops **[Tibero ProSync](https://www.tmax.co.kr/prosync)**, Tmax's real-time Change-Data-Capture (CDC) data-synchronization solution ([product overview](https://docs.tibero.com/prosync/introduction/overview)). It is deployed across large enterprise and public-sector customers — including **POSCO** ([Tmax × POSCO data-innovation seminar, ProSync CDC case](https://www.itbiznews.com/news/articleView.html?idxno=185408) · [HelloT](https://www.hellot.net/news/article.html?no=106697)) and **KT**.

*Tech stack: C, Java, POSIX system calls, Spring MVC, Netty, RDBMS*

**Engine framework & optimization**

- Maintained and improved the C-based sync-engine core (custom memory allocator, epoll I/O multiplexing) and introduced a non-blocking socket layer.
- Fixed leaked epoll registrations on abnormal disconnects (e.g., cable pull) via TCP-timeout-based cleanup, improving long-running stability.
- Optimized file I/O and large-transaction throughput by introducing batch updates for transaction data.
- Implemented an architecture that applies serial transactions from WAL files to the target DB in parallel via multithreading.
- Designed and validated scenario-based failover for the sync engine on top of the existing cluster HA (TBCM), and drove it through customer acceptance to production.

**Backend & system development**

- Developed TCP / custom-protocol communication built on Spring and Netty.
- Developed cross-DB consistency checking and an ETL service for initial bulk-data loading.
- Built a real-time status-monitoring system for the synchronization engine.

**Team Lead** *(2023.07 – 2025.06)*

- Served as Team Leader of the Data Synchronization Engine Team.
- Established development roadmaps, managed tasks, and mentored team members.

### GIS Engine Team
*2023.01 – 2023.06*

*Tech stack: C/C++*

- Developed a WKB (Well-Known Binary) data-processing framework based on C++ STL and a custom memory allocator.
- Developed spatial functions compatible with Oracle Spatial and PostGIS.
