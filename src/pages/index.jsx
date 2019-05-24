import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

import { hidden } from '../styles/utils'
import flag from '../images/flag-sprite.svg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
const StickRightSide = styled.div`
position: fixed;
top: 1rem;
right: 0.5rem;
z-index: 1;
cursor: pointer;
`
const Button = styled.button`
  background: #9561e2;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #9561e2;
  border-radius: 3px;
  :hover{
    background: #352465;
  }
  :active{
    background: #1f133f;
  }
`
const SVG = styled.svg`
${tw`align-middle`};
  color: white;
  width: 16px;
  fill: white;
  margin-right: 0.5em;
`
const ShadowSpan = styled.span`
  text-shadow: 0 5px 10px rgba(255, 255, 255, 0.15);
`
const ChangeLanguage = styled.span`
  ${tw`font-sans text-white `};
  position: relative;
  padding: 8px;
`
const Language = styled.ul`
  display: none;
  min-width: 215px;
  position: absolute;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  background: #fff;
  color: #3c3c3c;
  padding: 15px 0;
  right: 0;
  top: 20px;
  width: 10%;
  :hover{
    display: block;
  }
  ${ChangeLanguage}:hover & {
    display: block;
  }
  :after {
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
    content: "";
    display: block;
    height: 0;
    left: 21px;
    position: absolute;
    top: -19px;
    width: 0;
    left: auto !important;
    right: 14px;
  }
`
const Country = styled.li`
  display: inline;
  float: left;
  line-height: 1.5em;
  width: 100%;
  padding: 8px;
  & a {
    -ms-flex-align: center;
    align-items: center;
    color: #3c3c3c;
    display: -ms-flexbox;
    display: flex;
    font-size: 15px;
    font-weight: 500;
    padding: 0 15px;
    white-space: nowrap;
  }
  :hover{
    background: #e9e9e9;
    border-radius: 16px
  }
`
const Flag = styled.span`
  zoom: 0.33;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  margin-top: 10px;
  margin-right: 40px;
  display: inline-block;
  height: 62px;
  width: 78px;
  &.BR { background: url(${flag}) no-repeat -2px -201px; }
  &.EN { background: url(${flag}) no-repeat -2px -3px; }
  &.FR { background: url(${flag}) no-repeat -2px -135px; }
  &.ES { background: url(${flag}) no-repeat -2px -69px; }
`

const Index = () => (
  <>
    <Layout />
    <StickRightSide>
      <ChangeLanguage>
        <ShadowSpan>
          Idioma del sitio: <b>Español</b>&nbsp;
        </ShadowSpan>
        <SVG viewBox='0 0 650 650'>
          <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
        </SVG>
        <Language>
          <Country> <a href="http://pt.alexandredoria.com/"><Flag className="BR"></Flag><span>Português</span> </a> </Country>
          <Country> <a href="http://en.alexandredoria.com/"><Flag className="EN"></Flag><span>English</span></a> </Country>
          <Country> <a href="http://fr.alexandredoria.com/"><Flag className="FR"></Flag><span>Français</span></a> </Country>
          <Country> <a href="http://es.alexandredoria.com/"><Flag className="ES"></Flag><span>Español</span></a> </Country>
        </Language>
      </ChangeLanguage>
      <a href="./CV_AlexandreDoria_es.pdf" download>
      <Button>
        <SVG viewBox='0 0 20 20'>
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
        </SVG>
        Descargar CV
      </Button>
      </a>
    </StickRightSide>
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hola, <br /> Soy Alex Dória.
        </BigTitle>
        <Subtitle>Creo buenas experiencias web para la próxima generación de empresas orientadas al consumidor.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Proyectos</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Oficina de abogados de Antônio Novais Filho"
            link="http://antonionovaisfilho.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Freelance de diseño, SEO y desarrollo de software...
          </ProjectCard>
         {/*  <ProjectCard
            title="Harry Potter"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Acerca de</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alex Dória" />
          <AboutSub>
            Nacido para crear y compartir.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Programador desde los 14 años, con experiencia en los lenguajes PHP, Javascript y Java, también posee conocimiento en áreas como modelado de sistemas, seguridad de la información, redes de computadoras y gestión de proyectos. En 2018, se convirtió en Scrum Master y desde entonces percibe las habilidades de conectar e impulsar a las personas.
          <p>Fluido en portugués, competentes en <ShadowSpan><b>Inglés</b></ShadowSpan>, <ShadowSpan><b>Francés</b></ShadowSpan> básico y principiante en <ShadowSpan><b>Español</b></ShadowSpan>.</p>
          Entonces, ¿por qué no entrar en contacto conmigo?
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Entrar en contacto</Title>
          <ContactText>
            Envíale un  <a href="mailto:alexandredoria.01@hotmail.com">Oi</a> o me encuentre en otras plataformas:{' '}
            <a href="https://www.linkedin.com/in/alexandredoria/" target="_blank">Linkedin</a> ,{' '}
            <a href="https://github.com/alexandredoria" target="_blank">Github</a> ,{' '}
            <a href="https://www.instagram.com/alexdoria01/" target="_blank">Instagram</a> &{' '}
            <a href="https://api.whatsapp.com/send?phone=5579998765245" target="_blank">Whatsapp</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 por Alexandre Dória - Portafolio.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
