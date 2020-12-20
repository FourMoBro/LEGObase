import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from '../src/layouts/DashboardLayout';
//import DashboardView from '../src/views/reports/DashboardView';
//import ElementListView from '../src/views/elements/ElementListView';
//import InventoryListView from '../src/views/inventories/InventoryListView';
//import PartListView from '../src/views/parts/PartListView';
//import SetListView from '../src/views/sets/SetListView';
//import ThemeListView from '../src/views/themes/ThemeListView';

import MainLayout from '../src/layouts/MainLayout';
import LoginView from '../src/views/auth/LoginView';
import LogoutView from '../src/views/auth/LogoutView';
import RegisterView from '../src/views/auth/RegisterView';
import NotFoundView from '../src/views/errors/NotFoundView';




const routes = [
    // {
    //   path: 'app',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: 'dashboard', element: <DashboardView /> },
    //     { path: 'elements', element: <ElementListView /> },
    //     { path: 'inventories', element: <InventoryListView /> },
    //     { path: 'parts', element: <PartListView /> },        
    //     { path: 'sets', element: <SetListView /> },        
    //     { path: 'themes', element: <ThemeListView /> },
    //     { path: '*', element: <Navigate to="/404" /> }
    //   ]
    // },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: 'login', element: <LoginView /> },
        { path: 'logout', element: <LogoutView /> },
        { path: 'register', element: <RegisterView /> },
        { path: '404', element: <NotFoundView /> },
        { path: '/', element: <Navigate to="/app/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];
  
  export default routes;