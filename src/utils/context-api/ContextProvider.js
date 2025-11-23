import React, {useState} from 'react';
import {allTexts} from '../../common';
import ApplicationContext from './Context';

const ContextProvider = ({children}) => {
  const [frequentCategoryList, setFrequentCategoryList] = useState([]);

  return (
    <ApplicationContext.Provider
      value={{
        frequentCategoryList,
        setFrequentCategoryList,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ContextProvider;
