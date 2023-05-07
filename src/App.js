import { Route, Routes } from "react-router-dom";
import Address from "./pages/address/Address";
import Cart from "./Components/cart/Cart";
import ChangeAvatar from "./pages/changeAvatar/ChangeAvatar";
import ChangePassword from "./pages/changePassword/ChangePassword";
import ChangeProfile from "./pages/changeProfile/ChangeProfile";
import CheckOut from "./pages/checkOut/CheckOut";
import Home from "./Components/home/Home";
import Login from "./pages/login/Login";
import OrderId from "./pages/order/orderId/OrderId";
import Orders from "./pages/order/orders/Orders";
import ProductDetails from "./pages/product/productDetails/ProductDetails";
// import Profile from "./pages/Profile";
import Register from "./pages/register/Register";
import { ProtectedRoute } from "../src/provider/protected-route";
import Header from "./Components/header/Header";
import NotFound from "./pages/notFound/NotFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/address"
          element={
            <ProtectedRoute>
              <Address />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/setting/changeProfile"
          element={
            <ProtectedRoute>
              <ChangeProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting/changePassword"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting/changeAvatar"
          element={
            <ProtectedRoute>
              <ChangeAvatar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders/:orderId"
          element={
            <ProtectedRoute>
              <OrderId />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
