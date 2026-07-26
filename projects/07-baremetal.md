# 베어메탈 인프라 자동화 & HW 모니터링

기술: Go, Canonical MAAS(PXE), Cloud-init, Redfish(BMC), SNMP, Prometheus, Grafana
소속: MangoBoost · Software Engineering Group

## 330자판 (330자)

```
[목표/배경]
40여 대 이기종 베어메탈을 수동 관리해 구성 편차·자원 충돌이 잦고 HW 가시성도 낮았습니다.
[역할·수행]
Canonical MAAS(PXE)로 OS 프로비저닝을 자동화하고 부팅 후 Cloud-init으로 구성 일관성을 확보했습니다. 노드 자원 점유를 RDBMS row 락으로 관리해 테스트 간 충돌을 방지하고, 자사 NIC용 Exporter(Go)로 노출 안 되던 HW 레지스터 카운터까지 수집했습니다.
[성과·기여도]
프로비저닝·구성 일관성을 확보하고, HW 레지스터 수준까지 가시성을 확보했습니다. (개인 기여도 약 60% — MAAS·NIC Exporter 주도)
```

## 메모

- distinctive 포인트 = 자사 NIC Exporter(Go): node_exporter로 안 보이던 RNIC HW 레지스터 카운터를 mango-ctl read로 읽어 Prometheus로 노출 (수동 1회성 조회 → 지속 시계열화). 상세: backup/07-nic-exporter.md.
- 프로비저닝 흐름: Canonical MAAS가 PXE 부팅으로 OS 프로비저닝 → 부팅 후 Cloud-init이 구성. (MAAS는 사용·운영, 개발 아님)
- HW 모니터링: 330엔 지면상 뺐지만 BMC(Redfish)·네트워크 스위치(SNMP)·node_exporter도 함께 수집 (면접/여유 시 언급).
- 자원 충돌 방지 = 동시성 제어(락 관리). 노드 점유 상태를 RDBMS row 락(row-level lock)으로 관리 → DB를 단일 조율 지점(single source of truth)으로 테스트 간 자원 점유를 직렬화 (일종의 분산 락). ※ "single point of failure" 아님(장애 단일점, 부정 용어) — "single source of truth"가 맞는 표현.
- 규모: 40여 대 이기종(GPU 4대, 자사/경쟁사 NIC·NVMe 유무 등 구성 다양).
- ⚠️ NIC Exporter 실제 노출 메트릭 목록은 회사 git 확인 후 보강 (gis_misc.md와 별개, README TODO 참고).
