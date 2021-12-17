
import ContentCard from "./contentCard/contentCard";
import ContentRowTop from "./contentRowTop/contentRowTop";
import Footer from "./footer/footer";

export default function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        
        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Appedal Dashboard</h1>
          </div>

          <ContentRowTop />

          <div class="row">
            <ContentCard title="Last movie in Data Base">
        
            </ContentCard>

            <ContentCard title="Generos en la DB">
        
            </ContentCard>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}