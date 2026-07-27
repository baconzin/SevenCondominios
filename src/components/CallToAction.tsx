import { FadeIn } from './FadeIn';
import { getWhatsAppLink } from '../utils/constants';
import { ArrowRight, Calendar } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40V40z" fill="none" />
              <path d="M40 0H0v40h40V0z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-slate-500" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Seu condomínio precisa de uma gestão mais <span className="text-amber-500">organizada e presente?</span>
          </h2>
          
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Conheça uma administração profissional focada em transparência, planejamento, valorização patrimonial e qualidade de vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink('Olá, Raphael. Gostaria de solicitar uma apresentação da sua proposta de administração.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-amber-500/20"
            >
              <Calendar size={20} />
              Solicitar uma apresentação
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all border border-white/10"
            >
              Conversar pelo WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
