import { useState } from "react"
import downarrow from "../../assets/Icons/down-arrow.png"
import { Card } from "../personCard"
import { PersonsStyled, TabStyled } from "./styles"
import { Person } from "../personCard/index"
import { useSpring, animated } from "react-spring"

interface ComponentProps {
    img: string
    name: string
    sector: Person[]
}


export const SectorTab = ({ img, name, sector }: ComponentProps) => {

    const [isActive, setIsActive] = useState(false)

    const toggleIsActive = () => {
        setIsActive(!isActive)
    }

    const animationProps = useSpring({
        maxHeight: isActive ? '600px' : '0',
        opacity: isActive ? 1 : 0,
        config: { tension: 200, friction: 50 }
    })

    return (
        <>
        <TabStyled $isActive={isActive} onClick={toggleIsActive}>
            <div className="sectorName">
                <img className="icon" src={img} alt={name} />
                <h3>{name}</h3>
                <img className="arrow" src={downarrow} alt="" />
            </div>
        </TabStyled>
        <animated.div style={{...animationProps, overflow: 'hidden', width: '100%'}}>
            <PersonsStyled $isActive={isActive}>
                {
                    sector.map((person, i) => {
                        return <Card key={i} person={person}/>
                    })
                }
                    
            </PersonsStyled>
        </animated.div>
        </>
    )
}