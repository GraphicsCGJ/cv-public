# 논문 (Publications)

> 논문당 1000자. 각 논문 블록을 해당 칸에 붙여넣기. 연도순.

## 논문 1 — IEEE VR 2019 (Poster)

```
제목: On Sharing Physical Geometric Space between Augmented and Virtual Reality Environments
등재기관: IEEE VR 2019 (IEEE Conf. on Virtual Reality and 3D User Interfaces, Poster) / 등재일: 2019.03
저자: W. Chun, G. Choi, J. An, W. Seo, S. Park, I. Ihm (pp. 884–885, Osaka, Japan)
링크: https://ieeexplore.ieee.org/document/8798228

요약:
AR과 VR은 각자 독립된 좌표계에서 동작해, 두 환경의 사용자가 같은 물리 공간을 공유하며 협업하기 어렵다는 문제가 있다. 본 연구는 AR 시스템과 VR 시스템이 각각 정의하는 두 world space 사이의 기하 변환을, 전용으로 설계한 트래킹 보드로 추정하는 방법을 제안한다. 이 변환을 확보하면 AR·VR 사용자가 하나의 통합된 물리 환경 안에서 서로 협업할 수 있어, 두 기술의 장점을 동시에 활용할 수 있다.
```

## 논문 2 — Virtual Reality (Springer, SCIE)

```
제목: Accurate and Stable Alignment of Virtual and Real Spaces Using Consumer-Grade Trackers
등재기관: Virtual Reality (Springer, SCIE) / 등재일: 2022.03
저자: J. An, G. Choi, W. Chun, Y. Joo, S. Park, I. Ihm (Vol. 26(1), pp. 125–141)
링크: https://doi.org/10.1007/s10055-021-00542-1

요약:
· 문제: VR·AR·MR 사용자가 같은 물리 공간을 공유·협업하려면 실공간과 가상 공간의 좌표계를 정확하고 안정적으로 정합해야 하며, 고가 전용 장비 없이 이를 달성하는 것이 과제다.
· 방법: 전용 제작한 캘리브레이션 보드와 소비자용 위치 트래커 3개로 물리 공간에 기준 좌표계를 설정하고, 가상 공간과의 기하 관계를 높은 수치 정확도·안정성으로 추정한다. 기존 컴퓨터비전 마커 트래킹과 결합해 활용.
· 결과: 저가 소비자 장비만으로 정확·안정적인 공간 정합을 달성 → 같은 공간의 VR·AR·MR 사용자가 서로의 기술을 활용하며 협업할 수 있다.
```

## 학위논문 (석사)

```
제목: An Effective Estimation of Coordinate System in Real Space Using Hybrid Marker Image (복합 마커 영상을 사용한 효과적인 현실 공간의 좌표계 추정)
서강대 컴퓨터공학 석사 (2019.12, 지도교수 임인성)

요약:
· 문제: AR 장비는 현실–가상 좌표계 정합이 부정확함. 기존 단일 마커 방식은 사용자가 이동하면 공유 좌표계가 어긋나, 마커를 계속 응시하며 재인식해야 해 이동이 제한됨.
· 방법: 단일 마커 대신 혼합(hybrid) 마커 영상을 사용(Vuforia 기반). 사용자의 위치·시선에 맞춰 혼합 마커 중 특정 부분 마커만 인식해 공유 좌표계를 추정하고, 카메라 intrinsic 행렬로 마커의 적정 크기를 산정. 좌표계 추정은 최근접·가우시안 보간·쿼터니언(quaternion) 평균 방식으로 안정화.
· 검증: Microsoft HoloLens, Samsung Galaxy Tab S6에서 실험해 기존 단일 마커 방식 대비 정성적 개선 확인.
· 결과: 특정 마커를 계속 바라볼 필요 없이 자유롭게 이동 가능 → 좌표계 정합의 안정성·이동 자유도 향상.
```

## 링크 레퍼런스

- #1 IEEE Xplore(공식): https://ieeexplore.ieee.org/document/8798228
- #1 무료 전문(개인서버, 소멸 가능): http://grmanet.sogang.ac.kr/ihm/webpapers/181201_MixedReality.pdf
- #2 DOI(공식): https://doi.org/10.1007/s10055-021-00542-1
- #2 무료 전문(Springer SharedIt): https://link.springer.com/epdf/10.1007/s10055-021-00542-1?sharing_token=1eiGZ8wjDHfKGXu1ztzc6fe4RwlQNchNByi7wbcMAY446-S9NuT-h0m9TF_3EcO798qL6P6KWad4O7udfaAhO03WREVuOvWwf0aqECInQ-4uAB2vLKsDFNoWLlyG7HNNjrhE6_D5Fv6VO8lgeBrgbPEb7RnGYRWAQTRLJLndtS4%3D

## 메모

- 각 칸 1000자 → 요약 넉넉히 넣음. 톤: "3D 잘한다" 아니라 "좌표·공간 정합" (이 job 2D).
- 검증 상태:
  - 학위논문 ✅ 실제 PDF(~/Downloads/졸업논문_최규진_compressed.pdf) 목차·abstract로 검증 완료 (Vuforia, HoloLens/Galaxy Tab S6, 최근접/가우시안/쿼터니언 방식).
  - #1(IEEE) ✅ 요약 내용 정확 (무료 전문 grmanet 서버는 현재 접속 불가라 재검증만 못 함).
  - #2(Springer) ✅ 검증 완료 — Springer 우회(cookies_not_supported fallback)로 초록 확인, 요약이 실제 초록과 일치. 키워드: consumer-grade trackers, space alignment algorithms, numerical accuracy & stability, extended-reality. (online 2021.06 / 이슈 2022.03)
- ⚠️ #2 "SCIE 등재" 최종 확인 권장.
