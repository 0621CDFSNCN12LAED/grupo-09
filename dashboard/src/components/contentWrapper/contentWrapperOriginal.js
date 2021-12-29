import Footer from "./footer/footer";
import TopNavBar from "./topNavBar/topNavBar";
import ContentCard from "./contentCard/contentCard";
import ContentRowTop from "./contentRowTop/contentRowTop";
import ProductsInDb from "./productsInDb/productsInDb";
import LastProductInDb from "./lastProductInDb/lastProductInDb";
import CategoriesInDb from "./categoriesInDb/categoriesInDb";

import Img from "../../assets/images/WiseMonkey.png";
import Img2 from "../../assets/images/WiseMonkey2.png";

export default function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopNavBar />
        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Appedal Dashboard</h1>
          </div>

          <ContentRowTop />
        
            
            <div class="row">
            <ContentCard title="Último Producto Creado">
              <div class="text-center">
                <img
                  class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "15rem" }}
                  src={Img}
                  alt="Producto Destacado"
                />
              </div>
            </ContentCard>

            <ContentCard title="Último Usuario Registrado">
              <div class="text-center">
                <img
                  class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "14rem" }}
                  src={Img2}
                  alt="Producto Destacado"
                />
              </div>
            </ContentCard>
        </div>

        <Footer />
    </div>
    </div>
    </div>
  );
}