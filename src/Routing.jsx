import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterviewSchedule from "./pages/interviewfeadback/interviewfeadback";
import { Applicantprofile } from "./pages/applicantprofile/applicantprofile";
import { Applicantprofileapplication } from "./pages/applicantprofileapplications/applicantprofileapplication";
import { Admitcard } from "./pages/admitcard/admitcard";
import { Dashboardadmin } from "./pages/dashboardadmin/dashboardadmin";
import Myapplication from "./pages/myapplication/myapplication";
import { Headeradmin } from "./components/headeradmin/headeradmin";
import Selectionpage from "./pages/selectionletter/selection";
import SelectionProfile from "./pages/selectionprofile/selectionprofile";
import { Selectionletterhead } from "./pages/letters/selectionletterhead/selectionletterhead";
import Subadmin from "./pages/subadmin/subadmin";
import Enquires from "./pages/Enquires/enquires";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Headeradmin />
        <Routes>
          <Route path="/" element={<Dashboardadmin />} />
          <Route path="/dashboardadmin" element={<Dashboardadmin />}>
            <Route path="myapplication" element={<Myapplication />} />
            <Route path="admitcard" element={<Admitcard />} />
            <Route path="interviewSchedule" element={<InterviewSchedule />} />
            <Route path="applicantprofileapplication" element={<Applicantprofileapplication />} />
            <Route path="applicantprofile" element={<Applicantprofile />} />
            <Route path="selectionletter" element={<Selectionpage />} />
            <Route path="selectionletter/:id" element={<SelectionProfile/>} />
            <Route path="selectionletter/:id/letter" element={<Selectionletterhead/>} />
            <Route path="enquires" element={<Enquires/>} />
            <Route path="subadmin" element={<Subadmin/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
