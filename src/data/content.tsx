import type { FlowbiteDatepickerTheme } from 'flowbite-react';
import _ from 'lodash';
import { BiShoppingBag, BiSupport } from 'react-icons/bi';
import {
  BsBalloonHeart,
  BsFacebook,
  BsHandThumbsUp,
  BsHouseDoor,
  BsInstagram,
  BsLinkedin,
  BsShieldCheck,
  BsStars,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { FaAward, FaStarOfLife } from 'react-icons/fa';
import {
  MdEmail,
  MdLocationPin,
  MdOutlineAirplaneTicket,
  MdOutlineCall,
  MdOutlinePets,
  MdOutlinePool,
} from 'react-icons/md';

import type { NavItemType } from '@/components/NavItem';
import not_found_dark_shot from '@/images/404_dark_shot.jpg';
import not_found_white_shot from '@/images/404_white_shot.png';
import about_dark_shot from '@/images/about_dark_shot.png';
import about_white_shot from '@/images/about_white_shot.jpg';
import blog_dark_shot from '@/images/blog_dark_shot.png';
import blog_white_shot from '@/images/blog_white_shot.png';
import blogs_dark_shot from '@/images/blogs_dark_shot.png';
import blogs_white_shot from '@/images/blogs_white_shot.png';
import booking from '@/images/booking.png';
import buyCover from '@/images/buyTemplate.png';
import contact_dark_shot from '@/images/contact_dark_shot.png';
import contact_white_shot from '@/images/contact_white_shot.png';
import destination_dark_shot from '@/images/destination_dark_shot.png';
import destination_white_shot from '@/images/destination_white_shot.png';
import destinations_dark_shot from '@/images/destinations_dark_shot.png';
import destinations_white_shot from '@/images/destinations_white_shot.png';
import expedia from '@/images/expedia.png';
import gallery_dark_shot from '@/images/gallery_dark_shot.png';
import gallery_white_shot from '@/images/gallery_white_shot.png';
import home_dark_shot from '@/images/home_dark_shot.png';
import home_white_shot from '@/images/home_white_shot.png';
import opendoor from '@/images/opendoor.png';
import paypal from '@/images/paypal.png';
import staff1 from '@/images/staff1.avif';
import staff2 from '@/images/staff2.avif';
import staff3 from '@/images/staff3.avif';
import staff4 from '@/images/staff4.avif';
import templateCover from '@/images/templateCover.png';
import truimph from '@/images/truimph.png';

import type { BlogType } from './types';

const ncNanoId = _.uniqueId;

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/home',
    name: 'Home',
  },
  {
    id: ncNanoId(),
    href: '/about',
    name: 'About',
  },
  {
    id: ncNanoId(),
    href: '/gg',
    name: '404 not found',
  },
  {
    id: ncNanoId(),
    href: '/destination',
    name: 'Destination Pages',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/destination',
        name: 'Destination',
      },
      {
        id: ncNanoId(),
        href: '/destination/london',
        name: 'Destination Single',
      },
    ],
  },
  {
    id: ncNanoId(),
    href: '/about',
    name: 'Utility Pages',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/about',
        name: 'About',
      },
      {
        id: ncNanoId(),
        href: '/contact',
        name: 'Contact Us',
      },
      {
        id: ncNanoId(),
        name: 'Changelog',
        href: '/changelog',
      },
    ],
  },
  {
    id: ncNanoId(),
    href: '/blog',
    name: 'Blog Pages',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/blog',
        name: 'Blog Page',
      },
      {
        id: ncNanoId(),
        href: '/blog-single',
        name: 'Blog Single',
      },
    ],
  },
];

