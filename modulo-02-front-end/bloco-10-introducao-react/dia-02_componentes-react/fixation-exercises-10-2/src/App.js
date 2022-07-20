import Image from './Image';


function App() {
  const imgSrc = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  const altText = 'Cute cat staring';
  return (
    <main>
      <Image source={imgSrc} alternativeText={altText}/>
    </main>
  );
}

export default App;
