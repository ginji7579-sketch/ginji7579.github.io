import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663070144485/aSt5pv6mkSff6ez8cLV8EV/hero-background-oMnaxMrGRdxnRLxrxfr5gb.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-white/85 md:bg-gradient-to-r md:from-white/95 md:to-transparent"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-semibold text-lg tracking-wide" style={{ color: '#F5A623' }}>
                歡迎來到德全
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#2C3E50' }}>
                專業國際
                <span className="block gradient-text">貿易服務</span>
              </h1>
            </div>

            <p className="text-lg leading-relaxed max-w-md" style={{ color: 'rgba(44, 62, 80, 0.8)' }}>
              德全有限公司致力於提供全面、可靠的進出口貿易解決方案。憑藉多年的行業經驗和專業團隊，我們幫助企業拓展國際市場，實現商業目標。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary hover:shadow-lg hover:scale-105 transition-all duration-300">
                了解更多
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-outline hover:shadow-lg transition-all duration-300">
                聯絡我們
              </button>
            </div>

            <div className="pt-8" style={{ borderTop: '1px solid #E8E6E1' }}>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-bold" style={{ color: '#2B8A8A' }}>10+</p>
                  <p className="text-sm" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>年行業經驗</p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: '#2B8A8A' }}>500+</p>
                  <p className="text-sm" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>滿意客戶</p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: '#2B8A8A' }}>50+</p>
                  <p className="text-sm" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>國家合作</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663070144485/aSt5pv6mkSff6ez8cLV8EV/logo_ff0fe2ce.jpg"
                alt="德全有限公司 Logo"
                className="relative w-80 h-80 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2" style={{ color: '#2B8A8A' }}>
          <p className="text-sm font-medium">向下滾動</p>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
