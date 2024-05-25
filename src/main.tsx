import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Calendar } from "./page/Calendar/Calendar";
import { Stock } from "./page/Stock/Stock";
import { StockNominal } from "./page/Stock/Nominal/Nominal";
import { Fbs } from "./page/FBS/Fbs";
import { CallCenter } from "./page/CallCenter/CallCenter";
import { Clients } from "./page/Clients/Clients";
import { CreateClient } from "./page/Clients/CreateClient/CreateClient";
import { MessageHistory } from "./page/Clients/MessageHistory/MessageHistory";
import { Documents } from "./page/Documents/Documents";
import { Employees } from "./page/Employees/Employees";
import { CRM } from "./page/CRM/CRM";
import { DBS } from "./page/DBS/DBS";
import { Subscription } from "./page/Subscription/Subscription";
import { Notifications } from "./page/Notifications/Notifications";
import { Home } from "./page/Home/Home";
import { Profile } from "./page/Profile/Profile";
import { Settings } from "./page/Settings/Settings";
import App from "./app/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "stock",
        element: <Stock />,
      },
      {
        path: "stock/nominal",
        element: <StockNominal />,
      },
      {
        path: "fbs",
        element: <Fbs />,
      },
      {
        path: "call-center",
        element: <CallCenter />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "clients/create",
        element: <CreateClient />,
      },
      {
        path: "clients/message-history",
        element: <MessageHistory />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "crm",
        element: <CRM />,
      },
      {
        path: "dbs",
        element: <DBS />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
