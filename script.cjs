const fs = require('fs');
let code = fs.readFileSync('src/object.js', 'utf8');

const regex = /export const recommended_trucks = (\[[\s\S]*?\]);\s*export/m;
const match = code.match(regex);
if (match) {
  const arrText = match[1];
  let newArrText = arrText;
  
  const mappings = [
    { regex: /кран-манипулятор/i, slug: 'krany-manipulyatory' },
    { regex: /топливозаправщик/i, slug: 'avtotoplivozapravshchiki' },
    { regex: /автогидроподъемник/i, slug: 'avtogidropodyemniki' },
    { regex: /самосвал/i, slug: 'samosvaly' },
    { regex: /допог/i, slug: 'avtomobili-dopog-exii' },
    { regex: /шторный/i, slug: 'shtornye-avtomobili' },
  ];
  
  // match the title block and use it to insert category right above id
  newArrText = newArrText.replace(/({\s*)(id:\s*\d+,[\s\S]*?ru:\s*"([^"]+)")/g, (wholeMatch, brace, rest, ruTitle) => {
    let slug = 'krany-manipulyatory';
    for (let m of mappings) {
      if (m.regex.test(ruTitle)) {
        slug = m.slug;
        break;
      }
    }
    
    if (!rest.includes('category:')) {
      return brace + `category: "${slug}",\n      ` + rest;
    }
    return wholeMatch;
  });

  code = code.replace(arrText, newArrText);
  fs.writeFileSync('src/object.js', code);
  console.log('Successfully injected categories.');
} else {
  console.log('Array not found.');
}
