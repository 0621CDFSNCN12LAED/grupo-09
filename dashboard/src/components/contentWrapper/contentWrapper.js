import TopNavBar from "./topNavBar/topNavBar";
import ContentRowTop from "./contentRowTop/contentRowTop";
import LastProductInDb from "./lastProductInDb/lastProductInDb";
import CategoriesInDb from "./categoriesInDb/categoriesInDb";
import ProductsInDb from "./productsInDb/productsInDb";
import ContentCard from "./contentCard/contentCard";
import ContentCardLarge from "./contentCard/contentCardLarge";
import Footer from "./footer/footer";

import Img from "../../assets/images/WiseMonkey.png";
import Img2 from "../../assets/images/WiseMonkey2.png";

export default function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopNavBar />
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Appedal Dashboard</h1>
          </div>

          <ContentRowTop />

          <div className="row">
            <ContentCard title="Último Producto Cargado">
              <LastProductInDb />
            </ContentCard>
            <ContentCard title="Detalle por Categorias">
              <CategoriesInDb />
            </ContentCard>
          </div>
          <div className="row">
            <ContentCardLarge title="Lista de Productos">
              <ProductsInDb />
            </ContentCardLarge>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
