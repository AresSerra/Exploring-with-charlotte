// Set up the serial connection
const connection = SimpleWebSerial.setupSerialConnection({
  baudRate: 9600,
  requestAccessOnPageLoad: true,
});

const animalPages = {
  horse: {
    title: "HORSE",
    subtitle: "Equus ferus caballus",
    intro:
      "The horse is a big, strong, and friendly animal. It has four legs, a long tail, and a soft mane. Horses can run fast, eat grass, and love open fields.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "They can sleep standing up thanks to a locking mechanism in their legs.",
      "The horse neighs! Its ears move toward the sound it hears.",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "380 - 550 kg"],
      ["HEIGHT", "142 - 163 cm"],
      ["SPEED", "71 km/h (max.)"],
      ["LIFESPAN", "25-30 years"],
      ["HABITAT", "grasslands, steppes, meadows"],
      ["CONTINENT", "America"],
    ],
    mediaReverse: true,
    circle: "#e14210",
    circleLeft: "62px",
    circleBottom: "24px",
    circleSize: "300px",
    animalSrc: "img/Rectangle 2.png",
    animalWidth: "500px",
    animalLeft: "-16px",
    animalBottom: "0",
    videoType: "youtube",
    videoKind: "gradient",
    videoSrc: "https://www.youtube.com/embed/p6CFBpe8zws?rel=0",
    videoPhotoLeft: "39%",
    videoPhotoTop: "11%",
    videoPhotoWidth: "42%",
    sketch: "grass",
  },
  pig: {
    title: "PIG",
    subtitle: "Sus scrofa domesticus",
    intro:
      "The pig is a smart and friendly farm animal. It has four legs, a round body, and a curly tail. Pigs like to roll in mud to keep cool and clean. They eat fruits, vegetables, and grains.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "They are extremely intelligent animals, even more so than some dogs!",
      "They love to wallow in mud to stay cool and protect their skin from the sun.",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "320 - 360 kg"],
      ["HEIGHT", "51 - 97 cm"],
      ["SPEED", "17 km/h (max.)"],
      ["LIFESPAN", "15 - 20 years"],
      ["HABITAT", "farm, stable"],
      ["CONTINENT", "Europe & Asia"],
    ],
    mediaReverse: true,
    circle: "#e14210",
    circleLeft: "64%",
    circleBottom: "8px",
    circleSize: "320px",
    animalSrc: "img/-54 1.png",
    animalWidth: "360px",
    animalLeft: "58%",
    animalBottom: "32px",
    videoType: "youtube",
    videoKind: "black",
    videoSrc: "https://www.youtube.com/embed/1HYgnHmGOlk?rel=0",
    sketch: "farm",
  },
  giraffe: {
    title: "GIRAFFE",
    subtitle: "Giraffa camelopardalis",
    intro:
      "The giraffe is a tall animal with a very long neck and long legs. It has beautiful spots on its body. Giraffes eat leaves from tall trees and can run fast when needed.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "Its heart is enormous (about 60 cm) so it can pump blood all the way to its head.",
      "It's the tallest animal in the world! Its tongue is so long it can clean its ears with it.",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "750 - 1600 kg"],
      ["HEIGHT", "4,8 - 5,5 m"],
      ["SPEED", "60 km/h (max.)"],
      ["LIFESPAN", "15 - 25 years"],
      ["HABITAT", "savannas, grasslands, forests"],
      ["CONTINENT", "Africa"],
    ],
    mediaReverse: true,
    circle: "#6b6a0c",
    circleLeft: "72%",
    circleBottom: "40px",
    circleSize: "330px",
    animalSrc: "img/-55 1.png",
    animalWidth: "420px",
    animalLeft: "69%",
    animalBottom: "18px",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/et-9rGM7AwE?rel=0",
    sketch: "grass",
  },
  chicken: {
    title: "CHICKEN",
    subtitle: "Gallus gallus domesticus",
    intro:
      "The chicken is a small farm bird with feathers, wings, and two legs. It pecks at seeds and insects on the ground. Chickens can lay eggs and make sounds like “cluck cluck.”",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "They are direct descendants of dinosaurs, specifically the Tyrannosaurus Rex.",
      "Hens talk to their chicks before they hatch through the eggshell.",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "1,5 - 2,2 kg"],
      ["HEIGHT", "30 - 50 cm"],
      ["SPEED", "14 km/h (max.)"],
      ["LIFESPAN", "5 - 10 years"],
      ["HABITAT", "farms, corrals, rural areas"],
      ["CONTINENT", "Asia"],
    ],
    mediaReverse: true,
    circle: "#d84212",
    circleLeft: "67%",
    circleBottom: "14px",
    circleSize: "300px",
    animalSrc: "img/-56 1.png",
    animalWidth: "350px",
    animalLeft: "60%",
    animalBottom: "18px",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/K3CenN7d30Y?rel=0",
    sketch: "farm",
  },
  monkey: {
    title: "MONKEY",
    subtitle: "Primates",
    intro:
      "The monkey is a playful and clever animal. It has two arms, two legs, and often a long tail. Monkeys like to climb trees, swing on branches, and eat fruits.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "They use tools, like stones to crack nuts or branches to extract honey.",
      "They're very playful! They spend a lot of time cuddling and grooming each other to show affection.",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "5 - 20 kg"],
      ["HEIGHT", "40 - 80 cm"],
      ["SPEED", "55 km/h (max.)"],
      ["LIFESPAN", "10 - 12 years"],
      [
        "HABITAT",
        "tropical rainforests, humid and dry forests, mountainous areas",
      ],
      ["CONTINENT", "Asia"],
    ],
    mediaReverse: true,
    circle: "#6c6b0a",
    circleLeft: "24%",
    circleBottom: "34px",
    circleSize: "315px",
    animalSrc: "img/The Indian Grey Langur and its little antics 1.png",
    animalWidth: "280px",
    animalLeft: "6%",
    animalBottom: "0",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/T_pmEA_k0iA?rel=0",
    sketch: "tree",
  },
  lion: {
    title: "LION",
    subtitle: "Panthera leo",
    intro:
      "The lion is a big wild cat known as the king of the jungle. It has strong legs, sharp teeth, and a loud roar. Lions live in groups called prides and like to rest in the sun.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "The roar of an adult lion can be heard up to 8 kilometers away.",
      'They are called "The King of the Jungle," even though they live mainly in the savanna. They sleep up to 20 hours a day!',
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "150 - 250 kg"],
      ["HEIGHT", "1,0 - 1,2 m"],
      ["SPEED", "80 km/h (max.)"],
      ["LIFESPAN", "10 - 14 years"],
      ["HABITAT", "savannas, grasslands, open plains"],
      ["CONTINENT", "Africa & Asia"],
    ],
    mediaReverse: true,
    circle: "#6a6900",
    circleLeft: "72%",
    circleBottom: "74px",
    circleSize: "300px",
    animalSrc: "img/-58 1.png",
    animalWidth: "460px",
    animalLeft: "64%",
    animalBottom: "0",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/uFcZhH_wFbs?rel=0",
    videoKind: "black",
    sketch: "grass",
  },
  sheep: {
    title: "SHEEP",
    subtitle: "Ovis aries",
    intro:
      "The sheep is a gentle farm animal with soft wool. It has four legs and likes to stay with other sheep. Sheep eat grass and their wool is used to make warm clothes.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "They have excellent peripheral vision (almost 360 degrees) to detect predators.",
      "Their fur is called wool and it's used to make warm sweaters. Baa!",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "45 - 100 kg"],
      ["HEIGHT", "80 - 120 cm"],
      ["SPEED", "2 - 26,6 m/s (max.)"],
      ["LIFESPAN", "10 -12 years"],
      ["HABITAT", "prairies, steppes, meadows"],
      ["CONTINENT", "Europe"],
    ],
    mediaReverse: true,
    circle: "#d84212",
    circleLeft: "6%",
    circleBottom: "36px",
    circleSize: "320px",
    animalSrc: "img/-59 1.png",
    animalWidth: "380px",
    animalLeft: "2%",
    animalBottom: "0",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/SIaFtAKnqBU?rel=0",
    videoKind: "gradient",
    sketch: "grass",
  },
  tiger: {
    title: "TIGER",
    subtitle: "Panthera tigris",
    intro:
      "The tiger is a large wild cat with orange fur and black stripes. It is strong, fast, and a very good hunter. Tigers like forests and can also swim well.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "Unlike most cats, tigers love to swim and are excellent in the water!",
      "A tiger's stripes are like our fingerprints, no two tigers have the same stripes!",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "90 - 300 kg"],
      ["HEIGHT", "80 - 120 cm"],
      ["SPEED", "49 - 65 km/h (max.)"],
      ["LIFESPAN", "10 - 15 years"],
      ["HABITAT", "jungles, evergreen forests, grasslands"],
      ["CONTINENT", "Asia"],
    ],
    mediaReverse: true,
    circle: "#6a6900",
    circleLeft: "76%",
    circleBottom: "70px",
    circleSize: "300px",
    animalSrc: "img/22 Animales que parecen ser extremadamente felices 1.png",
    animalWidth: "470px",
    animalLeft: "62%",
    animalBottom: "-10px",
    videoType: "file",
    videoSrc: "img/tiger.mp4",
    videoKind: "gradient",
    sketch: "grass",
  },
  elephant: {
    title: "ELEPHANT",
    subtitle: "Loxodonta africana",
    intro:
      "The elephant is the largest land animal. It has big ears, thick legs, and a long trunk used for eating and drinking. Elephants are smart, gentle, and live in family groups.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "They use their ears to fan themselves and cool their blood when it's very hot.",
      "Their trunk has more than 40,000 muscles. They use it to drink water, greet people, and even pick up small objects.",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "4000 - 7000 kg"],
      ["HEIGHT", "3 - 4 m"],
      ["SPEED", "40 km/h (max.)"],
      ["LIFESPAN", "60 - 70 years"],
      ["HABITAT", "savannas, rainforests, swamps, dense forests"],
      ["CONTINENT", "Africa & Asia"],
    ],
    mediaReverse: true,
    circle: "#6a6900",
    circleLeft: "72%",
    circleBottom: "80px",
    circleSize: "300px",
    animalSrc: "img/-60 1.png",
    animalWidth: "470px",
    animalLeft: "63%",
    animalBottom: "0",
    videoType: "file",
    videoSrc: "img/elephant.mp4",
    videoKind: "gradient",
    sketch: "grass",
  },
  cow: {
    title: "COW",
    subtitle: "Bos taurus",
    intro:
      "The cow is a calm farm animal with four legs and a long tail. It eats grass and lives in fields or farms. Cows give milk, which people use to make cheese and yogurt.",
    leftHeading: "Some curiosities about this animal!",
    leftItems: [
      "They have almost 360-degree vision and can smell something from 10 kilometers away.",
      "They're very social! They have best friends within their group and get sad if they're separated.",
    ],
    rightHeading: "Here is more information about this animals!!",
    rightFacts: [
      ["WEIGHT", "500 - 800 kg"],
      ["HEIGHT", "1,20 - 1,50 m"],
      ["SPEED", "40 km/h (max.)"],
      ["LIFESPAN", "15 - 20 years"],
      ["HABITAT", "farms, stables, meadows"],
      ["CONTINENT", "Europe"],
    ],
    mediaReverse: true,
    circle: "#d84212",
    circleLeft: "3%",
    circleBottom: "34px",
    circleSize: "250px",
    animalSrc: "img/-61 1.png",
    animalWidth: "360px",
    animalLeft: "0",
    animalBottom: "-6px",
    videoType: "file",
    videoSrc: "img/cow.mp4",
    videoKind: "gradient",
    sketch: "farm",
  },
};

