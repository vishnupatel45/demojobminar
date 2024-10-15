import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterviewSchedule from "./pages/interviewfeadback/interviewfeadback";
import { Applicantprofile } from "./pages/applicantprofile/applicantprofile";
import { Applicantprofileapplication } from "./pages/applicantprofileapplications/applicantprofileapplication";
import { Admitcard } from "./pages/admitcard/admitcard";
import { Dashboardadmin } from "./pages/dashboardadmin/dashboardadmin";
import Myapplication from "./pages/myapplication/myapplication";
import { Headeradmin } from "./components/headeradmin/headeradmin";
import { Applicantfinance } from "./pages/Financials/financials";
import Admitcarddashboard from "./pages/admitcard/admitcarddashboard";
import { Confirmationdashboard } from "./pages/confirmation/confirmationdashboard";
import { Confirmationprofile } from "./pages/confirmation/confirmationprofile";
import { Confirmationletterhead } from "./pages/confirmation/confirmationletter";
import { Admitcardletterhead } from "./pages/admitcard/admitcardletter";
import Addsubadmin from "./pages/subabmin/addsubadmin/addsubadmin";
import FileDisplay from "./pages/subabmin/addinsubadmin3/addsubadminn3";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Headeradmin />
        <Routes>
          <Route path="/" element={<Dashboardadmin />} />
          {/* <Route path='admitcarddashboard' element={<Admitcarddashboard/>} /> */}
          <Route path="/dashboardadmin" element={<Dashboardadmin />}>
            <Route path="myapplication" element={<Myapplication />} />
            <Route path="applicantprofile/:applicationNo" element={<Applicantprofile />} />
            <Route path="applicantprofileapplication" element={<Applicantprofileapplication />} />
            <Route path="applicantfinance" element={<Applicantfinance />} />
            <Route path="admitcarddashboard" element={<Admitcarddashboard />} />
            <Route path="admitcard/:applicationNo" element={<Admitcard/>} />
            <Route path="admitcardletter/:applicationNo" element={<Admitcardletterhead/> }/>
            <Route path="interviewSchedule" element={<InterviewSchedule />} />
            <Route path="applicantprofile" element={<Applicantprofile />} />
            <Route path='confirmationdashboard' element={<Confirmationdashboard />} />
            <Route path='confirmationprofile/:applicationNo' element={<Confirmationprofile />} />
            <Route path='confirmationletter/:applicationNo' element={<Confirmationletterhead/>} />
            <Route path='addsubadmin' element={<Addsubadmin />} />
          </Route>
          <Route path="fileDisplay" element={<FileDisplay/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
