import Header from '../components/Header';
import Features from '../components/Features';
import ProductGallery from '../components/ProductGallery';
import Footer from '../components/Footer';
import SmallIdea from '../components/SmallIdea';
import JoinClub from '../components/JoinClub';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Features />
        <ProductGallery />
        <SmallIdea />
        <JoinClub />
      </main>
      <Footer />
    </div>
  );
}
