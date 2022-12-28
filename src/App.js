import "./App.css";
import "./navbar.css";

import Examples from "./components/Examples";
import FlexWrapper from "./components/flexWrapper/FlexWrapper";
import Item from "./components/Item/Item";

import pcuno from "./assets/img/pc-1.jpg";
import pcdos from "./assets/img/pc-2.webp";
import pctres from "./assets/img/pc-3.webp";
import NavBar from "./components/navbar/NavBar";

// Componente APP
function App() {
  return (
    <>
      <NavBar />
      <hr/>
      <FlexWrapper>
        <Item
          title="Producto 1"
          price={400}
          detail="Las mejores pc del mercado"
          imgurl="/assets/img/pc-1.jpg"
        />
        <Item
          title="Producto 2"
          price={800}
          detail="Las mejores pc del mercado"
          imgurl="/assets/img/pc-1.jpg"
        />
        <Item
          title="Producto 3"
          price={100}
          detail="Las mejores pc del mercado"
          imgurl="/assets/img/pc-1.jpg"
        />
      </FlexWrapper>
    </>
  );
}

export default App;
