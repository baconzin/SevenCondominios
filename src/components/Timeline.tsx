import { FadeIn } from './FadeIn';

const timeline = [
  {
    title: '2014 — Início da atuação',
    desc: 'Início das atividades em administração condominial e gestão de condomínios.'
  },
  {
    title: '2014 a 2017 — Expansão da experiência',
    desc: 'Administração de diferentes condomínios, atuação em assembleias, manutenção, segurança e relacionamento com moradores.'
  },
  {
    title: 'Experiência em operações e segurança',
    desc: 'Participação na criação e operação de empresa de portaria virtual e controle de acesso.'
  },
  {
    title: 'Experiência internacional',
    desc: 'Desenvolvimento de competências em liderança, organização, controle de processos e gestão de equipes.'
  },
  {
    title: 'Formação técnica em obras',
    desc: 'Aprimoramento da capacidade de acompanhar manutenções, reformas e obras condominiais.'
  },
  {
    title: 'Atualidade',
    desc: 'Atuação como síndico profissional e administrador, unindo gestão, obras, planejamento e relacionamento.'
  }
];

export function Timeline() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Uma trajetória construída com <span className="text-amber-600">experiência prática</span>
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={index} direction={isEven ? 'right' : 'left'}>
                  <div className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Center Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white -translate-x-1/2 z-10"></div>

                    {/* Desktop spacer */}
                    <div className="hidden md:block w-1/2 px-8"></div>

                    {/* Content */}
                    <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>

                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
