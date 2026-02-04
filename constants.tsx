
import { Feature, StoryStep } from './types';


export const FEATURES: Feature[] = [
  {
    id: 'qr-ordering',
    title: 'QR Code Ordering',
    description: 'Place orders directly from the table or desk. No more physical line-ups at the counter.',
    icon: 'fa-qrcode',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'live-tracking',
    title: 'Real-time Tracking',
    description: 'Monitor your order status live. Get notified exactly when your food is ready for pickup.',
    icon: 'fa-bell',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'inventory',
    title: 'Smart Inventory',
    description: 'Automated stock management that alerts you when ingredients are running low.',
    icon: 'fa-box-open',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Deep insights into peak hours, popular dishes, and customer behavior for better planning.',
    icon: 'fa-chart-line',
    color: 'bg-purple-100 text-purple-600'
  }
];

export const STORY_STEPS: StoryStep[] = [
  {
    id: 1,
    title: "The Lunch Hour Rush",
    content: "It's 1:00 PM. Alex has 30 minutes for lunch. But the canteen queue is 40 people deep. Alex ends up skipping lunch just to be back on time. This is the problem we solve.",
    image: "/images/notinq_step_1_HD_16_9.png",
    direction: 'left'
  },
  {
    id: 2,
    title: "The NotinQ Experience",
    content: "Next day, the canteen adopts NotinQ. Alex opens the app at his desk, orders a Sandwich, and continues working. No stress, no standing, no wasted time.",
    image: "/images/notinq_step_2_HD_16_9.png",
    direction: 'right'
  },
  {
    id: 3,
    title: "Seamless Pickup",
    content: "Alex walks to the counter, scans his pickup code, and grabs his fresh meal. Total time spent at the counter: 30 seconds.",
    image: "/images/notinq_step_3_HD_16_9.png",
    direction: 'left'
  }
];
