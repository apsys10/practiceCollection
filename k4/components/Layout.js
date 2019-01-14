import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
//import myImage from '../public/bg.jpg';

const Wrapper = styled.div`
  padding: 4em;
  background-image: url("/static/bg1.jpg");
  height: 100%; 
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;

`;
//width: 100%;
//background: papayawhip;
//background-image: url(${myImage});
export default props => {
  return (
    <Wrapper>
          <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
          />

          
        </Head>
        <div>
          <Header />
          {props.children}
          
        </div>

        
        </Container>
    </Wrapper>
    
  );
};
