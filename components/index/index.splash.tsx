import Link from 'next/link';
import styled from 'styled-components';
import { AiFillMail } from 'react-icons/ai';
import { SiDiscord, SiTwitter } from 'react-icons/si';

export const IndexSplashStyles = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/image/splash.jpg');
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 96px;
    }

    h1, h2 {
        text-align: center;
    }

    img.logo {
        position: absolute;
        left: 30px;
        top: 30px;
    }

    div.social {
        position: absolute;
        right: 30px;
        top: 30px;

        display: flex;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 15px;

            color: white;
            text-decoration: none;
            font-size: 42px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.25);
            border-radius: 50%;

            &:hover { background: rgba(255, 255, 255, 0.5); }
        }
    }

    @media (max-width: 640px) {
        padding: 15px;

        h1 {
            font-size: 42px;
        }

        img.logo {
            height: 64px;
        }

        div.social {
            a {
                font-size: 24px;
                padding: 15px;
                margin: 5px;
            }
        }
    }
`;

export function IndexSplash() {
    return(
        <IndexSplashStyles>
            <img src="/image/logo.png" className="logo"/>

            <div className="social">
                <a href="team@etna.finance" target="mail">
                    <AiFillMail/>
                </a>
                <a href="https://discord.gg/9QxE8cXy" target="discord">
                    <SiDiscord/>
                </a>
                <a href="https://twitter.com/EtnaDAO" target="twitter">
                    <SiTwitter/>
                </a>
            </div>

            <h1>ETNA DAO</h1>
            <h2>The first decentralized reserve currency protocol available on the Aurora Network</h2>
        </IndexSplashStyles>
    )
}