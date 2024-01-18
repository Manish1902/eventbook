import React from 'react'
import { DataContext } from './dataContext'


function dataStore(children){


return(
    <DataContext.Provider>
        {children}
  </DataContext.Provider>

)  
}

export default dataStore