import Card from "./components/Card";
import { nanoid } from "nanoid";

function App() {
  const cards = [
    {
      imageSrc: 'https://img2.goodfon.ru/original/320x240/1/a1/bow-lake-banff-national-park.jpg',
      imageAlt: '123',
      title: 'Card titile',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      link: '#',
      linkText: 'Go somewhere'
    },
    {
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.',
      link: '#',
      linkText: 'Go somewhere'
    }
  ];

  return (
    <div className="wrapper">
      {cards.map(item =>
        <Card imageSrc={item.imageSrc} imageAlt={item.imageAlt} key={nanoid()}>
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.text}</p>
          <a href={item.link} class="btn btn-primary">{item.linkText}</a>
        </Card>)}
    </div>
  );
}

export default App;
