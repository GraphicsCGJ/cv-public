# 베어메탈 인프라 자동화 및 하드웨어 모니터링 시스템 구축

**기술 Stack**: Go, Canonical MAAS(PXE), Cloud-init, Redfish(BMC), SNMP, Prometheus, Grafana, PostgreSQL/RDBMS (Row Lock)
**소속**: MangoBoost · Software Engineering Group

## 개요 (Overview)

40여 대 이상 규모의 이기종 베어메탈 서버 인프라를 수동 제어하는 방식에서 야기되던 환경 편차와 테스트 간 장비 점유 충돌 문제를 해결하기 위해, 베어메탈 자동화 및 모니터링 시스템을 정비했습니다. Canonical MAAS(PXE) 및 Cloud-init을 도입하여 운영체제 설치부터 정밀 사양 설정에 이르는 프로비저닝 프로세스를 자동화하여 노드 구성 일관성을 확보했습니다. 또한 동시성 테스트가 돌아가는 환경에서 장비 점유 충돌을 막고자 RDBMS 행 잠금(Row-level Lock) 기반의 자원 조율 모듈을 추가했으며, Go 언어로 자체 SmartNIC 하드웨어 모니터링 Exporter를 직접 개발하여 저수준 하드웨어 레지스터 상태까지 시계열 추적이 가능하게 조치했습니다.

## 주요 아키텍처 및 해결 과제 (Key Architecture & Technical Challenges)

- **베어메탈 프로비저닝 및 정적 구성 자동화**: GPU, 자사 및 경쟁사 NIC/DPU, NVMe 등 하드웨어 파편화가 존재하는 40여 대의 베어메탈 환경에 맞춰 Canonical MAAS 인프라를 연동했습니다. PXE 네트워크 부팅을 설정하고 부팅 완료 시점에 Cloud-init 구성을 트리거하여 전체 서버 장비들의 환경 설정 일관성을 기했습니다.
- **RDBMS 행 잠금(Row Lock)을 이용한 자원 점유 제어**: 다수의 테스트 파이프라인이 동시 실행되는 상황에서 장비 중복 침범 문제를 방지하기 위해, RDBMS를 단일 진실 원천(Single Source of Truth)으로 활용해 노드 사용 요청을 Row-level Lock으로 직렬화하고 충돌을 예방했습니다.
- **Go 언어 기반 SmartNIC Exporter 설계**:
  - **하드웨어 메트릭 수집 한계 보완**: 기본 호스트 모니터링 수집기(node_exporter)로는 확인할 수 없는 자사 SmartNIC 전용 하드웨어 컨트롤 레지스터 데이터 및 패킷 유실 카운터를 주기적으로 조회해야 했습니다.
  - **Prometheus 메트릭 시계열 연동**: CLI 저수준 도구의 결과 텍스트를 파싱하던 방식에서 탈피하여, Go 언어로 Prometheus 프로토콜 스펙을 지원하는 수집 Exporter 엔진을 직접 제작해 하드웨어 카운터 값을 실시간 시계열 데이터로 수집하도록 구현했습니다.
- **다차원 모니터링 파이프라인 연동**: 서버 제어 규격인 Redfish(BMC)와 물리 스위치 대역폭 상태 전송에 쓰이는 SNMP 연동을 통해 CPU, 메모리, 스토리지뿐 아니라 네트워크 장비 상태까지 포함하여 단일 Grafana 대시보드상에서 모니터링이 가능하도록 구성했습니다.

## 기여도 및 주요 성과 (Contributions & Achievements)

- **인프라 프로비저닝 자동화**: 서버 설치 및 구성의 수동 단계를 자동화하여 배포 리드타임을 수 분 이내로 단축하고 노드 간 환경 편차를 개선했습니다.
- **저수준 지표 모니터링을 통한 디버깅 효율화**: 실시간 레지스터 카운터 모니터링을 통해 고부하 트래픽 조건에서 병목 지점(Bottleneck)이나 패킷 유실 구간을 빠르게 파악하도록 기여했습니다.
