# MangoBoost — 경력 요약 (붙여넣기용)

1k 이내.

```
■ MangoBoost — DevOps & Backend Engineer, Software Engineering Group (2025.06 – 현재)
› 사내 베어메탈 인프라 전체를 대상으로 하는 통합 자동화·자원관리 플랫폼(Django + Airflow). 40여 대 이기종 장비로 자사 RNIC를 경쟁사 대비 검증.
› 그 안에서 HW/SW 검증 테스트 자동화, 베어메탈 프로비저닝·자원 관리, HW/SW 통합 모니터링을 담당.

[기술 스택]
Go, Python (Django, Airflow), React, Prometheus, Grafana, DuckDB/Parquet, Cloud-init, Git
[테스트 자동화 & 데이터]
· 신규 HW/SW 빌드 감지 → 배포 → 매일 회귀 테스트 자동화 (Git·JFrog·Airflow)
· fio·iperf·perftest 등 워크로드를 웹 UI에서 제어
· 테스트 결과를 Parquet/DuckDB로 적재해 HW·펌웨어 버전 간 성능 비교
[인프라 자동화 & 자원관리]
· Cloud-init으로 40여 대 이기종 베어메탈 서버의 초기 구성 자동화 및 구성 일관성 확보
· 테스트 상태와 실시간 노드 자원을 연동해 자원 충돌 방지
[모니터링]
· HW/SW 통합 모니터링 체계 구축
· HW: 베어메탈 BMC(Redfish)·네트워크 스위치(SNMP)·node_exporter, 자사 NIC 전용 Exporter(Go)로 노출 안 되던 HW 레지스터 카운터까지 수집
· SW: Django·Airflow 등 애플리케이션 메트릭 모니터링 (Prometheus·Grafana)
· Sentry SDK로 테스트·서비스 에러 실시간 감지
```
