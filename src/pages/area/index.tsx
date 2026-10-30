import { DivBox, DivContactInfo, DivMap, MapFigure, MapFigureMobile, MapFigureMobileExtraSmall, MapFigureMobileExtraSmall400, MapFigureMobileSmall, MapImg } from "./styles"
import map from "../../assets/Images/map.png"
import { ContainerWithSubtitle } from "../../components/container"
import { useState } from "react"
import { AreaContact } from "../../components/areaContact"
import { allRegions, hugoRegion, marceloRegion, minasRegion } from "./info"
import pin from "../../assets/Icons/Puma cat small.png"
import { Icon } from "./icon"

export const Area = () => {

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleOptions = () => {
      setIsOptionsOpen(!isOptionsOpen);
    }

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOptionsOpen(false);
    }

    const handleMap = (option: string) => {
        setSelectedOption(option);
    }

    return (
        <ContainerWithSubtitle>
            <div className="withSubtitle">
                <h2 id="area">Área de atuação</h2>
                <small>Representação comercial Puma Brasil</small>
            </div>
            <DivBox>
                <DivMap>
                    <div className="container">
                        <div className="select-box">
                            <div className={`options-container ${isOptionsOpen ? "active" : ""}`}>
                            <div
                                className={`option ${selectedOption === "Amapá" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Amapá")}
                            >
                                <input type="radio" className="radio" id="Amapá" />
                                <label htmlFor="Amapá">Amapá</label>
                            </div>
                            <div
                                className={`option ${selectedOption === "Amapá" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Amapá")}
                            >
                                <input type="radio" className="radio" id="Amazonas" />
                                <label htmlFor="Amapá">Amazonas</label>
                            </div>
                            <div
                                className={`option ${selectedOption === "Bahia" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Bahia")}
                            >
                                <input type="radio" className="radio" id="Bahia" />
                                <label htmlFor="Bahia">Bahia</label>
                            </div>
                            <div
                                className={`option ${selectedOption === "Espírito Santo" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Espírito Santo")}
                            >
                                <input type="radio" className="radio" id="Espírito Santo" />
                                <label htmlFor="Espírito Santo">Espírito Santo</label>
                            </div>
                            <div
                                className={`option ${selectedOption === "Goiás/Distrito Federal" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Goiás/Distrito Federal")}
                            >
                                <input type="radio" className="radio" id="Goiás/Distrito Federal" />
                                <label htmlFor="Goiás/Distrito Federal">Goiás/Distrito Federal</label>
                            </div>
                            <div
                                className={`option ${selectedOption === "Minas Gerais" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Minas Gerais")}
                            >
                                <input type="radio" className="radio" id="Minas Gerais" />
                                <label htmlFor="Minas Gerais">Minas Gerais</label>
                            </div>
                            <div
                                className={`option ${selectedOption === "Pará" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Pará")}
                            >
                                <input type="radio" className="radio" id="Pará" />
                                <label htmlFor="Pará">Pará</label>
                            </div>
                            <div
                                className={`option ${selectedOption === "Tocantins" ? "selected" : ""}`}
                                onClick={() => handleOptionClick("Tocantins")}
                            >
                                <input type="radio" className="radio" id="Tocantins" />
                                <label htmlFor="Tocantins">Tocantins</label>
                            </div>
                            </div>
                            <div className="selected" onClick={toggleOptions}>
                            {selectedOption ? selectedOption : "Selecione o estado..."}
                            </div>
                        </div>
                    </div>
                        <DivContactInfo>
                            {selectedOption == "" ? 
                            allRegions.map((contact, i) => {
                                return <AreaContact key={i} contact={contact}/>
                            })
                            :
                            null}
                            {selectedOption == "Amapá" || 
                            selectedOption == "Amazonas" || 
                            selectedOption == "Bahia" || 
                            selectedOption == "Espírito Santo" || 
                            selectedOption == "Goiás/Distrito Federal" || 
                            selectedOption == "Tocantins" ? 
                            marceloRegion.map((contact, i) => {
                                return <AreaContact key={i} contact={contact}/>
                            })
                            :
                            null}
                            {selectedOption == "Minas Gerais" ? 
                            minasRegion.map((contact, i) => {
                                return <AreaContact key={i} contact={contact}/>
                            })
                            :
                            null}
                            {selectedOption == "Pará" ? 
                            hugoRegion.map((contact, i) => {
                                return <AreaContact key={i} contact={contact}/>
                            })
                            :
                            null}
                        </DivContactInfo>
                </DivMap>
                    <MapFigure>
                        <MapImg src={map} alt="Mapa do Brasil" />
                        <Icon onClick={() => handleMap("Amapá")}
                        src={pin} 
                        top={"7%"} 
                        left={"51%"}
                        />
                        <Icon onClick={() => handleMap("Amazonas")}
                        src={pin} 
                        top={"21%"} 
                        left={"34%"}
                        />
                        <Icon onClick={() => handleMap("Bahia")}
                        src={pin} 
                        top={"40%"} 
                        left={"66%"}
                        />
                        <Icon onClick={() => handleMap("Espírito Santo")}
                        src={pin} 
                        top={"57%"} 
                        left={"68.5%"}
                        />
                        <Icon onClick={() => handleMap("Goiás/Distrito Federal")}
                        src={pin} 
                        top={"49%"} 
                        left={"54%"}
                        />
                        <Icon onClick={() => handleMap("Minas Gerais")}
                        src={pin} 
                        top={"55%"} 
                        left={"62%"}
                        />
                        <Icon onClick={() => handleMap("Pará")}
                        src={pin} 
                        top={"22%"} 
                        left={"49%"}
                        />
                        <Icon onClick={() => handleMap("Tocantins")}
                        src={pin} 
                        top={"36%"} 
                        left={"56.5%"}
                        />
                    </MapFigure>
                    <MapFigureMobile>
                        <MapImg src={map} alt="Mapa do Brasil" className="map" />
                        <Icon onClick={() => handleMap("Amapá")}
                        src={pin} 
                        top={"8%"} 
                        left={"51%"}
                        />
                        <Icon onClick={() => handleMap("Amazonas")}
                        src={pin} 
                        top={"22%"} 
                        left={"33%"}
                        />
                        <Icon onClick={() => handleMap("Bahia")}
                        src={pin} 
                        top={"40%"} 
                        left={"66%"}
                        />
                        <Icon onClick={() => handleMap("Espírito Santo")}
                        src={pin} 
                        top={"56%"} 
                        left={"69%"}
                        />
                        <Icon onClick={() => handleMap("Goiás/Distrito Federal")}
                        src={pin} 
                        top={"48%"} 
                        left={"54%"}
                        />
                        <Icon onClick={() => handleMap("Minas Gerais")}
                        src={pin} 
                        top={"55%"} 
                        left={"62%"}
                        />
                        <Icon onClick={() => handleMap("Pará")}
                        src={pin} 
                        top={"23%"} 
                        left={"49%"}
                        />
                        <Icon onClick={() => handleMap("Tocantins")}
                        src={pin} 
                        top={"36%"} 
                        left={"56%"}
                        />
                    </MapFigureMobile>
                    <MapFigureMobileSmall>
                        <MapImg src={map} alt="Mapa do Brasil" className="map" />
                        <Icon onClick={() => handleMap("Amapá")}
                        src={pin} 
                        top={"8%"} 
                        left={"51%"}
                        />
                        <Icon onClick={() => handleMap("Amazonas")}
                        src={pin} 
                        top={"22%"} 
                        left={"34%"}
                        />
                        <Icon onClick={() => handleMap("Bahia")}
                        src={pin} 
                        top={"40%"} 
                        left={"66%"}
                        />
                        <Icon onClick={() => handleMap("Espírito Santo")}
                        src={pin} 
                        top={"56%"} 
                        left={"69%"}
                        />
                        <Icon onClick={() => handleMap("Goiás/Distrito Federal")}
                        src={pin} 
                        top={"49%"} 
                        left={"54%"}
                        />
                        <Icon onClick={() => handleMap("Minas Gerais")}
                        src={pin} 
                        top={"55%"} 
                        left={"62%"}
                        />
                        <Icon onClick={() => handleMap("Pará")}
                        src={pin} 
                        top={"24%"} 
                        left={"49%"}
                        />
                        <Icon onClick={() => handleMap("Tocantins")}
                        src={pin} 
                        top={"36%"} 
                        left={"56%"}
                        />
                    </MapFigureMobileSmall>
                    <MapFigureMobileExtraSmall400>
                        <MapImg src={map} alt="Mapa do Brasil" className="map" />
                        <Icon onClick={() => handleMap("Amapá")}
                        src={pin} 
                        top={"7%"} 
                        left={"51%"}
                        />
                        <Icon onClick={() => handleMap("Amazonas")}
                        src={pin} 
                        top={"21%"} 
                        left={"32%"}
                        />
                        <Icon onClick={() => handleMap("Bahia")}
                        src={pin} 
                        top={"39%"} 
                        left={"66%"}
                        />
                        <Icon onClick={() => handleMap("Espírito Santo")}
                        src={pin} 
                        top={"55%"} 
                        left={"69%"}
                        />
                        <Icon onClick={() => handleMap("Goiás/Distrito Federal")}
                        src={pin} 
                        top={"48%"} 
                        left={"55%"}
                        />
                        <Icon onClick={() => handleMap("Minas Gerais")}
                        src={pin} 
                        top={"53%"} 
                        left={"62%"}
                        />
                        <Icon onClick={() => handleMap("Pará")}
                        src={pin} 
                        top={"22%"} 
                        left={"49%"}
                        />
                        <Icon onClick={() => handleMap("Tocantins")}
                        src={pin} 
                        top={"35%"} 
                        left={"56%"}
                        />
                    </MapFigureMobileExtraSmall400>
                    <MapFigureMobileExtraSmall>
                        <MapImg src={map} alt="Mapa do Brasil" className="map" />
                        <Icon onClick={() => handleMap("Amapá")}
                        src={pin} 
                        top={"6%"} 
                        left={"50%"}
                        />
                        <Icon onClick={() => handleMap("Amazonas")}
                        src={pin} 
                        top={"21%"} 
                        left={"32%"}
                        />
                        <Icon onClick={() => handleMap("Bahia")}
                        src={pin} 
                        top={"39%"} 
                        left={"66%"}
                        />
                        <Icon onClick={() => handleMap("Espírito Santo")}
                        src={pin} 
                        top={"54%"} 
                        left={"68%"}
                        />
                        <Icon onClick={() => handleMap("Goiás/Distrito Federal")}
                        src={pin} 
                        top={"47%"} 
                        left={"54%"}
                        />
                        <Icon onClick={() => handleMap("Minas Gerais")}
                        src={pin} 
                        top={"53%"} 
                        left={"61%"}
                        />
                        <Icon onClick={() => handleMap("Pará")}
                        src={pin} 
                        top={"22%"} 
                        left={"49%"}
                        />
                        <Icon onClick={() => handleMap("Tocantins")}
                        src={pin} 
                        top={"35%"} 
                        left={"56%"}
                        />
                    </MapFigureMobileExtraSmall>
            </DivBox>
        </ContainerWithSubtitle>
    )
}