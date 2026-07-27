import { FadeIn } from './FadeIn';
import { CheckCircle2 } from 'lucide-react';

const services = [
  'Gestão administrativa e financeira de condomínios',
  'Condução de assembleias e relacionamento com moradores',
  'Planejamento, acompanhamento e fiscalização de obras e manutenções',
  'Regularização, organização documental e apoio à gestão',
  'Contratação e gestão de fornecedores e prestadores de serviço',
  'Controle de custos, orçamento e melhoria operacional',
  'Atuação em condomínios horizontais, verticais, populares e de alto padrão',
  'Experiência prática em síndico profissional, operação e rotina condominial'
];

export function Services() {
  return (
    <section id="experiencia" className="py-20 lg:py-32 bg-slate-50 relative">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border-t-8 border-amber-500">
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-8">
                <div className="bg-transparent border-2 border-amber-500 text-amber-500 p-3 rounded-xl flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight uppercase">
                    Experiência <br />
                    <span className="text-amber-500">E Atuação</span>
                  </h2>
                </div>
              </div>

              <div className="space-y-5">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="text-amber-500 mt-1 flex-shrink-0" size={22} />
                    <p className="text-slate-200 font-medium text-lg leading-snug">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-950 p-6 sm:p-8 flex items-center gap-4">
              <div className="bg-amber-500 text-slate-900 p-3 rounded-full flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <p className="text-slate-300 font-medium text-lg leading-tight">
                <span className="text-amber-500 font-bold">Mais de 10 anos</span> de experiência prática em administração condominial, unindo <span className="text-amber-500 font-bold">gestão, obras e resultados.</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
