import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  EnableLocation,
  Login,
  Signup,
  VerifySuccesful,
  Verify,
  CancelOption,
  CancelPickup,
  Splash,
  Experience,
  ThankYou,
  PaymentMethods,
  SelectAddress,
  SelectTruck,
  ShowOnMap,
  SuccesfulPayment,
  SuccesfulUpload,
  UploadWaste,
  SelectWasteType,
  AddAddress,
  BookingSummary,
  DateAndTime,
  DriverComing,
  ErrorPage,
  ForgotPassword,
  PastPickups,
  Payment,
  PrivatePolicy,
  SchedulePickups,
  Support,
  Logout,
  LocationSuccesful,
  SuccesfulAddress,
  SettingLayout,
  Setting,
  Settingchangepassword,
  Settingnotification,
  GetUserLocation,
} from "./components";

import { Dashboard, DashboardLayout } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Splash />,
    },

    {
      path: "/enable-location",
      element: <EnableLocation />,
    },
    {
      path: "/get-user-location",
      element: <GetUserLocation />,
    },

    {
      path: "/location-succesful",
      element: <LocationSuccesful />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/verify-succesful",
      element: <VerifySuccesful />,
    },
    {
      path: "/verify",
      element: <Verify />,
    },

    {
      path: "/cancel-option",
      element: <CancelOption />,
    },
    {
      path: "/cancel-pickup",
      element: <CancelPickup />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },

    {
      path: "/thank-you",
      element: <ThankYou />,
    },

    {
      path: "/select-address",
      element: <SelectAddress />,
    },
    {
      path: "/show-on-map",
      element: <ShowOnMap />,
    },
    {
      path: "/succesful-payment",
      element: <SuccesfulPayment />,
    },
    {
      path: "/succesful-upload",
      element: <SuccesfulUpload />,
    },
    {
      path: "/upload-waste",
      element: <UploadWaste />,
    },

    {
      path: "/date-and-time",
      element: <DateAndTime />,
    },
    {
      path: "/driver-coming",
      element: <DriverComing />,
    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/past-pickups",
          element: <PastPickups />,
        },
        {
          path: "/dashboard/payment",
          element: <Payment />,
        },
        {
          path: "/dashboard/private-policy",
          element: <PrivatePolicy />,
        },
        {
          path: "/dashboard/schedule-pickups",
          element: <SchedulePickups />,
        },
        {
          path: "/dashboard/add-address",
          element: <AddAddress />,
        },
        {
          path: "/dashboard/succesful-address",
          element: <SuccesfulAddress />,
        },

        {
          path: "/dashboard/select-waste-type",
          element: <SelectWasteType />,
        },
        {
          path: "/dashboard/select-truck",
          element: <SelectTruck />,
        },
        {
          path: "/dashboard/booking-summary",
          element: <BookingSummary />,
        },
        {
          path: "/dashboard/payment-methods",
          element: <PaymentMethods />,
        },
        {
          path: "/dashboard/succesful-payment",
          element: <SuccesfulPayment />,
        },
        {
          path: "/dashboard/succesful-upload",
          element: <SuccesfulUpload />,
        },

        {
          path: "/dashboard/setting",
          element: <SettingLayout />,
          children: [
            {
              index: true,
              element: <Setting />,
            },
            {
              path: "/dashboard/setting/change-password",
              element: <Settingchangepassword />,
            },
            {
              path: "/dashboard/setting/notification",
              element: <Settingnotification />,
            },
          ],
        },

        {
          path: "/dashboard/Support",
          element: <Support />,
        },
        {
          path: "/dashboard/logout",
          element: <Logout />,
        },
      ],
    },

    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
