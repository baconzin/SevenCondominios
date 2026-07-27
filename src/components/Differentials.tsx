import { FadeIn } from './FadeIn';
import { Eye, Settings, Heart, HardHat, Compass, FileCheck } from 'lucide-react';

const differentials = [
  {
    icon: <Eye size={32} />,
    title: 'Transparência e confiança',
    desc: 'Informações claras, prestação de contas organizada e comunicação direta.'
  },
  {
    icon: <Settings size={32} />,
    title: 'Gestão eficiente',
    desc: 'Planejamento financeiro, controle de custos e decisões baseadas em prioridades.'
  },
  {
    icon: <Heart size={32} />,
    title: 'Foco em pessoas',
    desc: 'Relacionamento respeitoso com moradores, conselheiros, funcionários e fornecedores.'
  },
  {
    icon: <HardHat size={32} />,
    title: 'Conhecimento técnico',
    desc: 'Capacidade para acompanhar obras, serviços, manutenções e melhorias.'
  },
  {
    icon: <Compass size={32} />,
    title: 'Presença e acompanhamento',
    desc: 'Participação ativa na rotina do condomínio e nas principais decisões.'
  },
  {
    icon: <FileCheck size={32} />,
    title: 'Organização documental',
    desc: 'Contratos, atas, orçamentos, documentos e obrigações mantidos de forma organizada.'
  }
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Uma administração <span className="text-amber-600">presente</span>, técnica e transparente
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-900/5 h-full border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="text-amber-500 mb-6 bg-amber-50 inline-block p-4 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
