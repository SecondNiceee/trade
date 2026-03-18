import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

if (!projectId || !token) {
  console.error('[v0] Error: Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const firstNames = [
  'Александр', 'Борис', 'Владимир', 'Геннадий', 'Дмитрий',
  'Евгений', 'Жан', 'Запад', 'Иван', 'Йоланда',
  'Konstantine', 'Laurent', 'Michel', 'Nicolas', 'Olivier',
  'Patricia', 'Qian', 'Richard', 'Sophie', 'Thomas',
  'Ulrike', 'Valerie', 'Walter', 'Xenophon', 'Yvette',
  'Zara', 'Alice', 'Bob', 'Catherine', 'David', 'Elena'
];

const lastNames = [
  'Абрамов', 'Бульгаков', 'Виноградов', 'Гаврилов', 'Данилов',
  'Ermakov', 'Fedorov', 'Gorchakov', 'Lefevre', 'Martin',
  'Patel', 'Rodriguez', 'Schmidt', 'Thompson', 'Upadhyay',
  'Valentin', 'Wagner', 'Xavier', 'Yanenko', 'Zhukova'
];

const roles = [
  'CEO & Founder',
  'Chief Technology Officer',
  'Head of Strategy',
  'Director of Innovation',
  'VP of Business Development',
  'Lead Architect',
  'Senior Advisor',
  'Managing Partner',
  'Product Director',
  'Research Lead',
  'Chief Investment Officer',
  'Compliance Officer',
  'Chief Data Officer',
];

const categories = ['Technology', 'Finance', 'Government', 'Sustainability'];

const bioTexts = [
  'Опытный профессионал с более чем 15-летним опытом в индустрии',
  'Эксперт в области инноваций и цифровой трансформации',
  'Специалист по устойчивому развитию и климатическим решениям',
  'Лидер финансового сектора с глубоким пониманием рынков',
  'Инженер со страстью к технологиям и их применению',
  'Консультант, помогающий компаниям расти и трансформироваться',
  'Учёный, исследующий передовые технологии будущего',
  'Бизнесмен, инвестирующий в перспективные стартапы',
  'Государственный деятель, работающий на благо общества',
  'Предприниматель, запустивший несколько успешных проектов',
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateSpeaker(index) {
  const firstName = getRandomItem(firstNames);
  const lastName = getRandomItem(lastNames);
  const name = `${firstName} ${lastName}`;
  
  return {
    _type: 'speaker',
    _id: `speaker_${Date.now()}_${index}`,
    name,
    role: getRandomItem(roles),
    category: getRandomItem(categories),
    bio: getRandomItem(bioTexts),
    order: index,
  };
}

async function seedSpeakers() {
  console.log('[v0] Starting to seed 31 speakers...');
  
  try {
    const speakers = Array.from({ length: 31 }, (_, i) => generateSpeaker(i));
    
    console.log(`[v0] Generated ${speakers.length} speakers. Creating in Sanity...`);
    
    for (let i = 0; i < speakers.length; i++) {
      const speaker = speakers[i];
      try {
        const created = await client.create(speaker);
        console.log(`[v0] Created speaker ${i + 1}/31: ${speaker.name} (${speaker.category})`);
      } catch (error) {
        console.error(`[v0] Error creating speaker ${i + 1}: ${error.message}`);
      }
    }
    
    console.log('[v0] ✅ Successfully seeded all 31 speakers!');
  } catch (error) {
    console.error('[v0] Error during seeding:', error);
    process.exit(1);
  }
}

seedSpeakers();
