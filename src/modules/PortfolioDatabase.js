import { ref } from 'vue'

//feedback data
const userFeedback = ref([
  {
    id: 1,
    text: 'She is a good daughter, she calls to catch-up every week.',
    name: 'Dad',
  },
  {
    id: 2,
    text: 'If she is stuck, just let her go for a run.',
    name: 'A colleague',
  },
])

const addFeedback = (text, name) => {
  userFeedback.value.push({
    id: userFeedback.value.length + 1,
    text: text.trim(),
    name: name.trim(),
  })
}

const deleteFeedback = (id) => {
  userFeedback.value = userFeedback.value.filter((f) => f.id !== id)
}

const getAllFeedback = () => userFeedback

//design cards data

import graphics from '@/assets/svg/Graphics.svg'
import web from '@/assets/svg/Web.svg'
import poster from '@/assets/svg/Posters.svg'

const designs = ref([
  {
    id: 'GraphicPage',
    icon: graphics,
    name: 'Graphics',
    description: 'Logo, info graphics, icons and illustrations',
  },
  {
    id: 'WebsitePage',
    icon: web,
    name: 'Web design',
    description: 'From Figma wireframes to coding',
  },
  {
    id: 'PhotoshopPage',
    icon: poster,
    name: 'Posters',
    description: 'Photoshop and InDesign creatives',
  },
])

//Graphics
const graphicsProjects = ref([
  {
    id: 1,
    image: '/images/graphics/MyLogo_V2.svg',
    title: 'Monogram Logo — "Back to the Tape"',
    description:
      'A minimal monogram shaped like a cassette tape — a quiet nod to a pre-digital era. Designed during my Multimedia studies at EASV, this logo reflects my love for music and analog roots. A subtle detail that speaks to those who remember.',
    link: '',
  },
  {
    id: 2,
    image: '/images/graphics/Esbjerg.svg',
    title: 'Esbjerg Icons',
    description:
      "Esbjerg Icons — A set of custom-designed icons capturing the spirit of Esbjerg's Gammelby. Developed as part of a class project at EASV, our goal was to present the city in a way that would draw both visitors and future residents. Each icon serves as a visual tribute to the distinct charm of Gammelby.",
    link: '', // Optional
  },
  {
    id: 3,
    image: '/images/graphics/LogoFarm.svg',
    title: 'Farm Logo',
    description:
      'A simple yet meaningful logo for a family-run farm specializing in fruit, with a focus on apples. Designed as part of a class task to refine our skills in Illustrator. With its clean lines and organic shapes, it reflects both the tradition of family farming and the freshness of homegrown produce.',
    link: '',
  },
  {
    id: 4,
    image: '/images/graphics/Recipe.svg',
    title: 'Recipe Website Logo',
    description:
      'A playful logo shaped like a steaming pan, paired with the phrase every mom knows: “What’s for Dinner.” This was my first branding attempt — a nod to the heart of the home and the everyday rhythm of cooking. The design is simple and familiar, evoking warmth, routine, and the quiet joy of feeding the people you love.',
    link: '', // Optional
  },
  {
    id: 5,
    image: '/images/graphics/Nails.svg',
    title: 'Nail Salon Logo',
    description:
      'A sleek, feminine logo designed for a fictional nail salon, based on a client brief and a preset color palette. This class project challenged us to follow customer specifications while exploring style, typography, and brand identity',
    link: '', // Optional
  },
  {
    id: 6,
    image: ['/images/graphics/Ideas_2.svg', '/images/graphics/Ideas.svg'],
    title: 'Skin Care Concepts',
    description:
      'A series of logo ideas for a luxury skincare brand, developed during my first team project. We were tasked with creating a full brand identity, from logo and website to posters, colors, and type. My designs weren’t selected for the final brand, but it was a great opportunity to explore elegant aesthetics and improve my Illustrator workflow.',
    link: '',
  },
  {
    id: 7,
    image: '/images/graphics/Mini-me.svg',
    title: 'Mini Me',
    description:
      'An illustrated comic-style self-portrait, created during my first experiments in Illustrator. Balancing a dumbbell in one hand and a glass of wine in the other, this piece captures a lighthearted version of myself — somewhere between fitness goals and guilty pleasures.',
    link: '',
  },
])

