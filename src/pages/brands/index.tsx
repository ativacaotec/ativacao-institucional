import { BrandCard } from "../../components/brandCard"
import { DivBrandCards } from "./styles"
import { ExpandableContainerStyled } from "../../components/container/styles"
import { client } from "../../services/apolloClient"
import { gql } from "@apollo/client"
import { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

interface Brand {
    name: string;
    logo: {
      url: string;
    };
  }

export const Brands = () => {

    const [brands, setBrands] = useState<Brand[]>([])

    useEffect(() => {

        const getBrands = async () => {
            const { data } = await client.query({
                query: gql`
                {
                    brands(first: 100) {
                      name
                      logo {
                        url
                      }
                    }
                  }
                `
            })
            const arrayToSort = data.brands.slice()
            .sort((a: { name: string }, b: { name: string }) => {
              if (a.name === 'Puma') return -1;
              if (b.name === 'Puma') return 1;
              if (a.name === 'Samsonite') return -1;
              if (b.name === 'Samsonite') return 1;
              if (a.name === `Yin's`) return -1;
              if (b.name === `Yin's`) return 1;
              return 0;
            })
            
            setBrands(arrayToSort)
        }
        getBrands()

    }, [])

    return(
        <ExpandableContainerStyled>
            <h2 id="brands" className="brands">Marcas que são parte da nossa história</h2>
            <DivBrandCards>
            {
              brands.map((brand, i) => (
                <AnimatedBrandCard key={i} brand={brand} />
            ))}
            </DivBrandCards>
        </ExpandableContainerStyled>
    )
}

interface AnimatedBrandCardProps {
  brand: Brand;
}

const AnimatedBrandCard: React.FC<AnimatedBrandCardProps> = ({ brand }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0%)" : "translateY(40%)",
    config: { tension: 300, friction: 100 },
  });

  return (
    <animated.div ref={ref} style={springProps}>
      <BrandCard name={brand.name} img={brand.logo.url} />
    </animated.div>
  );
};