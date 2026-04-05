import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      title: '專業可靠',
      description: '擁有10年以上的行業經驗，提供專業、可靠的貿易服務。',
    },
    {
      title: '全球網絡',
      description: '與50多個國家的合作夥伴建立長期穩定的業務關係。',
    },
    {
      title: '客戶至上',
      description: '以客戶需求為中心，提供量身定制的解決方案。',
    },
    {
      title: '高效透明',
      description: '流程透明，溝通高效，確保每個環節都符合客戶期望。',
    },
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-2xl blur-2xl"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663070144485/aSt5pv6mkSff6ez8cLV8EV/about-section-visual-SxrCh9oeLVa4VrSj7xgQKA.webp"
                alt="國際貿易網絡"
                className="relative w-full max-w-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <div className="space-y-3">
              <p className="font-semibold text-lg tracking-wide" style={{ color: '#F5A623' }}>
                關於德全
              </p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2C3E50' }}>
                您的國際貿易
                <span className="block" style={{ color: '#2B8A8A' }}>合作夥伴</span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: 'rgba(44, 62, 80, 0.8)' }}>
              德全有限公司是一家專業的國際貿易服務商，致力於為企業提供全面、高效的進出口貿易解決方案。我們的團隊由經驗豐富的貿易專家組成，深入了解國際市場動態和海關規定。
            </p>

            <p className="text-lg leading-relaxed" style={{ color: 'rgba(44, 62, 80, 0.8)' }}>
              無論您是初次進入國際市場還是尋求擴展現有業務，德全都能為您提供專業的指導和支持，幫助您順利實現商業目標。
            </p>

            <div className="pt-4">
              <button className="btn-primary hover:shadow-lg hover:scale-105 transition-all duration-300">
                了解我們的服務
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16" style={{ borderTop: '1px solid #E8E6E1' }}>
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#2C3E50' }}>
            我們的核心價值
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl transition-colors duration-300 group"
                style={{ backgroundColor: '#F5F1E8' }}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 transition-colors" style={{ color: '#2B8A8A' }} />
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#2C3E50' }}>
                    {value.title}
                  </h4>
                  <p style={{ color: 'rgba(44, 62, 80, 0.7)' }} className="leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
