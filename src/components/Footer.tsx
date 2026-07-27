import { WHATSAPP_DISPLAY, SITE_URL, getWhatsAppLink } from '../utils/constants';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo light />
            </div>
            
            <p className="text-slate-400 mb-4 max-w-sm">
              Mais de 10 anos de experiência prática em administração condominial, unindo gestão, obras e resultados.
            </p>
            
            <div className="space-y-1">
              <p className="font-medium text-white">Raphael Pascon</p>
              <p className="text-sm">Administração de Condomínios</p>
              <p className="text-sm">Síndico Profissional</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre</a></li>
              <li><a href="#experiencia" className="hover:text-amber-500 transition-colors">Serviços e Experiência</a></li>
              <li><a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-xs text-slate-500 mb-1">WhatsApp</span>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500 transition-colors font-medium">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-500 mb-1">Site Oficial</span>
                <a href={`https://${SITE_URL}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500 transition-colors font-medium">
                  {SITE_URL}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Seven Condomínios. Todos os direitos reservados.</p>
          <p>Feito com excelência para a sua gestão.</p>
        </div>
      </div>
    </footer>
  );
}
