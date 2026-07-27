import { FadeIn } from './FadeIn';
import { CheckCircle2 } from 'lucide-react';

const activities = [
  'Solicitação e comparação de orçamentos',
  'Análise de propostas',
  'Acompanhamento de cronogramas',
  'Fiscalização de serviços',
  'Controle de materiais',
  'Comunicação com moradores',
  'Verificação de qualidade',
  'Gestão de prestadores',
  'Redução de retrabalhos',
  'Planejamento de manutenções preventivas'
];

export function Construction() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div>
            <FadeIn>
              <div className="inline-block bg-amber-100 text-amber-700 text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
                Técnico em Obras
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Gestão que vai <span className="text-amber-600">além</span> da administração
              </h2>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                O conhecimento técnico em obras permite acompanhar cada serviço com maior segurança, controle e responsabilidade.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pr%C3%A9dio_em_constru%C3%A7%C3%A3o_na_Universidade_Federal_Fluminense.jpg"
                  alt="Acompanhamento técnico de obras"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
