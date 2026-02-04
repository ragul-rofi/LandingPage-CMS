
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface StoryStep {
  id: number;
  title: string;
  content: string;
  image: string;
  direction: 'left' | 'right';
}

export interface QueueItem {
  id: number;
  status: 'waiting' | 'preparing' | 'ready';
  name: string;
}
