export const WHATSAPP_NUMBER = '5519971636969';
export const WHATSAPP_DISPLAY = '(19) 97163-6969';
export const SITE_URL = 'www.sevencondominios.com.br';

export const getWhatsAppLink = (message?: string) => {
  if (message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}`;
};
