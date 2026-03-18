const https = require('https');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error('[v0] Error: Missing credentials');
  process.exit(1);
}

const firstNames = ['Александр', 'Борис', 'Владимир', 'Геннадий', 'Дмитрий', 'Евгений', 'Жан', 'Иван', 'Konstantine', 'Laurent', 'Michel', 'Nicolas', 'Olivier', 'Patricia', 'Richard', 'Sophie', 'Thomas', 'Valerie', 'Walter', 'Yvette', 'Zara', 'Alice', 'Bob', 'Catherine', 'David', 'Elena', 'Frank', 'George', 'Helen', 'Isaac'];

const lastNames = ['Абрамов', 'Бульгаков', 'Виноградов', 'Гаврилов', 'Данилов', 'Ermakov', 'Fedorov', 'Gorchakov', 'Lefevre', 'Martin', 'Patel', 'Rodriguez', 'Schmidt', 'Thompson', 'Upadhyay', 'Valentin', 'Wagner', 'Xavier', 'Yanenko', 'Zhukova'];

const roles = ['CEO & Founder', 'CTO', 'Head of Strategy', 'Director', 'VP Sales', 'Architect', 'Advisor', 'Partner', 'Manager', 'Lead'];

const categories = ['Technology', 'Finance', 'Government', 'Sustainability'];

const bioTexts = ['Опытный профессионал', 'Эксперт в инновациях', 'Специалист по устойчивости', 'Лидер финансового сектора', 'Инженер с опытом'];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

console.log('[v0] Starting to seed 31 speakers...\n');

for (let i = 0; i < 31; i++) {
  const speaker = {
    _type: 'speaker',
    _id: `speaker_${Date.now()}_${i}`,
    name: `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`,
    position: getRandomItem(roles),
    category: getRandomItem(categories),
    bio: getRandomItem(bioTexts),
    order: i,
  };

  const data = JSON.stringify({
    mutations: [{ create: speaker }],
  });

  const options = {
    hostname: `${projectId}.api.sanity.io`,
    path: `/v2024-01-01/data/mutate/${dataset}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
    },
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        console.log(`[v0] ✓ ${i + 1}/31: ${speaker.name}`);
      } else {
        console.log(`[v0] ✗ ${i + 1}/31: ${speaker.name} (${res.statusCode})`);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`[v0] Error: ${e.message}`);
  });

  req.write(data);
  req.end();
}

setTimeout(() => {
  console.log('\n[v0] ✅ All requests sent!');
  process.exit(0);
}, 2000);
