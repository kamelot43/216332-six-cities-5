import {ApartmentType, Cities, MAX_RATING} from "../const";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const apartamentType = Object.values(ApartmentType);
const cities = Object.values(Cities);
const costPerNight = [120, 220, 330, 450, 550];
const adults = [2, 4, 6, 8, 5, 3];
const bedrooms = [1, 2, 3, 4, 5];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(1);
}

export default [
  {
    city: cities[(Math.random() * cities.length) | 0],
    index: 1,
    picture: `img/apartment-03.jpg`,
    type: apartamentType[(Math.random() * apartamentType.length) | 0],
    costPerNight: costPerNight[(Math.random() * costPerNight.length) | 0],
    title: `Beautiful & luxurious apartment at great location`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    rating: randomInteger(0, MAX_RATING),
    premium: true,
    pictures: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    maxAdults: adults[(Math.random() * adults.length) | 0],
    bedrooms: bedrooms[(Math.random() * bedrooms.length) | 0],
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`],
    owner: {
      name: `Karina`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
    },
    coordinates: [52.3909553943508, 4.85309666406198],
  }, {
    city: cities[(Math.random() * cities.length) | 0],
    index: 2,
    picture: `img/apartment-01.jpg`,
    type: apartamentType[(Math.random() * apartamentType.length) | 0],
    costPerNight: costPerNight[(Math.random() * costPerNight.length) | 0],
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: randomInteger(0, MAX_RATING),
    premium: false,
    pictures: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-02.jpg`, `img/studio-02.jpg`],
    maxAdults: adults[(Math.random() * adults.length) | 0],
    bedrooms: bedrooms[(Math.random() * bedrooms.length) | 0],
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    owner: {
      name: `Peter`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
    },
    coordinates: [52.369553943508, 4.85309666406198],
  }, {
    city: cities[(Math.random() * cities.length) | 0],
    index: 3,
    picture: `img/apartment-03.jpg`,
    type: apartamentType[(Math.random() * apartamentType.length) | 0],
    costPerNight: costPerNight[(Math.random() * costPerNight.length) | 0],
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: randomInteger(0, MAX_RATING),
    premium: true,
    pictures: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-02.jpg`, `img/studio-02.jpg`],
    maxAdults: adults[(Math.random() * adults.length) | 0],
    bedrooms: bedrooms[(Math.random() * bedrooms.length) | 0],
    features: [`Wi-Fi`, `Washing machine`, `Towels`],
    owner: {
      name: `Mikel`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
    },
    coordinates: [52.3909553943508, 4.929309666406198],
  }, {
    city: cities[(Math.random() * cities.length) | 0],
    index: 4,
    picture: `img/room.jpg`,
    type: apartamentType[(Math.random() * apartamentType.length) | 0],
    costPerNight: costPerNight[(Math.random() * costPerNight.length) | 0],
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: randomInteger(0, MAX_RATING),
    premium: false,
    pictures: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-02.jpg`, `img/studio-02.jpg`],
    maxAdults: adults[(Math.random() * adults.length) | 0],
    bedrooms: bedrooms[(Math.random() * bedrooms.length) | 0],
    features: [`Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    owner: {
      name: `Daniel`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
    },
    coordinates: [52.3809553943508, 4.939309666406198],
  }
];
