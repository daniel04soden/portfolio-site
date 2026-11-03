import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import Navigation from "@/components/Navigation";


function Home() {
  return (
    <>
      <main className="container">
        <Header title="Welcome to my Portfolio Site" />
        <InfoCard />
        <Footer/>
      </main>
    </>
  );
}

export default Home;
