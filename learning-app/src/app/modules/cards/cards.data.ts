import { Card } from './cards.type';

const DEFAULT_COLOR = '#9B9A9A';
const DATA: Card[] = [
  {
    id: 1,
    theme: 'Conversation',
    sourceText: 'Do you speak a language other than English?',
    translation: 'Говоришь ли ты на другом языке кроме английского?',
    color: DEFAULT_COLOR
  },
  {
    id: 2,
    theme: 'Eating out',
    sourceText: 'Excuse me. We would like to order, please.',
    translation: 'Извините, мы бы хотели сделать заказ.',
    color: DEFAULT_COLOR
  },
  {
    id: 3,
    theme: 'Eating out',
    sourceText: 'A table for two, please.',
    translation: 'Столик на двоих, пожалуйста.',
    color: DEFAULT_COLOR
  },
  {
    id: 4,
    theme: 'Eating out',
    sourceText: 'Is there a house specialty?',
    translation: 'Есть ли у заведения фирменное блюдо?',
    color: DEFAULT_COLOR
  },
  {
    id: 5,
    theme: 'Eating out',
    sourceText: 'Goodbye, please come again.',
    translation: 'До свидания, приходите ещë.',
    color: DEFAULT_COLOR
  },
  {
    id: 6,
    theme: 'Eating out',
    sourceText: 'Excuse me, could you bring some more sugar, please?',
    translation: 'Извините, могли бы вы принести сахар, пожалуйста.',
    color: DEFAULT_COLOR
  },
  {
    id: 7,
    theme: 'At the station',
    sourceText: 'Where can I buy a bus ticket?',
    translation: 'Где я могу купить билет на автобус?',
    color: DEFAULT_COLOR
  },
  {
    id: 8,
    theme: 'At the station',
    sourceText: 'Three tickets, please.',
    translation: 'Три билета, пожалуйста.',
    color: DEFAULT_COLOR
  },
  {
    id: 9,
    theme: 'At the station',
    sourceText: 'I would like to reserve a seat.',
    translation: 'Я хочу забронировать место.',
    color: DEFAULT_COLOR
  },
  {
    id: 10,
    theme: 'Travel',
    sourceText: 'Could you please show me where it is on the map?',
    translation: 'Могли бы вы, пожалуйста, показать мне это на карте?',
    color: DEFAULT_COLOR
  },
  {
    id: 11,
    theme: 'Travel',
    sourceText: 'Is it far from here?',
    translation: 'Это далеко отсюда?',
    color: DEFAULT_COLOR
  },
  {
    id: 12,
    theme: 'Travel',
    sourceText: 'Go straight and then turn right.',
    translation: 'Идите прямо, а затем поверните направо.',
    color: DEFAULT_COLOR
  },
  {
    id: 13,
    theme: 'At the doctor',
    sourceText: 'I need a sick note. It has gotten worse.',
    translation: 'Мне нужна медицинская справка. Мне стало хуже.',
    color: DEFAULT_COLOR
  },
  {
    id: 14,
    theme: 'At the hotel',
    sourceText: 'The heating does not work and my neighbour is too loud.',
    translation: 'Тут не работает отопление и мой сосед слишком шумный.',
    color: DEFAULT_COLOR
  },
  {
    id: 15,
    theme: 'At the hotel',
    sourceText: 'I would like to change my room, because I requested a room with a view.',
    translation: 'Я хочу поменять свой номер, поскольку я просил комнату с красивым видом.',
    color: DEFAULT_COLOR
  },
  {
    id: 16,
    theme: 'At the hotel',
    sourceText: 'I want to make a reservation for the room.',
    translation: 'Я хочу забронировать номер.',
    color: DEFAULT_COLOR
  },
  {
    id: 17,
    theme: 'At the shopping mall',
    sourceText: 'Can I try it on?',
    translation: 'Можно я это примерю?',
    color: DEFAULT_COLOR
  },
  {
    id: 18,
    theme: 'At the shopping mall',
    sourceText: 'I would like another color.',
    translation: 'Я бы хотел другой цвет.',
    color: DEFAULT_COLOR
  },
  {
    id: 19,
    theme: 'At the shopping mall',
    sourceText: 'Where is the cashdesk?',
    translation: 'Где касса?',
    color: DEFAULT_COLOR
  },
  {
    id: 20,
    theme: 'At the shopping mall',
    sourceText: 'I find it too expensive.',
    translation: 'Я считаю, что это слишком дорого.',
    color: DEFAULT_COLOR
  },
  {
    id: 21,
    theme: 'At the shopping mall',
    sourceText: 'I would like to return my purchase and get a refund.',
    translation: 'Я хочу вернуть свою покупку и получить деньги обратно.',
    color: DEFAULT_COLOR
  }
];

export { DATA, DEFAULT_COLOR };
