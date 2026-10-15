export function formatBRL(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function getRestaurantStatus(): {
  isOpen: boolean;
  closingTime: string;
  openingTime: string;
  statusText: string;
  scheduleText: string;
} {
  const now = new Date();
  // Brazil East timezone (UTC-3)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const brDate = new Date(utc - 3 * 3600000);

  const dayOfWeek = brDate.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  const hour = brDate.getHours();
  const minute = brDate.getMinutes();
  const currentTime = hour + minute / 60;

  // Mon-Tue (days 1 and 2): 11:00 to 18:00
  // Wed-Sun (days 3, 4, 5, 6, 0): 11:00 to 23:00
  const isMonOrTue = dayOfWeek === 1 || dayOfWeek === 2;
  const closeHour = isMonOrTue ? 18 : 23;
  const openHour = 11;

  const isOpen = currentTime >= openHour && currentTime < closeHour;

  if (isOpen) {
    return {
      isOpen: true,
      closingTime: `${closeHour}:00`,
      openingTime: '11:00',
      statusText: `Aberto agora · Fecha às ${closeHour}:00`,
      scheduleText: isMonOrTue ? 'Hoje: 11h às 18h' : 'Hoje: 11h às 23h',
    };
  } else {
    return {
      isOpen: false,
      closingTime: `${closeHour}:00`,
      openingTime: '11:00',
      statusText: `Fechado no momento · Abre às 11:00`,
      scheduleText: isMonOrTue ? 'Hoje: 11h às 18h' : 'Hoje: 11h às 23h',
    };
  }
}
