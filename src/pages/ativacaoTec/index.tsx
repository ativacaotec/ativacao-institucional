import { Container } from "../../components/container";
import { TxtDiv, VideoDiv } from "./styles";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import videoInst from "./inst2.mp4"


export const AtivacaoTec = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
      });
    
      const paragraphAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0%)" : "translateX(60%)",
        config: { tension: 300, friction: 100 },
      });

  return (
    <Container>
      <h2 id="tec">Ativação TEC</h2>
      <TxtDiv>
        <animated.p style={paragraphAnimation} ref={ref}>
          Nosso site Ativação TEC está pronto para te auxiliar a desbravar o mundo do Business
          Intelligence e transformar seus dados em informações estratégicas.
          Oferecemos uma variedade de treinamentos especializados em Power
          BI, permitindo que você mergulhe fundo no universo da análise de dados.
          Com as habilidades certas, você será capaz de extrair insights valiosos, identificar tendências
          relevantes e tomar decisões fundamentadas para o sucesso do seu negócio..
        </animated.p>
        <animated.p style={paragraphAnimation} ref={ref}>
          Além disso, nossa plataforma disponibiliza informações cruciais sobre campanhas de produtos.
          Descubra estratégias vencedoras, conheça o perfil dos seus clientes e crie abordagens irresistíveis
          que impulsionem suas vendas. Nossa missão é capacitá-lo com ferramentas poderosas que farão
          toda a diferença no crescimento da sua empresa. Você terá acesso a um ambiente de aprendizado interativo, com
          conteúdos atualizados e desenvolvidos por especialistas.
        </animated.p>
      </TxtDiv>
      <VideoDiv>
        <button>
          <a href="https://ativacaotec.com" target="_blank">Conheça o site</a>
        </button>
        <video controls preload="none">
            <source src={videoInst} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
        </video>
      </VideoDiv>
    </Container>
  );
};
