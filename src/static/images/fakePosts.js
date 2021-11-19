// place holder post
import banana from '../images/banana.jpg';
import mango from '../images/mango.jpg';
import lemon from '../images/lemon.jpg';
import orange from '../images/orange.jpg';
import orangeCut from '../images/orangecut.jpg';
const posts = [
  {
    id: '0',
    name: 'Mango',
    description:
      'Fruites are the means by which flowering plants disseminate their seed. In botaincal usage, the term frutes a collection of usage rights for a block of spectrumthat is granted by a regulator often through an auction.',
    imageUrl: mango,
  },
  {
    id: '1',
    name: 'Banana',
    description:
      'Fruites are the means by which flowering plants disseminate their seed. In botaincal usage, the term frutes a collection of usage rights for a block of spectrumthat is granted by a regulator often through an auction.',
    imageUrl: banana,
  },
  {
    id: '2',
    name: 'Lemon',
    description:
      'Fruites are the means by which flowering plants disseminate their seed. In botaincal usage, the term frutes a collection of usage rights for a block of spectrumthat is granted by a regulator often through an auction.',
    imageUrl: lemon,
  },
  {
    id: '3',
    name: 'orange',
    description:
      'Fruites are the means by which flowering plants disseminate their seed. In botaincal usage, the term frutes a collection of usage rights for a block of spectrumthat is granted by a regulator often through an auction.',
    imageUrl: orange,
  },
  {
    id: '4',
    name: 'OrangeCut',
    description:
      'Fruites are the means by which flowering plants disseminate their seed. In botaincal usage, the term frutes a collection of usage rights for a block of spectrumthat is granted by a regulator often through an auction.',
    imageUrl: orangeCut,
  },
];

export default function getPosts() {
  return posts;
}
