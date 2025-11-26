
export enum Page {
  HOME = 'home',
  TEST_AI = 'test_ai',
  ABOUT = 'about',
  PRODUCT = 'product',
  BUSINESS = 'business',
  TESTIMONIALS = 'testimonials'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isFeedback?: boolean;
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  persona: string;
  systemInstruction: string;
}

export enum SendingStatus {
  IDLE = 'idle',
  SENDING = 'sending',
  ERROR = 'error'
}
