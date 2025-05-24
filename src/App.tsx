import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  EnableLocation,
  Login,
  Signup,
  VerifySuccesful,
  Verify,
  Welcome,
  CancelOption,
  CancelPickup,
  Splash,
  EditProfile,
  ChangePassword,
  Faqs,
  HelpCenter,
  Home,
  Pickups,
  PrivacyPolicy,
  ProfileDetails,
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
} from "./components";

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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/verifySuccesful",
      element: <VerifySuccesful />,
    },
    {
      path: "/verify",
      element: <Verify />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
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
      path: "/edit-profile",
      element: <EditProfile />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
    {
      path: "/faqs",
      element: <Faqs />,
    },
    {
      path: "/help-center",
      element: <HelpCenter />,
    },

    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/pick-ups",
      element: <Pickups />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/profile-details",
      element: <ProfileDetails />,
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
      path: "/payment-methods",
      element: <PaymentMethods />,
    },
    {
      path: "/select-truck",
      element: <SelectTruck />,
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
      path: "/select-waste-type",
      element: <SelectWasteType />,
    },
    {
      path: "/add-address",
      element: <AddAddress />,
    },
    {
      path: "/booking-summary",
      element: <BookingSummary />,
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
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
