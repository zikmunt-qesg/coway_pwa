
export const state = () => ({
    menu: [
        {
            title: 'MATERIAL TOPICS',
            link: '/static_page/Product-and-Service-Innovation',
            text: '사람들이 언제 어디서나 깨끗한 물과 공기로 안심하고 건강한 삶을 살 수 있도록 하는 일, 코웨이가 걸어 온 한결 같은 길입니다.',
            child: [
                {
                    title: '제품과 서비스의 혁신',
                    link: '/static_page/Product-and-Service-Innovation',
                    child:
                        [
                            {
                                title: '본질적 가치를 높이는 제품 혁신',
                                link: '/static_page/Product-and-Service-Innovation#1'
                            },
                            {
                                title: '미래 기술 기반의 서비스 혁신',
                                link: '/static_page/Product-and-Service-Innovation#2'
                            },
                            {
                                title: '혁신을 위한 연구개발 역량 강화',
                                link: '/static_page/Product-and-Service-Innovation#3'
                            },

                        ]
                },
                {
                    title: '제품 책임',
                    link: '/static_page/Product-Responsibility',
                    child:
                        [
                            {
                                title: '제품 책임 거버넌스',
                                link: '/static_page/Product-Responsibility#1'
                            },
                            {
                                title: '제품 신뢰성 강화',
                                link: '/static_page/Product-Responsibility#2'
                            },
                            {
                                title: '안전 인증 확대 및 고객 안심',
                                link: '/static_page/Product-Responsibility#3'
                            }
                        ]
                },
                {
                    title: '정보보안 및 개인정보보호',
                    link: '/static_page/Information-Security-and-Personal-Information-Protection',
                    child:
                        [
                            {
                                title: '정보보안 및 개인정보보호 원칙과 조직',
                                link: '/static_page/Information-Security-and-Personal-Information-Protection#1'
                            },
                            {
                                title: '정보보호 관리체계',
                                link: '/static_page/Information-Security-and-Personal-Information-Protection#2'
                            },
                            {
                                title: '모니터링 및 실사 프로세스',
                                link: '/static_page/Information-Security-and-Personal-Information-Protection#3'
                            }
                        ]
                }
            ]
        },
        {
            title: 'CARE FOR SUSTAINABILITY',
            link: '/static_page/CEO-Message',
            text: '비즈니스 전 과정에서 영향을 주고 받는 모든 이해관계자와 함께 새로운 가치를 더하는 일, 코웨이 지속가능경영의 방향입니다.',
            child: [
                {
                    title: 'CEO Message',
                    link: '/static_page/CEO-Message'
                },
                {
                    title: '가치창출 스토리',
                    link: '/static_page/Value-Creation-Story',
                    child:
                        [
                            {
                                title: '비즈니스 모델',
                                link: '/static_page/Value-Creation-Story#1'
                            },
                            {
                                title: '비즈니스 밸류체인',
                                link: '/static_page/Value-Creation-Story#2'
                            }
                        ]
                },
                {
                    title: '이해관계자 참여 및 중요 주제',
                    link: '/static_page/Stakeholder-Engagement-and-Material-Issues',
                    child:
                        [
                            {
                                title: '이해관계자 참여',
                                link: '/static_page/Stakeholder-Engagement-and-Material-Issues#1'
                            },
                            {
                                title: '중대성 평가',
                                link: '/static_page/Stakeholder-Engagement-and-Material-Issues#2'
                            },
                            {
                                title: '중대성 맥락과 중장기 목표',
                                link: '/static_page/Stakeholder-Engagement-and-Material-Issues#3'
                            }
                        ]
                },
                {
                    title: '지배구조',
                    link: '/static_page/Corporate-Governance',
                    child:
                        [
                            {
                                title: '이사회 중심의 책임경영 수행',
                                link: '/static_page/Corporate-Governance#1'
                            },
                            {
                                title: '이사회의 독립성 및 전문성',
                                link: '/static_page/Corporate-Governance#2'
                            },
                            {
                                title: '이사회 산하 위원회 운영',
                                link: '/static_page/Corporate-Governance#3'
                            },
                            {
                                title: '성과평가와 보수 지급',
                                link: '/static_page/Corporate-Governance#4'
                            },
                            {
                                title: '소유구조 및 의결권',
                                link: '/static_page/Corporate-Governance#5'
                            }
                        ]
                },
                {
                    title: '윤리경영',
                    link: '/static_page/Ethics-Management',
                    child:
                        [
                            {
                                title: '윤리강령',
                                link: '/static_page/Ethics-Management#1'
                            },
                            {
                                title: '윤리진단',
                                link: '/static_page/Ethics-Management#2'
                            },
                            {
                                title: '윤리교육',
                                link: '/static_page/Ethics-Management#3'
                            }
                        ]
                },
                {
                    title: '리스크 관리',
                    link: '/static_page/Risk-Management',
                    child:
                        [
                            {
                                title: '전사적 리스크 관리 체계',
                                link: '/static_page/Risk-Management#1'
                            },
                            {
                                title: '잠재 리스크의 관리',
                                link: '/static_page/Risk-Management#2'
                            }
                        ]
                },
                {
                    title: '경제적 가치 창출과 분배',
                    link: '/static_page/Economic-Value-Creation-and-Distribution',
                    child:
                        [
                            {
                                title: '경제적 가치 창출',
                                link: '/static_page/Economic-Value-Creation-and-Distribution#1'
                            },
                            {
                                title: '경제적 가치 분배',
                                link: '/static_page/Economic-Value-Creation-and-Distribution#2'
                            },
                            {
                                title: '조세 정책',
                                link: '/static_page/Economic-Value-Creation-and-Distribution#3'
                            }
                        ]
                },
            ]
        },
        {
            title: 'CARE FOR ENVIRONMENT',
            link: '/static_page/Environmental-Management-for-Clean-Water-and-Air',
            text: '비즈니스 운영 과정에서 환경영향을 최소화하고 환경을 건강하게 지키는 일, 그린 글로벌 리더 코웨이가 함께합니다.',
            child: [
                {
                    title: '깨끗한 물과 공기를 위한 환경경영',
                    link: '/static_page/Environmental-Management-for-Clean-Water-and-Air',
                    child:
                        [
                            {
                                title: '환경경영을 통한 깨끗함의 가치 실현',
                                link: '/static_page/Environmental-Management-for-Clean-Water-and-Air#1'
                            },
                            {
                                title: '가치사슬 전체의 환경역량 강화',
                                link: '/static_page/Environmental-Management-for-Clean-Water-and-Air#2'
                            }
                        ]
                },
                {
                    title: '친환경 제품 개발과 제품 생애주기 관리',
                    link: '/static_page/Eco-Friendly-Product-Development-and-Product-Life-Cycle-Management',
                    child:
                        [
                            {
                                title: '친환경 제품과 서비스, 비즈니스 설계',
                                link: '/static_page/Eco-Friendly-Product-Development-and-Product-Life-Cycle-Management#1'
                            },
                            {
                                title: '자원효율성 향상과 순환경제 지원',
                                link: '/static_page/Eco-Friendly-Product-Development-and-Product-Life-Cycle-Management#2'
                            }
                        ]
                },
                {
                    title: '기후변화 대응',
                    link: '/static_page/Responses-to-Climate-Change',
                    child:
                        [
                            {
                                title: '기후변화 목표 및 시나리오 관리',
                                link: '/static_page/Responses-to-Climate-Change#1'
                            },
                            {
                                title: '기후변화의 위험과 기회 분석',
                                link: '/static_page/Responses-to-Climate-Change#2'
                            },
                            {
                                title: '협력사 탄소 파트너십',
                                link: '/static_page/Responses-to-Climate-Change#3'
                            },
                            {
                                title: '온실가스 · 에너지 및 기타 환경 데이터',
                                link: '/static_page/Responses-to-Climate-Change#4'
                            }
                        ]
                }
            ]
        },
        {
            title: 'CARE FOR SOCIETY',
            link: '/static_page/Employee-Centered-Company-Culture-and-Safe-Working-Environment',
            text: '우리가 하는 일이 더 나은 세상, 더 좋은 사회, 더 행복한 삶을 만드는 데 기여하는지 코웨이는 확인하고 노력하겠습니다.',
            child:
                [
                    {
                        title: '임직원 중심의 기업문화와 안전한 근무환경',
                        link: '/static_page/Employee-Centered-Company-Culture-and-Safe-Working-Environment',
                        child:
                            [
                                {
                                    title: '착한성장을 위한 역량 강화',
                                    link: '/static_page/Employee-Centered-Company-Culture-and-Safe-Working-Environment#1'
                                },
                                {
                                    title: '커뮤니케이션 기반의 기업문화',
                                    link: '/static_page/Employee-Centered-Company-Culture-and-Safe-Working-Environment#2'
                                },
                                {
                                    title: '안전하고 건강한 근무환경',
                                    link: '/static_page/Employee-Centered-Company-Culture-and-Safe-Working-Environment#3'
                                }
                            ]
                    },
                    {
                        title: '라이프케어 전문 파트너 양성',
                        link: '/static_page/Train-Lifecare-Professional-Partners',
                        child:
                            [
                                {
                                    title: '파트너 전문성 강화',
                                    link: '/static_page/Train-Lifecare-Professional-Partners#1'
                                },
                                {
                                    title: '파트너 상생 및 커뮤니케이션',
                                    link: '/static_page/Train-Lifecare-Professional-Partners#2'
                                }
                            ]
                    },
                    {
                        title: '동반성장',
                        link: '/static_page/Win-Win',
                        child:
                            [
                                {
                                    title: '협력사와의 소통을 통한 성장 지원',
                                    link: '/static_page/Win-Win#1'
                                },
                                {
                                    title: '공정거래 문화 조성',
                                    link: '/static_page/Win-Win#2'
                                }
                            ]
                    },
                    {
                        title: '지역사회',
                        link: '/static_page/Local-Community',
                        child:
                            [
                                {
                                    title: '코웨이 다운 사회공헌',
                                    link: '/static_page/Local-Community#1'
                                },
                                {
                                    title: '깨끗한 물과 공기를 위한 코웨이의 약속',
                                    link: '/static_page/Local-Community#2'
                                },
                                {
                                    title: '공공정책 참여',
                                    link: '/static_page/Local-Community#3'
                                }
                            ]
                    },
                    {
                        title: '협력사 CSR 리포트',
                        link: '/static_page/Supplier-CSR-Report',
                        child:
                            [
                                {
                                    title: '협력사 행동 규범',
                                    link: '/static_page/Supplier-CSR-Report#1'
                                },
                                {
                                    title: '협력사 지속가능성 평가',
                                    link: '/static_page/Supplier-CSR-Report#2'
                                },
                                {
                                    title: '분쟁광물',
                                    link: '/static_page/Supplier-CSR-Report#3'
                                }
                            ]
                    },
                    {
                        title: '인권 리포트',
                        link: '/static_page/Human-Rights-Report',
                        child:
                            [
                                {
                                    title: '인권경영 원칙 및 가이드',
                                    link: '/static_page/Human-Rights-Report#1'
                                },
                                {
                                    title: '인권 리스크 식별 및 완화 프로세스',
                                    link: '/static_page/Human-Rights-Report#2'
                                }
                            ]
                    }
                ]
        },
        {
            title: 'DATA AND FRAMEWORKS',
            link: '/static_page/Policies-and-Initiatives',
            child:
                [
                    {
                        title: '정책 및 이니셔티브',
                        link: '/static_page/Policies-and-Initiatives',
                        child:[
                            {
                                title: '지속가능성 정책',
                                link: '/static_page/Policies-and-Initiatives'
                            },
                            {
                                title: '참여 이니셔티브',
                                link: '/static_page/Policies-and-Initiatives?p=Initiatives'
                            },
                        ]
                    },
                    {
                        title: '보고 프레임워크 인덱스',
                        link: '/framework/gri',
                        child:[
                            {
                                title: 'GRI',
                                link: '/framework/gri'
                            },
                            {
                                title: 'SASB',
                                link: '/framework/sasb'
                            },
                            {
                                title: 'DJSI Public',
                                link: '/framework/djsi'
                            }
                        ]
                    },
                    {
                        title: '보고 범위 및 검증',
                        link: '/static_page/About-This-Report-and-Assurance',
                        child:[
                            {
                                title: 'About This Report',
                                link: '/static_page/About-This-Report-and-Assurance'
                            },
                            {
                                title: '제3자 검증 의견서',
                                link: '/static_page/About-This-Report-and-Assurance?p=Independent-Assurance-Report'
                            },
                            {
                                title: '온실가스 검증 의견서',
                                link: '/static_page/About-This-Report-and-Assurance?p=GHG-Assurance-Report'
                            }
                        ]
                    },
                    {
                        title: 'Sustainability News',
                        link: '/news'
                    }
                ]
        }

    ]
})