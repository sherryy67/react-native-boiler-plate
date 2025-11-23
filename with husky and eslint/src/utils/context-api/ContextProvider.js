import React, {useState} from 'react';
import ApplicationContext from './Context';

function ContextProvider({children}) {
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
}

export default ContextProvider;
