import { SectorsDiv } from "./styles"
import { SectorTab } from "../../components/sectorTab"
import salesIcon from "../../assets/Icons/comercial.png"
import opIcon from "../../assets/Icons/operacional.png"
import marketingIcon from "../../assets/Icons/marketing.png"
import sacIcon from "../../assets/Icons/sac.png"
import planningIcon from "../../assets/Icons/planning.png"
import { ExpandableContainerStyled } from "../../components/container/styles"
import { Person } from "../../components/personCard"
import { gql } from "@apollo/client"
import { useState, useEffect } from "react"
import { client } from "../../services/apolloClient"

export const Sectors = () => {

    const [person, setPersons] = useState<Person[]>([])

    useEffect(() => {

        const getPersons = async () => {
            const { data } = await client.query({
                query: gql`
                {
                    people(first: 100) {
                      id
                      name
                      role
                      sector
                      telephone
                      email
                      functions
                      img {
                        url
                      }
                    }
                  }
                  
                `
            })
            
            setPersons(data.people)
        }
        getPersons()

    }, [])

    return (
        <ExpandableContainerStyled>
            <h2 id="sectors">Setores</h2>
            <SectorsDiv>
                <SectorTab img={salesIcon} name="Comercial" sector={person.filter(person => person.sector === 'Comercial')}/>
                <SectorTab img={opIcon} name="Operacional" sector={person.filter(person => person.sector === 'Operacional')}/>
                <SectorTab img={marketingIcon} name="Marketing" sector={person.filter(person => person.sector === 'Marketing')}/>
                <SectorTab img={sacIcon} name="Sac" sector={person.filter(person => person.sector === 'Sac')}/>
                <SectorTab img={planningIcon} name="Planning" sector={person.filter(person => person.sector === 'Planning')}/>
            </SectorsDiv>
        </ExpandableContainerStyled>
    )
}