//Web design projects
const webProjects = ref([
  {
    id: 1,
    image: '/images/websites/RecipeWeb.png',
    title: 'Recipe Website',
    description:
      'Bright, cheerful, and built with families in mind — this was my very first website, crafted with HTML and CSS. While the main goal was to learn the code, I also explored how design could feel warm and approachable. The layout is simple, with a focus on easy navigation and a friendly vibe. It’s a blend of learning and creativity, reflecting my early steps into web design.',
    link: 'https://halyna-kuzminchuk.github.io/My-recipe/index.html',
  },
  {
    id: 2,
    image: '/images/websites/Plastic.png',
    title: 'Global Plastic Treaty',
    description:
      'As part of a team project simulating work for an environmental organization, I designed the landing page for a campaign to support the Global Plastic Treaty. Built with pure HTML and CSS, the site aimed to inform, engage, and encourage visitors to sign a petition. I focused on clarity, trust, and action — giving the front page a clean structure with strong visual hierarchy and accessible design.',
    link: 'https://halyna-kuzminchuk.github.io/Global_Plastic_Treaty/index.html',
  },
  {
    id: 3,
    image: '/images/websites/SwimRun.png',
    title: 'SwimRun IF',
    description:
      'SwimRunIf is a real sport event that I help organize in Ukraine. While I didn’t originally build the website, I was deeply involved in the brand —  planning and managing the event,coordinating our presence on Facebook and Instagram . The website is next in line for a redesign by me, and I hope when you visit, it feels fresh and full of energy. If you’re interested in supporting sports in Ukraine — where physical activity plays a big role in mental well-being — feel free to get in touch.',
    link: 'https://swimrun.if.ua/',
  },
])

//Photoshop projects
const photoProjects = ref([
  {
    id: 1,
    image: '/images/posters/Welcome_Poster.jpg',
    title: 'Welcome Poster',
    description:
      'This poster was part of a class assignment where we created a promotional brochure for a neighborhood in Esbjerg. Our goal was to highlight what makes the area special — inviting both visitors and potential residents. I took the original photo myself and edited it in Photoshop to evoke a feeling of peace and tranquility. Along with the visuals, we also designed custom icons to bring consistency and charm to the magazine-style layout.',
    link: '',
  },
  {
    id: 2,
    image: '/images/posters/Water-and-boat.jpg',
    title: 'Instagram Poster — Luxury Skincare Brand',
    description:
      'Created as part of my first team project, this Instagram poster was designed for a high-end skincare brand. We developed a full visual identity — from logo and website to posters and typography. I sourced a free-use image and edited it in Photoshop, layering delicate flowers underwater to create the illusion of a boat floating in a sea of roses. The result is soft, luxurious, and immersive — a visual metaphor for indulgent, calming skincare.',
    link: '',
  },
  {
    id: 3,
    image: '/images/posters/Masion-de-Rose-Poster.jpg',
    title: 'Website Hero Banner — Luxury Skincare Brand',
    description:
      'Part of a collaborative branding project, this hero banner was designed for the homepage of an imagined luxury skincare line. Using carefully selected royalty-free images, I crafted a serene and polished composition that sets the tone for the entire brand.',
    link: '',
  },
  {
    id: 4,
    image: '/images/posters/Shark-Attack-Poster.jpg',
    title: 'Halloween Poster — Shark Attack',
    description:
      'A Halloween-themed poster was part of a class exercise focused on developing typography skills in Adobe Illustrator. The goal was to creatively manipulate fonts to capture mood and atmosphere using only type, layout, and minimal graphic elements.',
    link: '',
  },
  {
    id: 5,
    image: '/images/posters/Vampire-Shot-Poster.jpg',
    title: 'Halloween Poster — Vampire Shot',
    description:
      'A Halloween poster was designed to promote themed drinks at a student party. The goal was to experiment with expressive typography in Adobe Illustrator — to tell the story with type. Vampire Shot plays with fonts, color, and layout to reflect the energy of the name and make the drink stand out. It was all about pushing type beyond readability and into visual impact.',
    link: '',
  },
])

export default {
  addFeedback,
  deleteFeedback,
  getAllFeedback,
  designs,
  graphicsProjects,
  webProjects,
  photoProjects,
}
