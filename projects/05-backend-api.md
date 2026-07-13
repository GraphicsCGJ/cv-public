# 백엔드 API 개발

기술: Java (Spring, Netty), 자체 바이너리 프로토콜, REST API
소속: Tmax Tibero · 데이터 동기화 엔진팀

## 330자판 (329자)

```
[목표/배경]
동기화 엔진을 맵·운영 도구와 잇는 백엔드 API가 필요했고, 엔진의 기존 통신 프로토콜을 재사용해 연동해야 했습니다.
[역할·수행]
Java(Spring·Netty) 기반 백엔드 API 엔드포인트를 구현했습니다. 기존 엔진 프로토콜 재사용 위해 Netty TCP + 자체 프로토콜 처리기(serializer/deserializer)로 연동했고, React 웹 UI용 CSR JSON API도 담당했습니다.
[성과·기여도]
운영툴이 API만으로 엔진을 제어·조회하게 했고, 프로토콜 재사용으로 통합 비용을 줄였습니다. (개인 기여도 약 80% — 엔드포인트·프로토콜 직접)
```

## 메모

- JD 대응: 이 job의 "백엔드 API 개발"(맵툴/운영툴/gRPC) 섹션에 정면 대응. 지원자격(3년+ 백엔드 API)도 여기 + MangoBoost Django로 충족.
- 자체 프로토콜 처리기(serializer/deserializer) = gRPC(Protocol Buffers RPC)와 개념 동일 → gRPC 갭의 정직한 브릿지 ("바이너리 프로토콜 직접 설계 → gRPC 빠르게 적응").
- 프론트엔드 정직 스코핑: React를 바닥부터 만든 게 아님. 내가 한 건 **CSR용 JSON을 주는 API 연동**(= 백엔드). FE는 CSR 개념·연동 수준의 기본 이해로만 포지셔닝 (풀스택 주장 ❌).
- 정합성 검사·초기 적재(ETL)는 이 API가 제공한 기능 중 하나 (부차). 상세는 tibero.md 불릿.