const app = document.getElementById("app");
const landingPage = document.getElementById("landing-page");

function factsMarkup(facts) {
  return facts
    .map(
      ([label, value]) =>
        `<p><span class="fact-label">${label}:</span> ${value}</p>`,
    )
    .join("");
}

function bulletsMarkup(items) {
  return `<ul class="curiosities">${items
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;
}

function blockMarkup(page, side) {
  const heading = side === "left" ? page.leftHeading : page.rightHeading;
  const list =
    side === "left"
      ? page.leftItems || page.leftFacts || page.leftBullets || []
      : page.rightFacts || page.rightItems || page.rightBullets || [];
  let html = "";
  if (heading) html += `<h2 class="heading">${heading}</h2>`;
  if (list.length) {
    const isFacts = Array.isArray(list[0]);
    html += isFacts
      ? `<div class="facts">${factsMarkup(list)}</div>`
      : bulletsMarkup(list);
  }
  return html;
}

function renderVideo(page) {
  const title = page.videoTitle || "And in this video you will see it!!!";
  const classes =
    page.videoKind === "black"
      ? "video-frame black"
      : page.videoKind === "photo"
        ? "video-frame photo"
        : "video-frame gradient";

  if (page.videoType === "youtube" && page.videoSrc) {
    const separator = page.videoSrc.includes("?") ? "&" : "?";
    const src = page.videoSrc.includes("autoplay=1")
      ? page.videoSrc
      : `${page.videoSrc}${separator}autoplay=1&mute=1&playsinline=1`;
    return `
      <div class="video-stage">
        <h2 class="video-title">${title}</h2>
        <div class="${classes}">
          <iframe
            class="video-iframe"
            src="${src}"
            title="${page.title.toLowerCase()} video"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `;
  }

  if (page.videoType === "file" && page.videoSrc) {
    return `
      <div class="video-stage">
        <h2 class="video-title">${title}</h2>
        <div class="${classes}">
          <video class="video-player" autoplay muted playsinline loop>
            <source src="${page.videoSrc}" type="video/mp4" />
          </video>
        </div>
      </div>
    `;
  }

  const photo = page.videoSrc
    ? `<img class="video-photo${page.videoKind === "photo" ? " full" : ""}" src="${page.videoSrc}" alt="${page.title.toLowerCase()} video preview" style="left:${page.videoPhotoLeft || "32%"}; top:${page.videoPhotoTop || "12%"}; width:${page.videoPhotoWidth || "55%"};" />`
    : "";

  return `
    <div class="video-stage">
      <h2 class="video-title">${title}</h2>
      <div class="${classes}">
        ${page.videoKind !== "black" ? '<div class="video-shadow" aria-hidden="true"></div>' : ""}
        ${photo}
      </div>
    </div>
  `;
}

function renderAnimal(page) {
  return `
    <div class="animal-stage" style="--circle:${page.circle};">
      <img
        class="animal-image animal-floating"
        src="${page.animalSrc}"
        alt="${page.title.toLowerCase()} illustration"
      />
    </div>
  `;
}

function render(page) {
  const leftText = `${page.intro ? `<p class="intro">${page.intro}</p>` : ""}${blockMarkup(page, "left")}`;
  const rightText = `${blockMarkup(page, "right")}`;
  const mediaLeft = renderVideo(page);
  const mediaRight = renderAnimal(page);

  return `
    <section class="hero">
      <div class="title-block">
        <h1>${page.title}</h1>
        <span class="subtitle">${page.subtitle}</span>
      </div>
      <div class="text-grid">
        <section class="panel text-panel">${leftText}</section>
        <section class="panel text-panel">${rightText}</section>
      </div>
      <div class="media-grid">
        <section class="panel media-panel">${mediaLeft}</section>
        <section class="panel media-panel">${mediaRight}</section>
      </div>
    </section>
  `;
}

function showAnimalPage(animalKey) {
  const key = String(animalKey).trim().toLowerCase();
  const page = animalPages[key];

  if (!page) {
    console.warn(`Animal page not found for: ${animalKey}`);
    return;
  }

  if (landingPage) {
    landingPage.style.display = "none";
  }

  if (app) {
    app.innerHTML = render(page);
    app.hidden = false;
  }
}

connection.on("animal", function (data) {
  console.log("Received event 'animal' with data:", data);
  showAnimalPage(data);
});