export const NavLinks: NavItemType[] = [
  {
    id: ncNanoId(),
    name: 'Home',
    href: '/home',
  },
  {
    id: ncNanoId(),
    name: 'About',
    href: '/about',
  },
  {
    id: ncNanoId(),
    name: 'Pages',
    href: '/destinations',
    type: 'dropdown',
    children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    name: 'Contact',
    href: '/contact',
  },
  // {
  //   id: ncNanoId(),
  //   name: 'Blog',
  //   href: '/blog',
  // },
  // {
  //   id: ncNanoId(),
  //   name: 'Changelog',
  //   href: '/changelog',
  // },
];

export const headingSection = {
  heading: 'Discover the best destinations in the world',
  description:
    "Let's take a vacation to get rid of the boredom and make your day more colorful Bright air awaits you for a vacation with your friends, lover or family.",
};

export const logos = [expedia, opendoor, truimph, paypal, booking];

const demoDestinationData = {
  gallery: [
    'https://images.unsplash.com/photo-1682686580433-2af05ee670ad?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1696519668803-7f5680268602?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1507383576552-b21089de068a?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1512073490563-2fde3bf833ad?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1500089976877-76907cd384d4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1577979538981-30c477b844e0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?auto=format&fit=crop&q=80&w=1634&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1441&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  description:
    'Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.',
  offers: [
    {
      icon: <MdOutlinePool className="text-xl" />,
      description: 'Pool',
    },
    {
      icon: <MdOutlinePets className="text-xl" />,
      description: 'Pets Allowed',
    },
    {
      icon: <BsStars className="text-xl" />,
      description: 'Five star food',
    },
    {
      icon: <FaStarOfLife className="text-xl" />,
      description: 'Pilates',
    },
    {
      icon: <BiShoppingBag className="text-xl" />,
      description: 'Shopping',
    },
    {
      icon: <BsStars className="text-xl" />,
      description: 'Spa and Sauna',
    },
    {
      icon: <MdOutlineAirplaneTicket className="text-xl" />,
      description: 'Cashback',
    },
    {
      icon: <BsHouseDoor className="text-xl" />,
      description: 'Accomodation',
    },
  ],
};

export const destinationSection = {
  heading: 'Our Popular Destinations',
  destinations: [
    {
      coverImage:
        'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&q=80&w=1526&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'Brazil',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.9,
      slug: 'brazil',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1420&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'London',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.8,
      slug: 'london',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D',
      country: 'Greece',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.7,
      slug: 'greece',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1583406017924-96351d584bb0?auto.format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'Tokyo',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.9,
      slug: 'tokyo',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1526958977630-bc61b30a2009?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'Australia',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.8,
      slug: 'australia',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto.format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'Dubai',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.7,
      slug: 'dubai',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1536708880921-03a9306ec47d?auto=format&fit=crop&q=80&w=1375&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pWFNEA&ixid=MXwyMDMxMjh8fHx8',
      country: 'Costa Rica',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.9,
      slug: 'costa-rica',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1604614765191-02ea6bdb941b?auto.format&fit=crop&q=80&w=1476&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'South Africa',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.8,
      slug: 'south-africa',
    },
    {
      coverImage:
        'https://images.unsplash.com/photo-1517309230475-6736d926b979?auto.format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      country: 'China',
      description: 'We provide some very affordable prices compared to others',
      price: 459.5,
      details: demoDestinationData,
      rating: 4.7,
      slug: 'china',
    },
  ],
};

export const travelSection = {
  heading: 'Travel any corner of the world Wide',
  description: `Let's take a vacation to get rid of the boredom and make your day more colorful Bright air awaits you for a vacation with your friends, lover or family.`,
};

export const experienceSection = {
  heading: 'Get experience which is fun',
  description: `Let's take a vacation to get rid of the boredom and make your day more colorful Bright air awaits you for a vacation with your friends, lover or family.`,
};

export const weekendSection = {
  heading: 'Take the best weekend and enjoy your place',
  description: `Let's take a vacation to get rid of the boredom and make your day more colorful Bright air awaits you for a vacation with your friends, lover or family.`,
};

export const reviewSection = {
  heading: 'What our clients say',
  title: 'Testimonials',
  reviews: [
    {
      name: 'John Doe',
      occupation: 'Web Developer',
      review:
        'John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.',
    },
    {
      name: 'Alice Smith',
      occupation: 'Graphic Designer',
      review:
        'John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.',
    },
    {
      name: 'Mark Johnson',
      occupation: 'Marketing Specialist',
      review:
        'John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.',
    },
    {
      name: 'Sarah Adams',
      occupation: 'Accountant',
      review:
        'John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.',
    },
    {
      name: 'Michael Brown',
      occupation: 'Sales Manager',
      review:
        'John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.',
    },
    {
      name: 'Emily Wilson',
      occupation: 'Customer Support',
      review:
        'John is an exceptional web developer. He delivers high-quality code on time and always goes the extra mile to ensure a successful project.',
    },
  ],
};

export const footerBannerData = {
  heading: "Prepare yourself and let's explore The Beauty of the world",
  descriptionTwo: 'We have many special offers especially for you',
};

export const footerData = {
  description: 'Footer',
  footerLinks: [
    {
      title: 'Main Pages',
      links: [
        { href: '/home', name: 'Home' },
        { href: '/about', name: 'About' },
        { href: '/blog', name: 'Blog' },
        { href: '/destination', name: 'Destination' },
      ],
    },
    {
      title: 'Utility Pages',
      links: [
        { href: '/contact', name: 'Contact' },
        { href: '/changelog', name: 'Changelog' },
        { href: '/gg', name: '404 not found' },
      ],
    },
    {
      title: 'Single Pages',
      links: [
        { href: '/destination/london', name: 'Destination Single' },
        {
          href: '/blog/exploring-europe-a-guide-to-the-best-cities-for-culture-lovers',
          name: 'Blog Single',
        },
        { href: '/destination/london/gallery/london', name: 'Image Gallery' },
      ],
    },
  ],
};

export const socials = [
  {
    icon: <BsTwitter key="twitter" className="text-lg" />,
    href: 'https://x.com/devspherelabs',
  },
  {
    icon: <BsLinkedin key="linkedIn" className="text-lg" />,
    href: 'https://www.linkedin.com/company/devspherelabs/',
  },
  {
    icon: <BiSupport key="facebook" className="text-lg" />,
    href: 'https://www.themealchemy.com/contact',
  },
];

export const contactSubData = {
  heading: 'Get In Touch!',
  description:
    "Need  Any Help? Send us a message using the form below and we'll get back to you promptly!",
  contacts: [
    {
      svg: <MdLocationPin className="text-3xl text-primary" />,
      title: 'Address',
      description: '5678  Seltice Way Coeur D Alene, ID 12345. US.',
      href: '/contact',
    },
    {
      svg: <MdEmail className="text-3xl text-primary" />,
      title: 'Send us an email',
      description: 'help@devspherelabs.com',
      href: 'mailto:help@devspherelabs.com',
    },
    {
      svg: <MdOutlineCall className="text-3xl text-primary" />,
      title: 'Phone',
      description: '+(123) 456-7890',
      href: 'tel:+(123) 456-7890',
    },
  ],
};

export const faqsData = {
  heading: 'Frequently Asked Questions',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget adipiscing nibh nunc. Velit rhoncus arcu velesaed.',
  faqs: [
    {
      category: 'General',
      value: 0,
      data: [
        {
          question: 'How do I book a vacation through your travel agency?',
          answer:
            'Booking a vacation with us is easy! You can visit our website and use our user-friendly online booking system, or you can contact our experienced travel agents via phone or email, and they will assist you in planning and booking your dream vacation.',
        },
        {
          question: 'What destinations do you offer for travel packages?',
          answer:
            "We offer a wide range of destinations to suit all types of travelers. From exotic beach getaways to cultural city tours and adventure expeditions, our travel agency provides packages to destinations worldwide. Check out our 'Destinations' page on our website for a list of some popular options.",
        },
        {
          question:
            'Can you help me with visa and passport requirements for international travel?',
          answer:
            "Absolutely! Our travel experts are well-versed in visa and passport requirements for different countries. When you book a trip with us, we'll provide you with all the necessary information and guidance on obtaining the required travel documents. We can also assist with visa applications when needed.",
        },
        {
          question:
            'What is your cancellation and refund policy in case of unexpected changes to my travel plans?',
          answer:
            "We understand that sometimes plans change. Our cancellation and refund policies vary depending on the type of booking and the supplier's terms. We recommend reviewing our 'Policies' page on our website for specific details or contacting our customer service for personalized assistance.",
        },
        {
          question: 'Do you offer travel insurance, and is it recommended?',
          answer:
            "Yes, we offer travel insurance, and it's highly recommended for your peace of mind. Travel insurance can protect you from unforeseen circumstances, such as trip cancellations, medical emergencies, lost luggage, and more. We can help you choose the right insurance plan to fit your needs when booking your trip.",
        },
      ],
    },
    {
      category: 'Booking',
      value: 1,
      data: [
        {
          question: 'How do I book a vacation through your travel agency?',
          answer:
            'Booking a vacation with us is easy! You can visit our website and use our user-friendly online booking system, or you can contact our experienced travel agents via phone or email, and they will assist you in planning and booking your dream vacation.',
        },
        {
          question:
            'Can you help me with visa and passport requirements for international travel?',
          answer:
            "Absolutely! Our travel experts are well-versed in visa and passport requirements for different countries. When you book a trip with us, we'll provide you with all the necessary information and guidance on obtaining the required travel documents. We can also assist with visa applications when needed.",
        },
        {
          question:
            'What is your cancellation and refund policy in case of unexpected changes to my travel plans?',
          answer:
            "We understand that sometimes plans change. Our cancellation and refund policies vary depending on the type of booking and the supplier's terms. We recommend reviewing our 'Policies' page on our website for specific details or contacting our customer service for personalized assistance.",
        },
        {
          question: 'Do you offer travel insurance, and is it recommended?',
          answer:
            "Yes, we offer travel insurance, and it's highly recommended for your peace of mind. Travel insurance can protect you from unforeseen circumstances, such as trip cancellations, medical emergencies, lost luggage, and more. We can help you choose the right insurance plan to fit your needs when booking your trip.",
        },
      ],
    },
    {
      category: 'Travel',
      value: 2,
      data: [
        {
          question: 'How do I book a vacation through your travel agency?',
          answer:
            'Booking a vacation with us is easy! You can visit our website and use our user-friendly online booking system, or you can contact our experienced travel agents via phone or email, and they will assist you in planning and booking your dream vacation.',
        },
        {
          question: 'What destinations do you offer for travel packages?',
          answer:
            "We offer a wide range of destinations to suit all types of travelers. From exotic beach getaways to cultural city tours and adventure expeditions, our travel agency provides packages to destinations worldwide. Check out our 'Destinations' page on our website for a list of some popular options.",
        },
        {
          question:
            'Can you help me with visa and passport requirements for international travel?',
          answer:
            "Absolutely! Our travel experts are well-versed in visa and passport requirements for different countries. When you book a trip with us, we'll provide you with all the necessary information and guidance on obtaining the required travel documents. We can also assist with visa applications when needed.",
        },
        {
          question:
            'What is your cancellation and refund policy in case of unexpected changes to my travel plans?',
          answer:
            "We understand that sometimes plans change. Our cancellation and refund policies vary depending on the type of booking and the supplier's terms. We recommend reviewing our 'Policies' page on our website for specific details or contacting our customer service for personalized assistance.",
        },
        {
          question: 'Do you offer travel insurance, and is it recommended?',
          answer:
            "Yes, we offer travel insurance, and it's highly recommended for your peace of mind. Travel insurance can protect you from unforeseen circumstances, such as trip cancellations, medical emergencies, lost luggage, and more. We can help you choose the right insurance plan to fit your needs when booking your trip.",
        },
      ],
    },
  ],
};

export const socialMediaSection = {
  heading: 'Contact us through our Social Media',
  socials: [
    {
      icon: <BsFacebook className="text-3xl" />,
      title: 'FaceBook',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <BsInstagram className="text-3xl" />,
      title: 'Instagram',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <BsYoutube className="text-3xl" />,
      title: 'YouTube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <BsTwitter className="text-3xl" />,
      title: 'Twitter',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
};

export const aboutHero = {
  heading: 'We are , a travel agency you can trust',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer senectus malesuada ac.',
};

export const aboutStory = {
  heading: 'We started with only one goal: Make our clients smile',
  title: 'Our Story',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc parturient massa arcu, blandit. Morbi vulputate nulla in in. Viverra vel bibendum felis sed eu. Gravida felis scelerisque massa vestibulum tellus ac justo. Sollicitudin amet suscipit elit viverra lectus.',
};

export const aboutValues = {
  heading: 'The core values that drive everything what we do',
  title: 'Values',
  values: [
    {
      icon: <BsShieldCheck className="text-5xl" />,
      title: 'Trust',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.',
    },
    {
      icon: <FaAward className="text-5xl" />,
      title: 'Responsability',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.',
    },
    {
      icon: <BsBalloonHeart className="text-5xl" />,
      title: 'Care & Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.',
    },
    {
      icon: <BsHandThumbsUp className="text-5xl" />,
      title: 'Commitment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.',
    },
  ],
};

export const aboutStaff = {
  heading: 'Meet the owners',
  title: 'OWNERS',
  staff: [
    {
      profile: staff1,
      name: 'John Doe',
      position: 'CEO',
    },
    {
      profile: staff2,
      name: 'Scott Smith',
      position: 'CEO',
    },
    {
      profile: staff3,
      name: 'Mark Benson',
      position: 'CEO',
    },
    {
      profile: staff4,
      name: 'Allan McDonald',
      position: 'CEO',
    },
  ],
};

const demoBlogData = {
  sectionOne: {
    title: 'What makes these beach destinations stand out from the rest?',
    paragraph1:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    points: [
      'Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit',
      'Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur',
      'Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac',
      'Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis',
    ],
    paragraph2:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  sectionTwo: {
    title:
      'What activities and attractions can visitors enjoy at each of these beaches?',
    description:
      'Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.',
    midImage:
      'https://images.unsplash.com/photo-1692312344458-9a4d495f7163?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  sectionThree: {
    title:
      'Are there any must-visit museums, galleries, or historical sites in each city?',
    description:
      'Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.',
  },
  sectionFour: {
    title:
      'What local traditions and events should culture lovers participate in?',
    description:
      'Bibendum at varius vel pharetra vel turpis nunc. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Volutpat est velit egestas dui id ornare.',
    points: [
      'Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit',
      'Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur',
      'Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac',
      'Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis',
    ],
  },
  quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor porta rhoncus, viverra sit et auctor. Augue in volutpat sed eget in etiam.”',
  sectionFive: [
    {
      title:
        'Which European cities are budget-friendly for culture enthusiasts?',
      description:
        'Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.',
    },
    {
      title:
        'What are the signature dishes and food experiences in each destination?',
      description:
        'Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.',
    },
  ],
};

export const blogs: BlogType[] = [
  {
    title: '10 Must-Visit Beach Destinations for Your Next Vacation',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1421&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Travel',
    slug: '10-must-visit-beach-destinations-for-your-next-vacation',
  },
  {
    title: 'Exploring Europe: A Guide to the Best Cities for Culture Lovers',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Culture',
    slug: 'exploring-europe-a-guide-to-the-best-cities-for-culture-lovers',
  },
  {
    title: "Adventurous Escapes: Hiking Trails You Shouldn't Miss",
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Travel',
    slug: 'adventurous-escapes-hiking-trails-you-shouldnt-miss',
  },
  {
    title: 'The Ultimate Guide to Planning a Romantic Getaway',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'General',
    slug: 'the-ultimate-guide-to-planning-a-romantic-getaway',
  },
  {
    title: 'Traveling on a Budget: Tips and Tricks for Affordable Adventures',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1570469104943-b3f9aa53f049?auto.format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8fHw',
    blogData: demoBlogData,
    tag: 'Travel',
    slug: 'traveling-on-a-budget-tips-and-tricks-for-affordable-adventures',
  },
  {
    title: 'Culinary Journeys: Discovering Delicious Food around the World',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1524592714635-d77511a4834d?auto.format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Culture',
    slug: 'culinary-journeys-discovering-delicious-food-around-the-world',
  },
  {
    title: 'Family-Friendly Destinations: Where to Take Your Kids on Vacation',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1503365113766-4a362681eac5?auto.format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'General',
    slug: 'family-friendly-destinations-where-to-take-your-kids-on-vacation',
  },
  {
    title: 'Off the Beaten Path: Hidden Gems for the Avid Traveler',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1503365194569-df4e1d04cec1?auto.format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    blogData: demoBlogData,
    tag: 'General',
    slug: 'off-the-beaten-path-hidden-gems-for-the-avid-traveler',
  },
  {
    title: "Solo Traveler's Survival Guide: Tips for Exploring Alone",
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1495320520040-44186a20c601?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw',
    blogData: demoBlogData,
    tag: 'Travel',
    slug: 'solo-travelers-survival-guide-tips-for-exploring-alone',
  },
  {
    title: "Sailing into Serenity: Cruising the World's Most Beautiful Waters",
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Travel',
    slug: 'sailing-into-serenity-cruising-the-worlds-most-beautiful-waters',
  },
];

export const destinationHeader = {
  heading: 'Find your favourite place here!',
  description:
    'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit',
  section2Heading: 'Our destinations for you',
};

export const changelog = {
  version: '1.0',
  releaseDate: 'Nov 5, 2023',
  title: 'Template release',
  description: 'Initial Release',
};

export const templateDetails = {
  name: ' NextJS Travel Agency Template',
  description:
    'Presenting , the ultimate Travel Agency NextJS Template and UI Kit.',
  darkScreenshots: [
    home_dark_shot,
    destinations_dark_shot,
    blog_dark_shot,
    about_dark_shot,
    gallery_dark_shot,
  ],
  whiteScreenshots: [
    home_white_shot,
    destinations_white_shot,
    blog_white_shot,
    about_white_shot,
    gallery_white_shot,
  ],
  screenshots: [home_white_shot],
};

export const templateIncludes = {
  heading: `What is included in ${templateDetails.name}`,
  description: ` Nextjs Template includes 10+ pages, with more than 20 sections, and both dark and light mode.`,
  sections: 85,
  pages: 10,
  homepages: 1,
  blogPages: 1,
  featuresPages: 3,
};

export const includesCardsData = [
  {
    darkCoverImage: home_dark_shot,
    whiteCoverImage: home_white_shot,
    title: '10+ pages',
  },
  {
    darkCoverImage: destinations_dark_shot,
    whiteCoverImage: destinations_white_shot,
    title: '20+ sections',
  },
  {
    darkCoverImage: about_dark_shot,
    whiteCoverImage: about_white_shot,
    title: `Dark & Light Mode`,
  },
];

export const midSection = {
  heading: 'Looking for more amazing Templates?',
  description:
    'Take a look at our collection of 100+ premium Templates at ThemeAlchemy.',
  href: 'https://themealchemy.com',
};

export const mainPages = {
  heading: 'Main pages',
  description: `Take a look at the main pages included in the ${templateDetails.name}`,
  pages: [
    {
      darkCoverImage: home_dark_shot,
      whiteCoverImage: home_white_shot,
      pageName: 'Home',
      href: '/home',
      CMS: false,
    },
    {
      darkCoverImage: about_dark_shot,
      whiteCoverImage: about_white_shot,
      pageName: 'About',
      href: '/about',
      CMS: false,
    },
    {
      darkCoverImage: blogs_dark_shot,
      whiteCoverImage: blogs_white_shot,
      pageName: 'Blog',
      href: '/blog',
      CMS: false,
    },
    {
      darkCoverImage: blog_dark_shot,
      whiteCoverImage: blog_white_shot,
      pageName: 'Single Blog',
      href: '/blog/10-must-visit-beach-destinations-for-your-next-vacation',
      CMS: false,
    },
    {
      darkCoverImage: destinations_dark_shot,
      whiteCoverImage: destinations_white_shot,
      pageName: 'Destinations',
      href: '/destination',
      CMS: false,
    },
    {
      darkCoverImage: destination_dark_shot,
      whiteCoverImage: destination_white_shot,
      pageName: 'Single Destination',
      href: '/destination/london',
      CMS: false,
    },
    {
      darkCoverImage: not_found_dark_shot,
      whiteCoverImage: not_found_white_shot,
      pageName: '404 not-found',
      href: '/bl',
      CMS: false,
    },
  ],
};

export const utilityPages = {
  heading: 'Utility pages',
  description: `Take a look at the utility pages included in the ${templateDetails.name}`,
  pages: [
    {
      darkCoverImage: contact_dark_shot,
      whiteCoverImage: contact_white_shot,
      pageName: 'Contact',
      href: '/contact',
    },
    {
      darkCoverImage: about_dark_shot,
      whiteCoverImage: about_white_shot,
      pageName: 'About',
      href: '/about',
    },
  ],
};

export const browseTemplates = {
  heading: 'Browse All Templates',
  description:
    'Take a look at our collection of 100+ premium Templates at ThemeAlchemy.',
  href: '""',
  coverImage: templateCover,
  buttonName: 'Buy Template',
};

export const buyTemplate = {
  heading: 'Buy Template on ThemeAlchemy',
  description:
    'Take a look at our collection of 100+ premium Templates at ThemeAlchemy.',
  href: '""',
  coverImage: buyCover,
  buttonName: 'Explore more templates',
};

export const buyOrExplore = [browseTemplates, buyTemplate];

export const theme: FlowbiteDatepickerTheme = {
  root: {
    base: 'relative',
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2',
      inline: 'relative top-0 z-auto',
      inner:
        'inline-block rounded-lg bg-white dark:bg-neutral-900 p-4 shadow-lg',
    },
    header: {
      base: '',
      title:
        'px-2 py-3 text-center font-semibold text-neutral-900 dark:text-white',
      selectors: {
        base: 'flex justify-between mb-2',
        button: {
          base: 'text-sm rounded-lg text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 font-semibold py-2.5 px-5 hover:bg-neutral-100 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-200 view-switch',
          prev: '',
          next: '',
          view: '',
        },
      },
    },
    view: {
      base: 'p-1',
    },
    footer: {
      base: 'flex mt-2 space-x-2',
      button: {
        base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300',
        today:
          'bg-primary text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-primary',
        clear:
          'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600',
      },
    },
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-1',
        title:
          'dow h-6 text-center text-sm font-medium leading-6 text-neutral-500 dark:text-neutral-400',
      },
      items: {
        base: 'grid w-64 grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-600 ',
          selected: 'bg-primary text-white hover:bg-cyan-600',
          disabled: 'text-neutral-500',
        },
      },
    },
    months: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-600',
          selected: 'bg-primary text-white hover:bg-cyan-600',
          disabled: 'text-neutral-500',
        },
      },
    },
    years: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-600 text-neutral-900',
          selected: 'bg-primary text-white hover:bg-cyan-600',
          disabled: 'text-neutral-500',
        },
      },
    },
    decades: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-600 text-neutral-900',
          selected: 'bg-primary text-white hover:bg-cyan-600',
          disabled: 'text-neutral-500',
        },
      },
    },
  },
};
