import React, { useCallback } from 'react';
import { Routes, Route } from "react-router-dom";
import routers from 'router/router';

import IconPhone from 'components/iconPhone';
import './App.css';

function App() {
  const defaultPhoneNumber = process.env.REACT_APP_ADMIN_PHONE_NUMBER;

  const renderRoutes = useCallback((routes) => {
    return routes.map((route, index) => {
      if (route.children && route.children.length > 0) {
        return (
          <Route path={route.path} element={route.element} key={index}>

            {renderRoutes(route.children)}

          </Route>
        );
      }

      if (route.isRoot) {
        return <Route index element={route.element} key={index} />
      }

      return <Route path={route.path} element={route.element} key={index} />;
    });
  }, []);

  return (

    <div className='App'>
      <IconPhone phoneNumber={defaultPhoneNumber} />
      <Routes>
        {/* {
          routers.map((r, idx) => {
            if (r.children && r.children.length > 0) {
              return (
                <Route path={r.path} element={r.element} key={idx}>
                  {
                    r.children.map((rc, idxc) => {
                      if (rc.isRoot) {
                        return <Route index element={rc.element} key={idxc} />
                      }

                      return <Route path={rc.path} element={rc.element} key={idxc} />
                    })
                  }
                </Route>
              )
            }

            return <Route path={r.path} element={r.element} key={idx} />
          })
        } */}
        {renderRoutes(routers)}
      </Routes>
    </div>
  );
}

export default App;
