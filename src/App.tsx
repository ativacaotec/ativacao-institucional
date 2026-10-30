import { Header } from "./components/header"
import { Area } from "./pages/area"
import { AtivacaoTec } from "./pages/ativacaoTec"
import { Home } from "./pages/home"
import { Sectors } from "./pages/sectors"
import { History } from "./pages/history"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Brands } from "./pages/brands"
import { Contact } from "./pages/contact"
import { WhatsButton } from "./components/whatsButton"

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Area />
      <Sectors />
      <AtivacaoTec />
      <History />
      <Brands />
      <Contact />
      <WhatsButton />
    </>
    )
}
