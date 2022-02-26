import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntakeForm from "../IntakeForm/IntakeForm";
import "./root.scss";
import NotFound from "./NotFound";
import SuccessPage from "../IntakeForm/SuccessPage";

export const MainLayout: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntakeForm />} />
        <Route path="/submitted" element={<SuccessPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
