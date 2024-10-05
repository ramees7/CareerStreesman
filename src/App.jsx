import { HelmetProvider } from "react-helmet-async";
import LayoutRoutes from "./layout/LayoutRoutes";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <LayoutRoutes />
      </HelmetProvider>
    </>
  );
}
