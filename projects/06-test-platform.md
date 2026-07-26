# HW/SW 검증 테스트 자동화 플랫폼

기술: Python (Airflow), Git, JFrog, DuckDB/Parquet, Grafana/Slack, Sentry, fio·iperf·perftest
검증 대상: 디바이스 드라이버 / 펌웨어 / FPGA 등 (330 블록엔 'HW/SW'로 통칭)
소속: MangoBoost · Software Engineering Group

## 330자판 (323자)

```
[목표/배경]
신규 HW/SW 검증이 PR·수동 실행에 의존해 누적 데이터가 없고, 결과·에러도 로그로 직접 봐야 했습니다.
[역할·수행]
빌드 감지→배포→매일 회귀를 자동화하고(Git·JFrog·Airflow), fio·iperf·perftest 워크로드를 웹 UI로 제어했습니다. 결과를 컬럼형 포맷(Parquet)으로 축적해 버전 간 성능을 비교·시각화하고, Sentry로 에러를 감지했습니다.
[성과·기여도]
PR·수동에서 매일 자동 수행·날짜별 데이터 축적으로 전환해, 장애·성능 증감을 자동 판단하게 했습니다. (개인 기여도 약 50% — 자동화·데이터 파이프라인)
```

## 메모

- 플랫폼 자체는 입사 전 존재(팀 공동). 내 기여 = 매일 회귀 자동화 + 결과를 로그 DB에 축적 후 Parquet/DuckDB로 버전 비교·시각화 + Sentry 에러 감지.
- 데이터 구조: 결과는 로그용 DB에 쌓고, Parquet 파일 기반으로 DuckDB에서 조회·시각화 (DuckDB는 큰 DB 아니라 Parquet 조회용).
- before: 테스트가 PR 트리거(CD)/수동에만 의존 → 누적 데이터 없음. after: 매일 자동 + 날짜별 축적 → 장애·성능 회귀 자동 판단.
- 목적: 자사 RNIC를 경쟁사(CX7/Thor2 등) 대비 검증. 계속 버전업 중이라 버전 간 비교가 중요.
- % 조정 가능 (팀 공동 영역이라 체감대로).
