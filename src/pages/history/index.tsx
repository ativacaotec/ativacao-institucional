import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import { DivBgHistory } from "./styles"

export const History = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
      const paragraphAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0%)" : "translateX(-80%)",
        config: { tension: 300, friction: 100 },
      });
      
    return (
        <DivBgHistory>
            <h2 id="history">História</h2>
            <div>
                <animated.p ref={ref} style={paragraphAnimation}>
                    O escritório ATIVAÇÃO tem uma sólida experiência de <span className="number">16</span> anos no mercado de representação comercial. Em <span className="number">2007</span>, seu fundador iniciou suas atividades no setor, sempre buscando aprimorar suas técnicas de venda e oportunidades para realizar diversos tipos de negociações.
                    Destacamos algumas das nossas conquistas ao longo dessa jornada de sucesso. No segmento de venda de talento, tivemos a honra de assessorar o ator Eri Jonson durante dois anos, criando um evento de grande sucesso chamado "Toda Quinta" e realizando uma turnê nacional 
                    com o ator apresentando a peça Eri Pinta Jonson Borda, proporcionando experiências memoráveis.
                    Na venda de processos, atuamos como agente de carga para a empresa Master Shipping, sob a gestão do renomado diretor Diogo Siqueira, um dos maiores empresários do ramo. Além disso, tivemos forte presença na gestão de pessoas em 
                    eventos como Rock in Rio, SWU, Lollapalooza e outros eventos nacionais. Também prestamos serviços por um ano para a empresa GL Events, administrando e executando contratos durante a Copa do Mundo de <span className="number">2014</span>. Na venda de produtos, trabalhamos com diversas marcas nacionais 
                    e internacionais, contribuindo para a nossa história até o presente momento.
                    Nossa trajetória foi construída com determinação, perseverança e uma mentalidade aberta a novas ideias e metodologias de trabalho. Durante todos esses anos, atuamos com marcas de diferentes segmentos, focando especialmente em acessórios, produtos esportivos e moda, o que 
                    nos proporcionou uma visão ampla e diversificada do mercado.
                    No que diz respeito às nossas relações no mercado, sempre valorizamos a transparência e a eficiência, mantendo um compromisso sólido com todos os envolvidos na 
                    operação de vendas, sejam fabricantes, clientes ou consumidores. Nossa busca incessante pela excelência nos levou ao desenvolvimento da ATIVAÇÃO TEC, uma área dedicada a 
                    oferecer suporte ao desempenho de vendas dos nossos clientes, proporcionando capacitação para as equipes de vendas e informações relevantes para as equipes de compras.
                    Não poderíamos deixar de expressar nossa imensa gratidão a todos os amigos, gestores e clientes que compartilharam conosco essa jornada de sucesso. Nossos valores 
                    fundamentais são alicerçados na transparência, eficiência, honestidade, perseverança, inovação e gratidão.
                    Apesar de todas as conquistas, sabemos que estamos apenas no começo de uma trajetória promissora. Mantemos nosso compromisso em continuar proporcionando resultados 
                    excepcionais aos nossos parceiros e clientes, buscando sempre a excelência em nossos serviços e aprimorando nossas práticas para atender às demandas de um mercado em 
                    constante evolução.
                </animated.p>
            </div>
        </DivBgHistory>
    )
}