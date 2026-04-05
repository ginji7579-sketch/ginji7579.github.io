import { Package, Globe, FileText, Truck, BarChart3, Users } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: '進出口代理',
      description: '專業的進出口代理服務，幫助企業順利進入國際市場。',
    },
    {
      icon: Globe,
      title: '國際物流',
      description: '全球物流網絡，確保貨物安全、及時地到達目的地。',
    },
    {
      icon: FileText,
      title: '報關清關',
      description: '專業的報關清關服務，簡化海關手續，加快通關速度。',
    },
    {
      icon: Truck,
      title: '運輸管理',
      description: '多種運輸方式選擇，滿足不同客戶的運輸需求。',
    },
    {
      icon: BarChart3,
      title: '市場分析',
      description: '深入的市場研究和分析，助力企業制定正確的商業策略。',
    },
    {
      icon: Users,
      title: '客戶支持',
      description: '24/7 專業客戶支持團隊，隨時解答您的疑問。',
    },
  ];

  return (
    <section id="services" className="section-spacing" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="font-semibold text-lg tracking-wide" style={{ color: '#F5A623' }}>
            我們的服務
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2C3E50' }}>
            全面的貿易解決方案
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>
            德全提供一站式的國際貿易服務，涵蓋進出口、物流、報關等全方位解決方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ borderColor: '#E8E6E1', borderWidth: '1px' }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg transition-colors duration-300" style={{ backgroundColor: 'rgba(43, 138, 138, 0.1)' }}>
                    <Icon className="w-7 h-7" style={{ color: '#2B8A8A' }} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300" style={{ color: '#2C3E50' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'rgba(44, 62, 80, 0.7)' }} className="leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderTop: '1px solid #E8E6E1' }}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-semibold transition-colors"
                    style={{ color: '#2B8A8A' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F5A623'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#2B8A8A'}
                  >
                    了解更多
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>
            需要更多信息？我們的專業團隊隨時準備為您服務。
          </p>
          <button className="btn-secondary hover:shadow-lg hover:scale-105 transition-all duration-300">
            立即聯絡我們
          </button>
        </div>
      </div>
    </section>
  );
}
