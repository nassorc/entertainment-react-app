import styled from 'styled-components'
import landingImage from '../images/landing.jpg'
export const MainColumn = styled.section`
    margin-inline: auto;
    margin-top: 40px;
    width: 740px;
`
export const WidgetContainer = styled.section`
    margin: 20px 10px;
    position: relative;
`
export const WidgetContainerVertical = styled.article`
    margin: 20px 10px;
`
export const WidgetContainerHorizontal = styled.article`
    & {
        display: flex;
        flex-direction: rows;

        overflow-x: scroll;
        overflow-y: auto;
        overscroll-behavior-inline: contain;
        scroll-snap-type: inline mandatory;
        scrollbar-width: none;
        scroll-behavior: smooth;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    & > * {
        scroll-snap-align: start;
        margin-right: 4px;
    }
`
export const WidgetHeader = styled.div`
    width: 100%;
    border-bottom: 2px solid #D58A55;
    margin-bottom: 1em;
`
export const WidgetHeaderTitle = styled.h2`
    font-size: ${props => props.large ? "2em" : "1em"};
    margin: 0;
    color: "black";
`
export const ScrollLeftButton = styled.button`
    position: absolute;
    top: 42px;
    left: 2px;
    bottom: 0;

    border: 1px solid white;
    background-color: rgba(1,1,1,0.6);
    color: white;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    z-index: 10;
    cursor: pointer;
`
export const ScrollRightButton = styled.button`
    position: absolute;
    top: 42px;
    right: 2px;
    bottom: 0px;

    border: 1px solid white;
    background-color: rgba(1,1,1,0.6);
    color: white;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    z-index: 10;
    cursor: pointer;
`
export const ReviewCard = styled.div`
    display: flex;
    margin-bottom: 6px;
    padding-bottom: 6px;
    border-bottom: 2px solid lightgray;
`
export const IconImageContainer = styled.div`
    max-width: 52px;
    flex-shrink: 0;
    height: 72px;
    border: 1px solid black;
    padding: 2px;
`
export const ShowcaseItem = styled.div`
    display: flex;
    flex-direction: column;
`
export const ShowcaseTitleContainer = styled.div`
    text-align: left;
    display: inline-block;
`
export const ShowcaseImageContainer = styled.div`
    &{
    max-width: 162px;
    height: 222px;
    flex-shrink: 0;
    aspect-ratio: 9 / 12;
    padding: 2px;
    overflow: hidden;
    }
    & > *:hover {
        filter: brightness(1.10);
        z-index: -1;
    }
`
export const Image = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
`
export const ReviewUnitRight = styled.div`
    margin-left: 8px;
`
export const Title = styled.h3`
    font-size: 0.9em;
`
export const LogoText = styled.h2`
    font-size: 1rem;
`
export const Information = styled.p`
    color: #828282;
`
export const Nav = styled.nav`
    & {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 4em;
        background-color: #4d4d4d;
        color: white;
    }
    & a {
        color: white;
    }
`
export const NavLinks = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: min(400px, 800px)
`
export const SearchContainer = styled.section`
    margin-bottom: 4em;
    height: 18vh;
    // background-image: url("../images/landing.jpg");
    background-image: url(${landingImage});

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`
export const GridContainerVertical = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(162px, 1fr));
    grid-column-gap: 0.4rem;
    grid-row-gap: 1rem;
`
export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
