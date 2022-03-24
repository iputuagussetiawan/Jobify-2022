import React from 'react'
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';

const landing = () => {
  return (
    <Wrapper>
        <nav>
            <img src={logo} alt="jobify" className='logo'></img>
        </nav>
        <div className="container page">
            <div className='info'>
                <h1>Job <span>Tracking</span> App</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="btn btn-hero">Login / Register</button>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
    nav{
        display: flex;
        align-items: center;
        width: var(--fluid-width);
        max-width: var(--max-width);
        height: var(--nav-height);
        margin: 0 auto;
    }

    .page{
        display: grid;
        align-items: center;
        min-height: calc(100vh - var(--nav-height));
    }

    h1{
        font-weight: 700;
        span{
            color: var(--primary-500);
        }
    }
    p{
        color: var(--grey-600);
    }
    .main-img{
        display: none;
    }

    @media only screen and (min-width: 992px) {
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
            display: block;
        }
    }
`

export default landing