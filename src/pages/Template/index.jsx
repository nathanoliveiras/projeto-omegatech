import React from 'react';
import Header from '../../components/Header.js';
import Main from '../../components/Main';


function Template({children, logged=false}) {
  return(
        <>
          <Header logged={logged}></Header>
          <Main>
            {children}
          </Main>
        </>

  );
}

export default Template;