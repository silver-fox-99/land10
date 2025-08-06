import Header from "./header/header";
import MainBlock from "./main-block/main-block";
import About from "./about/about";
import InfoBlock from "./info-block/info-block";
import PriceBlock from "./price-block/price-block";
import TableBlock from "./table-block/table-block";
import InfoBlock2 from "./info-block-2/info-block-2";
import ContactBlock from "./contact-block/contact-block";
import Footer from "./Footer";


function App() {
    return (
        <>
            <Header/>
            <MainBlock />
            <About />
            <InfoBlock />
            <PriceBlock />
            <TableBlock />
            <InfoBlock2 />
            <ContactBlock />
            <Footer />
        </>
    );
}

export default App;
