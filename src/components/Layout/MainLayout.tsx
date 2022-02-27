import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntakeForm from "../IntakeForm/IntakeForm";
import "./styles/root.scss";
import NotFound from "./NotFound";
// import SuccessMessage from "../IntakeForm/SuccessPage";

export const MainLayout: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntakeForm />} />
        {/* <Route path="/submitted" element={<SuccessMessage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
