import logo from "../../assets/Logo/logo-black.png"
import { DivBg } from "./styles"
import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer";

export const Home = () => {

      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
      });

      const overlayAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0%)" : "translateY(-100%)",
        config: { tension: 300, friction: 100 },
      });
    

    return (
        <DivBg>
            <animated.div ref={ref} style={overlayAnimation}>
                    <figure>
                        <img src={logo} alt="Ativação" />
                    </figure>
                    <div>
                        <h3>Para ser nosso parceiro, cadastre-se aqui</h3>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScESXDQ2flHnuMXuk9d8Vc0TbmaKhv1mATVEVNjOFIT4E3mDw/viewform" target="_blank">Cadastrar-se</a>
                    </div>
            </animated.div>
        </DivBg>
    )
}