
import React from 'react';
import AdmissionProcess from '../components/Admissions/AdmissionProcess';
import AdmissionForms from '../components/Admissions/AdmissionForms';
import ImportantDates from '../components/Admissions/ImportantDates';

const AdmissionsPage = () => (
  <div className="px-4 py-8">
    <ImportantDates />
    <div className="flex justify-center flex-row gap-8 mt-8">
      <div className="flex-1 min-w-[300px] max-w-xs">
        <AdmissionProcess />
      </div>
      <div className="flex-1 min-w-[300px] max-w-xs">
        <AdmissionForms />
      </div>
    </div>
  </div>
);

export default AdmissionsPage;
