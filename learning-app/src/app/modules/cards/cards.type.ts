import { DEFAULT_COLOR } from './cards.data';

const NEW_CARD_ID = -1;

interface ICard {
  id: number;
  theme: string;
  sourceText: string;
  translation: string;
  color: string;
}

class Card implements ICard{
  id: number;
  theme: string;
  sourceText: string;
  translation: string;
  color: string;

  constructor(
    id = 0,
    theme = '',
    sourceText = '',
    translation = '',
    color = DEFAULT_COLOR,
  ) {
    this.id = id;
    this.theme = theme;
    this.sourceText = sourceText;
    this.translation = translation;
    this.color = color;
  }
}

export { Card, NEW_CARD_ID };
