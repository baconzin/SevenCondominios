import { getWhatsAppLink } from '../utils/constants';
import { FadeIn } from './FadeIn';
import { Calendar, Briefcase, GraduationCap, HardHat, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative bg-slate-50">
      {/* Decorative diagonal background like the flyer */}
      <div className="hidden lg:block absolute top-0 right-0 w-full lg:w-[60%] h-full bg-white -z-10 skew-x-[-12deg] translate-x-20 border-l-[12px] border-amber-500 shadow-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Image Side - Left */}
          <FadeIn direction="right" className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <img
                src="/raphael.png"
                alt="Raphael Pascon - Síndico Profissional"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-slate-900/20 bg-white"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
            </div>
          </FadeIn>

          {/* Content Side - Right */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-black text-slate-900 leading-[0.95] mb-4 tracking-tighter uppercase">
                Raphael <br/>
                <span className="text-slate-800">Pascon</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-700 font-medium mb-6">
                Administração de Condomínios<br/>
                <span className="text-amber-600 font-bold">Síndico Profissional</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl border-l-4 border-amber-500 pl-4 bg-white/50 py-2 rounded-r-lg">
                Gestão condominial com <strong className="text-slate-900">experiência</strong>, transparência e resultados. Administração profissional para condomínios que buscam organização financeira, manutenção eficiente e valorização patrimonial.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#experiencia"
                  className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-slate-900/20"
                >
                  Conheça minha atuação
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-amber-500/20"
                >
                  Conversar pelo WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Indicators Grid like the flyer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center text-center">
                  <div className="bg-slate-900 text-amber-500 p-3 rounded-full mb-3">
                    <Calendar size={24} />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Atuando desde</span>
                  <span className="text-2xl font-black text-amber-600">2014</span>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center text-center justify-center">
                  <div className="bg-slate-900 text-amber-500 p-3 rounded-full mb-2">
                    <Briefcase size={24} />
                  </div>
                  <span className="text-xl font-black text-amber-600 leading-none">10 anos</span>
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mt-1">de experiência</span>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center text-center justify-center">
                  <div className="bg-slate-900 text-amber-500 p-3 rounded-full mb-2">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Formado em</span>
                  <span className="text-[11px] font-black text-slate-900 leading-tight uppercase">Administração</span>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col items-center text-center justify-center">
                  <div className="bg-slate-900 text-amber-500 p-3 rounded-full mb-2">
                    <HardHat size={24} />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Técnico em</span>
                  <span className="text-[11px] font-black text-slate-900 leading-tight uppercase">Obras</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
