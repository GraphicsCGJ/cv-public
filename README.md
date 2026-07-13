# CV (Gyujin Choi)

■ 경력 요약 (붙여넣기용, ~1k)
· [mangoboost.md](mangoboost.md) — MangoBoost (2025.06 – 현재)
· [tibero.md](tibero.md) — Tmax Tibero (동기화 엔진팀 + GIS 엔진팀)

■ 논문
· [publications.md](publications.md) — 논문 2편 (등재기관/등재일 + 링크, 폼 붙여넣기용)

■ 프로젝트 딥다이브 (목표/역할/성과, 330자)
· [01-engine-core](projects/01-engine-core.md) — Tibero 동기화 · 321자
· [02-parallel-apply](projects/02-parallel-apply.md) — Tibero 동기화 · 324자 (+풀 698)
· [03-ha-failover](projects/03-ha-failover.md) — Tibero 동기화 · 321자
· [04-backend](projects/04-backend.md) — Tibero 동기화 · 326자
· [05-team-lead](projects/05-team-lead.md) — Tibero 동기화 · 313자
· [06-automation-platform](projects/06-automation-platform.md) — MangoBoost · 318자
· [07-nic-exporter](projects/07-nic-exporter.md) — MangoBoost · 320자 ⚠️메트릭

■ LaTeX CV (CurVe 템플릿)
· [latex/](latex/) — Overleaf 소스 (`employment.tex`, `own-bib.bib`, `cv-llt.tex` 등)
· Overleaf 반영: 바뀐 파일만 개별 업로드(덮어쓰기) 후 Recompile. zip 통째 올릴 땐 New Project → Upload Project.

■ 표현 주의 (오해 방지)
· HA/Failover: "HA를 구현"이 아니라 "기존 클러스터(TBCM) HA 위에 동기화 엔진 Failover를 설계·검증·배포". 내가 만든 건 HA가 아니라 그 위의 장애 시나리오 대응. (projects/03 참고)
· 코어 프레임워크·allocator: 기존 코드 유지보수·개선. non-blocking/epoll·병렬 반영은 신규.
· 고객사(KT/POSCO): CV엔 "대규모 고객사/공공 중심"으로, 실명은 면접에서 구두.

■ TODO
- [ ] 07 NIC exporter: 실제 노출 메트릭/카운터 구체 목록 회사에서 확인 후 보강
- [ ] 참조 링크(제품 페이지/보도자료) 넣을지 결정
- [ ] GIS 엔진팀 프로젝트 딥다이브(WKB 프레임워크) 필요 시 추가
- [x] LaTeX CV(employment.tex) HA 문구 정직 버전으로 수정 (완료)
- [x] MangoBoost 딥다이브 2개(06 플랫폼 고도화, 07 NIC exporter) (완료)
