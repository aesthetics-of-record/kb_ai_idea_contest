import client1 from "../../public/client1.png";
import client2 from "../../public/client2.png";
import client3 from "../../public/client3.png";
import client4 from "../../public/client4.png";
import client5 from "../../public/client5.png";

export const CLIENTS = [
  { alt: "client1", logo: client1 },
  { alt: "client2", logo: client2 },
  { alt: "client3", logo: client3 },
  { alt: "client4", logo: client4 },
  { alt: "client5", logo: client5 },
];

export const USERS = [
  {
    name: "박석진",
    message: "PM을 맡았습니다.",
    image: "박석진.jpg",
  },
  {
    name: "이조희",
    message: "이조희입니다.",
    image: "이조희.png",
  },
  {
    name: "박시훈",
    message: "I❤경북",
    image: "박시훈.jpg",
  },
  {
    name: "박석진",
    message: "PM을 맡았습니다.",
    image: "박석진.jpg",
  },
  {
    name: "이조희",
    message: "이조희입니다.",
    image: "이조희.png",
  },
  {
    name: "박시훈",
    message: "I❤경북",
    image: "박시훈.jpg",
  },
];

export const PRICING_CARDS = [
  {
    planType: "Free Plan",
    price: "0",
    description: "Limited block trials  for teams",
    highlightFeature: "",
    freatures: [
      "Unlimited blocks for teams",
      "Unlimited file uploads",
      "30 day page history",
      "Invite 2 guests",
    ],
  },
  {
    planType: "Pro Plan",
    price: "12.99",
    description: "Billed annually. $17 billed monthly",
    highlightFeature: "Everything in free +",
    freatures: [
      "Unlimited blocks for teams",
      "Unlimited file uploads",
      "1 year day page history",
      "Invite 10 guests",
    ],
  },
];

export const PRICING_PLANS = { proplan: "Pro Plan", freeplan: "Free Plan" };

export const MAX_FOLDERS_FREE_PLAN = 3;
