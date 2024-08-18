import React ,{useReducer, useContext} from 'react';

import {WeatherReducer} from './Reducer';

const WeaterAPPContext = React.createContext();

const WeaterAPPProvider =({children}) => {
    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Delhi", 
            "lat": "28.6100", 
            "lng": "77.2300", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Delhi", 
            "capital": "admin", 
            "population": "32226000", 
            "population_proper": "16753235"

        },
        current:'',
        daily:''
    })

    return(
        <>
              <WeaterAPPContext.Provider value={{state, dispatch}}>
                  {children}
              </WeaterAPPContext.Provider>
        </>
    )
  
}
export default WeaterAPPProvider;

export const UseWeaterAPPContext = () => {
  return useContext(WeaterAPPContext);
}
 
