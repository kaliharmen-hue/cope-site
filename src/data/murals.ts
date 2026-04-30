export interface MuralImage {
  src: string;
  alt: string;
  caption: string;
}

export const featuredMuralGallery: MuralImage[] = [
  {
    src: '/images/murals/mural-futuristic-comic-style.png',
    alt: 'Futuristic comic style mural artwork',
    caption: 'Futuristic comic style',
  },
  {
    src: '/images/murals/mural-japanese-style.png',
    alt: 'Japanese style mural concept or finished wall artwork',
    caption: 'Japanese style',
  },
  {
    src: '/images/murals/mural-oak-and-olive-cafe.png',
    alt: 'Oak and Olive Cafe mural example',
    caption: 'Oak and Olive Cafe',
  },
  {
    src: '/images/murals/mural-saints-pub.jpg',
    alt: 'The Saints Pub Millbrook mural example',
    caption: 'The Saints Pub',
  },
];

export const processMuralGallery: MuralImage[] = [
  {
    src: '/images/murals/mural-blank-wall.jpg',
    alt: 'Blank wall before a mural is started',
    caption: 'Blank wall',
  },
  {
    src: '/images/murals/mural-in-progress.jpg',
    alt: 'Keith working on a mural in progress',
    caption: 'In progress',
  },
];
