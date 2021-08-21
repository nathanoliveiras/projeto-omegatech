import React from 'react';
import Header from '../../components/Header.js';
import Main from '../../components/Main';


function Template({children}) {
  return(
        <>
          <Header></Header>
          <Main>
            {children}
          </Main>
        </>

  );
}

export default Template;