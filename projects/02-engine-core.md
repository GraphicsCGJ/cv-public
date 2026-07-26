# 동기화 엔진 코어 프레임워크 유지보수·개선

기술: C, POSIX System Call, epoll, mmap
소속: Tmax Tibero · 데이터 동기화 엔진팀

## 330자판 (325자)

```
[목표/배경]
이기종 OS(AIX·HP-UX·Solaris·Linux)의 상용 DB 동기화 엔진 코어를 맡아, 플랫폼 무관하게 예측·추적 가능한 동작이 목표였습니다.
[역할·수행]
dlmalloc 기반 자체 할당자를 유지보수하며 컴포넌트별 사용량 추적을 강화하고, non-blocking 소켓을 도입했습니다. 연결 비정상 종료 시 안 치워지던 epoll을 TCP timeout으로 정리되게 했습니다.
[성과·기여도]
이기종 OS에서 동일 메모리 동작·고객 리포팅을 가능케 했고, 운영 안정성을 높였습니다. (개인 기여도 약 60% — non-blocking·epoll 정리 주도)
```

## 면접 참고 메모

- prs_malloc = dlmalloc 기반, mmap으로 대영역 선점 후 free space를 유저 레벨에서 관리 (buddy 없음). 성능이 아니라 이식성·관측성이 핵심 가치.
  - 이기종 OS(AIX/HP-UX/Solaris)에서 동일한 할당 동작 보장
  - 컴포넌트별 사용량 추적·로깅 → 고객에게 메모리 사용을 설명·리포팅 가능
- non-blocking 소켓 = 초기 버전에 없던 내 신규 도입. epoll I/O multiplexing 자체는 기존 프레임워크(내 몫은 유지보수).
- epoll 리소스 정리 fix (내 실기여): 랜선 뽑힘 등 연결 비정상 종료 시 프레임워크가 epoll 등록을 안 치워 stale/leak → TCP timeout(커널 기본 동작)으로 정리되도록 개선. 커널/TCP 스펙 이해 + 장기 운영 안정성 → C++/저수준 job talking point.
- "malloc도 mallinfo 있잖아요?" → "네, 근데 프로세스 단위 + OS마다 달라서 컴포넌트별·크로스플랫폼 추적은 안 됩니다."
