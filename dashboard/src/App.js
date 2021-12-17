import "./assets/css/app.css";
import ContentWrapper from "./components/contentWrapper/contentWrapper";
import SideBar from "./components/sideBar/sideBar";


export default function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
         
    </div>
  );
}