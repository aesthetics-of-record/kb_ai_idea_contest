import client1 from '../../public/client1.png';
import client2 from '../../public/client2.png';
import client3 from '../../public/client3.png';
import client4 from '../../public/client4.png';
import client5 from '../../public/client5.png';

export const CLIENTS = [
  { alt: 'client1', logo: client1 },
  { alt: 'client2', logo: client2 },
  { alt: 'client3', logo: client3 },
  { alt: 'client4', logo: client4 },
  { alt: 'client5', logo: client5 },
];

export const USERS = [
  {
    name: '조현호',
    message: '팀장입니다.',
  },
  {
    name: '박석진',
    message:
      "I used to spend hours debugging frontend issues, but Cypress simplified everything. Now, I'm more productive, and my colleagues can trust our code thanks to Cypress.",
  },
  {
    name: '이조희',
    message:
      "Cypress has transformed the way we work. Our QA and development teams are on the same page, and our productivity has skyrocketed. It's a must-have tool.",
  },
  {
    name: '박시훈',
    message:
      'I was skeptical at first, but Cypress exceeded my expectations. Our project timelines have improved, and collaboration between teams is seamless.',
  },
  {
    name: '김범수',
    message:
      "Cypress made writing and running tests a breeze. Our team's productivity has never been higher, and we're delivering more reliable software.",
  },
  {
    name: '김태정',
    message:
      "Thanks to Cypress, we've eliminated testing bottlenecks. Our developers and testers collaborate effortlessly, resulting in quicker releases.",
  },
  {
    name: '조현호',
    message: '팀장입니다.',
  },
  {
    name: '박석진',
    message:
      "I used to spend hours debugging frontend issues, but Cypress simplified everything. Now, I'm more productive, and my colleagues can trust our code thanks to Cypress.",
  },
  {
    name: '이조희',
    message:
      "Cypress has transformed the way we work. Our QA and development teams are on the same page, and our productivity has skyrocketed. It's a must-have tool.",
  },
  {
    name: '박시훈',
    message:
      'I was skeptical at first, but Cypress exceeded my expectations. Our project timelines have improved, and collaboration between teams is seamless.',
  },
  {
    name: '김범수',
    message:
      "Cypress made writing and running tests a breeze. Our team's productivity has never been higher, and we're delivering more reliable software.",
  },
  {
    name: '김태정',
    message:
      "Thanks to Cypress, we've eliminated testing bottlenecks. Our developers and testers collaborate effortlessly, resulting in quicker releases.",
  },
];

export const PRICING_CARDS = [
  {
    planType: 'Free Plan',
    price: '0',
    description: 'Limited block trials  for teams',
    highlightFeature: '',
    freatures: [
      'Unlimited blocks for teams',
      'Unlimited file uploads',
      '30 day page history',
      'Invite 2 guests',
    ],
  },
  {
    planType: 'Pro Plan',
    price: '12.99',
    description: 'Billed annually. $17 billed monthly',
    highlightFeature: 'Everything in free +',
    freatures: [
      'Unlimited blocks for teams',
      'Unlimited file uploads',
      '1 year day page history',
      'Invite 10 guests',
    ],
  },
];

export const PRICING_PLANS = { proplan: 'Pro Plan', freeplan: 'Free Plan' };

export const MAX_FOLDERS_FREE_PLAN = 3;
