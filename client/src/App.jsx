import { Route, Routes } from "react-router-dom";
import {Home, About} from './pages/index'
import {Vans, VanDetail} from './pages/Vans/index'
import {Layout, HostLayout} from './components/index'
import {Dashboard, HostVanDetail, HostVanInfo, HostVanPhotos, HostVanPricing, HostVans, Income, Reviews} from './pages/Host/index'
import "./server";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
