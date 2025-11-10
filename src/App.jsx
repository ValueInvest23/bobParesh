// import React, { useState } from 'react';

// export default function GoldAppraisalMemo() {
//   const [formData, setFormData] = useState({
//     branch: '',
//     date: '',
//     paketNo: '',
//     name: '',
//     address: '',
//     goldLoanAcNo: '',
//     sevingAcNo: '',
//     mobileNo: '',
//     ornaments: Array(10).fill(null).map(() => ({
//       description: '',
//       noOfOrnaments: '',
//       grossWeight: '',
//       estimatedWeight: '',
//       netWeight: '',
//       purity: '',
//       marketRate: '',
//       appraisedValue: ''
//     })),
//     bankRetPar18: '',
//     bankRetPar20: '',
//     bankRetPar22: '',
//     loanAmount: '',
//     marketValuePercent: '',
//     marketValueAmount: '',
//     seventyFivePercent: '',
//     advancedValue: ''
//   });

//   return (
//     <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4">
//       <div className="w-[210mm] min-h-[297mm] bg-white shadow-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
//         {/* Header Section */}
//         <div className="border-2 border-black m-4">
//           {/* Top Header Row */}
//           <div className="flex items-center justify-center border-b border-black" style={{ minHeight: '100px' }}>
//             {/* Left Section - Branch and Date */}
//             <div className="w-[25%] p-2">
//               <div className="font-bold mb-3" style={{ fontSize: '13px' }}>Branch_______________</div>
//               <div className="font-bold flex items-center" style={{ fontSize: '13px' }}>
//                 <span>Date :</span>
//                 <span className="inline-block w-8 text-center mx-1">___</span>
//                 <span>/</span>
//                 <span className="inline-block w-8 text-center mx-1">___</span>
//                 <span>/ 20</span>
//                 <span className="inline-block w-6 text-center ml-1">__</span>
//               </div>
//             </div>

//             {/* Center Section - Logo and Title */}
//             <div className="w-[50%] flex flex-col items-center justify-center px-4 pt-2">
//               <img
//                 src="./BOB.png"
//                 alt="Bank of Baroda"
//                 className="h-[100px] w-[800px] mb-[5px]"
//               />
//               <h1 className="font-bold text-center" style={{ fontSize: '18px' }}>Gold Appraisal Memo</h1>
//             </div>

//             {/* Right Section - Paket No Box */}
//             <div className="w-[25%] flex justify-end items-start p-2">
//               <div className="border border-black" style={{ width: '140px', height: '130px', display: 'flex', alignItems: 'start', justifyContent: 'center' }}>
//                 <span className="font-bold" style={{ fontSize: '13px' }}>Paket No :</span>
//               </div>
//             </div>
//           </div>

//           {/* Customer Details */}
//           <div className="p-2">
//             <div className="flex items-center border-b border-black py-1">
//               <span className="font-bold" style={{ fontSize: '13px' }}>Name:</span>
//             </div>
//             <div className="flex items-center border-b border-black py-1">
//               <span className="font-bold" style={{ fontSize: '13px' }}>Address:</span>
//             </div>
//             <div className="flex items-center border-b border-black py-1">
//               <span className="font-bold" style={{ fontSize: '13px' }}>Gold Loan-A/C-No:</span>
//             </div>
//             <div className="flex items-center border-b border-black py-1">
//               <span className="font-bold" style={{ fontSize: '13px' }}>Seving-A/C-No:</span>
//             </div>
//             <div className="flex items-center border-b border-black py-1">
//               <span className="font-bold" style={{ fontSize: '13px' }}>Mobile-No:</span>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse" style={{ fontSize: '10px' }}>
//               <thead>
//                 <tr className="border-t border-black">
//                   <th className="border border-black p-1 align-top" style={{ width: '40px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>1</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '11px' }}>SR</div>
//                     <div className="font-bold" style={{ fontSize: '11px' }}>No</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '120px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>2</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '18px' }}>Description</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>of</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>Ornaments</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '50px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>3</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '13px' }}>No.of</div>
//                     <div className="font-bold" style={{ fontSize: '13px' }}>Orna</div>
//                     <div className="font-bold" style={{ fontSize: '13px' }}>ments</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '70px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>4</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '18px' }}>Gross</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>Weight</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>( GSM )</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '80px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>5</div>
//                     <div className="mt-1" style={{ fontSize: '10px', lineHeight: '1.3' }}>
//                       <div className="font-bold">Estimated weight</div>
//                       <div className="font-bold">of</div>
//                       <div className="font-bold">jewels, studded</div>
//                       <div className="font-bold">stones</div>
//                       <div className="font-bold">fitted in the</div>
//                       <div className="font-bold">ornament</div>
//                     </div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '70px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>6</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '18px' }}>Net</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>Weight</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>( GSM )</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '60px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>7</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '14px' }}>Pyority</div>
//                     <div className="font-bold" style={{ fontSize: '14px' }}>of</div>
//                     <div className="font-bold" style={{ fontSize: '14px' }}>Gold</div>
//                     <div className="font-bold" style={{ fontSize: '14px' }}>(Carat)</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '70px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>8</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '18px' }}>Market</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>rate</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>per</div>
//                     <div className="font-bold" style={{ fontSize: '18px' }}>Gram</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '80px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>9</div>
//                     <div className="font-bold mt-1" style={{ fontSize: '14px' }}>Appraised</div>
//                     <div className="font-bold" style={{ fontSize: '14px' }}>value of</div>
//                     <div className="font-bold" style={{ fontSize: '14px' }}>Ornament</div>
//                     <div className="font-bold" style={{ fontSize: '14px' }}>as</div>
//                     <div className="font-bold" style={{ fontSize: '14px' }}>par Valuer</div>
//                   </th>
//                   <th className="border border-black p-1 align-top" style={{ width: '60px' }}>
//                     <div className="font-bold mb-2" style={{ fontSize: '18px' }}>10</div>
//                     <div className="font-bold mt-1 " style={{ fontSize: '11px' }}>Remarks</div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                   <tr key={num} style={{ height: '35px' }}>
//                     <td className="border border-black text-center font-bold" style={{ fontSize: '12px' }}>{num}</td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                     <td className="border border-black"></td>
//                   </tr>
//                 ))}
//                 <tr style={{ height: '35px' }}>
//                   <td colSpan="2" className="border border-black text-center font-bold" style={{ fontSize: '13px' }}>Total :</td>
//                   <td className="border border-black"></td>
//                   <td className="border border-black"></td>
//                   <td className="border border-black"></td>
//                   <td className="border border-black"></td>
//                   <td className="border border-black"></td>
//                   <td className="border border-black"></td>
//                   <td className="border border-black"></td>
//                   <td className="border border-black"></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="flex border-t border-black">
//             <div className="border-r border-black p-2 flex items-center">
//               <span className="font-bold" style={{ fontSize: '13px' }}>Bank Ret- Par caret</span>
//               <span className="inline-block border-b border-black mx-2" style={{ width: '50px', fontSize: '13px' }}>18-</span>
//               <span className="inline-block border-b border-black mx-2" style={{ width: '50px', fontSize: '13px' }}>20-</span>
//               <span className="inline-block border-b border-black mx-2" style={{ width: '50px', fontSize: '13px' }}>22-</span>
//             </div>
//             <div className="flex-1 p-2 font-bold flex items-center" style={{ fontSize: '13px' }}>
//               <span>Loan Amount : ₹ _______________</span>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="p-3 space-y-2 border-t border-black">
//             <div className="flex items-center" style={{ fontSize: '13px' }}>
//               <span className="font-bold">Market Value for above Gold @______% is ₹ _______________</span>
//             </div>
//             <div className="flex items-center" style={{ fontSize: '13px' }}>
//               <span className="font-bold">75% of Market value is. ₹ _______________</span>
//             </div>
//             <div className="flex items-center" style={{ fontSize: '13px' }}>
//               <span className="font-bold">Advanced value as per banks Norma ₹ _______________</span>
//             </div>

//             {/* Signatures */}
//             <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-6">
//               <div>
//                 <span className="font-bold" style={{ fontSize: '12px' }}>(1) Sign of Manager</span>
//                 <div className="border-b border-black mt-6 w-48"></div>
//               </div>
//               <div>
//                 <span className="font-bold" style={{ fontSize: '12px' }}>(2) Sign of Assayor</span>
//                 <div className="border-b border-black mt-6 w-48"></div>
//               </div>
//               <div>
//                 <span className="font-bold" style={{ fontSize: '12px' }}>(3) Sign of Officer</span>
//                 <div className="border-b border-black mt-6 w-48"></div>
//               </div>
//               <div>
//                 <span className="font-bold" style={{ fontSize: '12px' }}>(4) Sign of Customer</span>
//                 <div className="border-b border-black mt-6 w-48"></div>
//               </div>
//             </div>

//             {/* Valuation Certificate */}
//             <div className="mt-6 space-y-2">
//               <h3 className="text-center font-bold" style={{ fontSize: '14px' }}>Valuation Certificate</h3>
//               <p className="leading-relaxed" style={{ fontSize: '11px' }}>
//                 I hereby certify that I have tested/appraised the above & the gross weight of the article, net weight of Gold, Carat
//                 purity of fineness, rate per gram & market value shown against the ornaments mentioned is Rs. _______________
//                 the best of my knowledge correct & in order.
//               </p>
//               <p className="font-bold" style={{ fontSize: '11px' }}>I hereby declare that</p>
//               <p style={{ fontSize: '11px' }}>a)The information furnished above is true & correct to the best of my knowledge and belief.</p>
//               <p style={{ fontSize: '11px' }}>b)I have no director indirect interest in the jewellery valued.</p>
//               <div className="flex justify-between items-end mt-2">
//                 <p style={{ fontSize: '11px' }}>c) I have personally inspected the jewellery.</p>
//                 <div>
//                   <span className="font-bold" style={{ fontSize: '12px' }}>(5) Sign of Assayor</span>
//                   <div className="border-b border-black w-48 mt-4"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from 'react';
import { Download, Plus, Trash2 } from 'lucide-react';
import InstallPWAButton from './InstallPWAButton';

export default function GoldAppraisalForm() {
  const [formData, setFormData] = useState({
    branch: '',
    date: '',
    paketNo: '',
    name: '',
    address: '',
    goldLoanAcNo: '',
    sevingAcNo: '',
    mobileNo: '',
    bankRetPar18: '',
    bankRetPar20: '',
    bankRetPar22: '',
    loanAmount: '',
    marketValuePercent: '',
    marketValueAmount: '',
    seventyFivePercent: '',
    advancedValue: '',
    certificateAmount: ''
  });

  const [rows, setRows] = useState([
    { id: 1, description: '', noOfOrnaments: '', grossWeight: '', estimatedWeight: '', netWeight: '', purity: '18', marketRate: '', appraisedValue: '', remarks: '' }
  ]);

  const printRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRowChange = (id, field, value) => {
    setRows(prev => prev.map(row => {
      if (row.id === id) {
        const updatedRow = { ...row, [field]: value };

        // Calculate Net Weight: Gross Weight - Estimated Weight
        if (field === 'grossWeight' || field === 'estimatedWeight') {
          const grossWeight = parseFloat(field === 'grossWeight' ? value : updatedRow.grossWeight) || 0;
          const estimatedWeight = parseFloat(field === 'estimatedWeight' ? value : updatedRow.estimatedWeight) || 0;
          updatedRow.netWeight = (grossWeight - estimatedWeight).toFixed(2);
        }

        // Calculate Appraised Value: Net Weight * Market Rate (unchanged)
        if (field === 'netWeight' || field === 'marketRate' || field === 'grossWeight' || field === 'estimatedWeight') {
          const netWeight = parseFloat(updatedRow.netWeight) || 0;
          const marketRate = parseFloat(updatedRow.marketRate) || 0;
          updatedRow.appraisedValue = (netWeight * marketRate).toFixed(2);
        }

        return updatedRow;
      }
      return row;
    }));
  };

  const addRow = () => {
    const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
    setRows(prev => [...prev, {
      id: newId,
      description: '',
      noOfOrnaments: '',
      grossWeight: '',
      estimatedWeight: '',
      netWeight: '',
      purity: '18', // default 18 for new rows
      marketRate: '',
      appraisedValue: '',
      remarks: ''
    }]);
  };

  const deleteRow = (id) => {
    if (rows.length > 1) {
      setRows(prev => prev.filter(row => row.id !== id));
    }
  };

  const calculateTotals = () => {
    const totals = {
      noOfOrnaments: 0,
      grossWeight: 0,
      estimatedWeight: 0,
      netWeight: 0,
      appraisedValue: 0,
      bankAppraisedTotal: 0 // <-- new bank-based total (flat on totals)
    };

    // parse bank rates once
    const bankRate18 = parseFloat(formData.bankRetPar18) || 0;
    const bankRate20 = parseFloat(formData.bankRetPar20) || 0;
    const bankRate22 = parseFloat(formData.bankRetPar22) || 0;

    let bankSum = 0;

    rows.forEach(row => {
      totals.noOfOrnaments += parseFloat(row.noOfOrnaments) || 0;
      totals.grossWeight += parseFloat(row.grossWeight) || 0;
      totals.estimatedWeight += parseFloat(row.estimatedWeight) || 0;
      totals.netWeight += parseFloat(row.netWeight) || 0;
      totals.appraisedValue += parseFloat(row.appraisedValue) || 0;

      // compute bank-based appraisal per row using purity -> netWeight * bankRate
      const netW = parseFloat(row.netWeight) || 0;
      let bankRateForRow = 0;
      if ((row.purity || '18').toString() === '18') bankRateForRow = bankRate18;
      else if ((row.purity || '18').toString() === '20') bankRateForRow = bankRate20;
      else if ((row.purity || '18').toString() === '22') bankRateForRow = bankRate22;
      // bank calc value for this row
      const bankCalcValue = netW * bankRateForRow;
      bankSum += bankCalcValue;
    });

    // keep totals.appraisedValue numeric with 2 decimals
    totals.noOfOrnaments = +totals.noOfOrnaments;
    totals.grossWeight = +totals.grossWeight.toFixed(2);
    totals.estimatedWeight = +totals.estimatedWeight.toFixed(2);
    totals.netWeight = +totals.netWeight.toFixed(2);
    totals.appraisedValue = +totals.appraisedValue.toFixed(2);

    // set bankAppraisedTotal fixed to 2 decimals
    totals.bankAppraisedTotal = +bankSum.toFixed(2);

    return totals;
  };

  const downloadPDF = () => {

    window.print();
  };

  const totals = calculateTotals();


  return (
    <>
      <style>{`
  
@media print {
  body * {
    visibility: hidden;
  }
  #printable-content, #printable-content * {
    visibility: visible;
  }
  #printable-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh; /* Add this */
    overflow: hidden !important; /* Add this */
  }
  @page {
    size: A4;
    margin: 0;
  }
  
  /* Add these new rules */
  html, body {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
  
  body {
    position: relative;
  }
}
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Form Section */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white shadow-lg mb-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Gold Appraisal Memo Form</h2>
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              Download PDF
            </button>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter branch name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Paket No</label>
              <input
                type="text"
                name="paketNo"
                value={formData.paketNo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter paket number"
              />
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter customer name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter customer address"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gold Loan A/C No</label>
                <input
                  type="text"
                  name="goldLoanAcNo"
                  value={formData.goldLoanAcNo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Account number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Saving A/C No</label>
                <input
                  type="text"
                  name="sevingAcNo"
                  value={formData.sevingAcNo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Account number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No</label>
                <input
                  type="text"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Mobile number"
                />
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Ornament Details</h3>
              <button
                onClick={addRow}
                className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto justify-center"
              >
                <Plus size={16} />
                Add Row
              </button>
            </div>

            <div className="overflow-x-auto border border-gray-300 rounded-lg">
              <table className="w-full text-sm min-w-[800px]">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">SR No</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Description</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">No. of Ornaments</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Gross Weight</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Est. Weight</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Net Weight (Auto)</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Purity</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Market Rate</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Appraised Value (Auto)</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Remarks</th>
                    <th className="border border-gray-300 px-2 py-2 text-xs font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold">{index + 1}</td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.description}
                          onChange={(e) => handleRowChange(row.id, 'description', e.target.value)}
                          className="w-full px-2 py-1 text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                          placeholder="Description"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="number"
                          value={row.noOfOrnaments}
                          onChange={(e) => handleRowChange(row.id, 'noOfOrnaments', e.target.value)}
                          className="w-full px-2 py-1 text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                          placeholder="0"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="number"
                          step="0.01"
                          value={row.grossWeight}
                          onChange={(e) => handleRowChange(row.id, 'grossWeight', e.target.value)}
                          className="w-full px-2 py-1 text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="number"
                          step="0.01"
                          value={row.estimatedWeight}
                          onChange={(e) => handleRowChange(row.id, 'estimatedWeight', e.target.value)}
                          className="w-full px-2 py-1 text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="number"
                          step="0.01"
                          value={row.netWeight}
                          readOnly
                          className="w-full px-2 py-1 text-sm bg-gray-100 border-none focus:outline-none rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <select
                          value={row.purity || "18"}
                          onChange={(e) => handleRowChange(row.id, 'purity', e.target.value)}
                          className="w-full px-2 py-1 text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded bg-white min-w-[90px]"
                        >

                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="number"
                          step="0.01"
                          value={row.marketRate}
                          onChange={(e) => handleRowChange(row.id, 'marketRate', e.target.value)}
                          className="w-full px-2 py-1 text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="number"
                          step="0.01"
                          value={row.appraisedValue}
                          readOnly
                          className="w-full px-2 py-1 text-sm bg-gray-100 border-none focus:outline-none rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        <input
                          type="text"
                          value={row.remarks}
                          onChange={(e) => handleRowChange(row.id, 'remarks', e.target.value)}
                          className="w-full px-2 py-1 text-sm border-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                          placeholder="Remarks"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        <button
                          onClick={() => deleteRow(row.id)}
                          disabled={rows.length === 1}
                          className={`p-1 rounded transition ${rows.length === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-red-600 hover:text-red-800 hover:bg-red-50'
                            }`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Ret Par 18</label>
              <input
                type="text"
                name="bankRetPar18"
                value={formData.bankRetPar18}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Rate for 18 carat"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Ret Par 20</label>
              <input
                type="text"
                name="bankRetPar20"
                value={formData.bankRetPar20}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Rate for 20 carat"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Ret Par 22</label>
              <input
                type="text"
                name="bankRetPar22"
                value={formData.bankRetPar22}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Rate for 22 carat"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹)</label>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter loan amount"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Market Value Percent (%)</label>
              <input
                type="number"
                name="marketValuePercent"
                value={formData.marketValuePercent}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter percentage"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Amount (₹)</label>
            <input
              type="number"
              name="certificateAmount"
              value={formData.certificateAmount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter certificate amount"
            />
          </div>
        </div>
      </div>

      {/* Printable Content */}
      <div id="printable-content">
        <PrintableForm formData={formData} rows={rows} totals={totals} />
      </div>

      <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white mt-8 py-3 px-4 shadow-inner w-full">
        {/* Mobile View */}
        <div className="flex flex-col items-center text-center sm:hidden">
          <h2 className="text-lg font-bold tracking-wide hover:text-gray-300 transition-colors duration-300">
            Value Web
          </h2>
          <div className="flex justify-center items-center gap-4 mt-1">
            <a
              href="tel:7203977628"
              className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
            >
              Yash Mo: <span className="font-semibold">7203977628</span>
            </a>
            <a
              href="tel:9265637794"
              className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
            >
              Prit Mo: <span className="font-semibold">9265637794</span>
            </a>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex flex-row justify-between items-center text-center text-sm sm:text-base">
          <a
            href="tel:7203977628"
            className="font-medium hover:text-gray-300 transition-colors duration-300"
          >
            Yash Mo: <span className="font-semibold">7203977628</span>
          </a>

          <h2 className="text-lg sm:text-xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-300">
            VlueWeb
          </h2>

          <a
            href="tel:9265637794"
            className="font-medium hover:text-gray-300 transition-colors duration-300"
          >
            Prit Mo: <span className="font-semibold">9265637794</span>
          </a>
        </div>

        <div className="mt-2 text-center text-xs text-gray-400 w-full">
          © {new Date().getFullYear()} VlueWeb. All rights reserved.
        </div>
      </footer>
      <InstallPWAButton position='left'/>
    </>
  );
}


function PrintableForm({ formData, rows, totals }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return { day: '', month: '', year: '' };
    const date = new Date(dateStr);
    return {
      day: String(date.getDate()).padStart(2, '0'),
      month: String(date.getMonth() + 1).padStart(2, '0'),
      year: String(date.getFullYear()).slice(-2)
    };
  };

  const dateObj = formatDate(formData.date);

  return (
    <div className="overflow-x-auto w-full">
      <div style={{ width: '730px', minHeight: '1000px' }} className="pdf-container bg-white mx-auto">
        <div className="border-2 border-black" style={{ margin: '1mm', height: '295mm', display: 'flex', flexDirection: 'column' }}>
          {/* Top Header Row */}
          <div className="flex items-center justify-center border-b border-black" style={{ minHeight: '90px', flexShrink: 0 }}>
            {/* Left Section */}
            <div className="w-[25%] p-2">
              <div className="font-bold mb-3" style={{ fontSize: '13px' }}>
                Branch: {formData.branch || '_______________'}
              </div>
              <div className="font-bold flex flex-row justify-center items-center" style={{ fontSize: '10px' }}>
                <span>Date :</span>
                <span className="inline-block w-8 text-center mx-1">{dateObj.day || '___'}</span>
                <span>/</span>
                <span className="inline-block w-8 text-center mx-1">{dateObj.month || '___'}</span>
                <span>/ 20</span>
                <span className="inline-block w-6 text-center ml-1">{dateObj.year || '__'}</span>
              </div>
            </div>

            {/* Center Section */}
            <div className="w-[50%] flex flex-col items-center justify-center px-4 pt-2">
              <img
                src="./BOB.png"
                alt="Bank of Baroda"
                className="h-[100px] w-[600px] mb-[2px]"
              />
              <h1 className="font-bold text-center" style={{ fontSize: '18px' }}>Gold Appraisal Memo</h1>
            </div>

            {/* Right Section */}
            <div className="w-[25%] flex justify-end items-start p-2">
              <div className="border border-black" style={{ width: '140px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span className="font-bold" style={{ fontSize: '13px' }}>Paket No :</span>
                <span className="font-bold mt-2" style={{ fontSize: '14px' }}>{formData.paketNo}</span>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="p-2" style={{ flexShrink: 0 }}>
            <div className="flex items-center border-b border-black py-1">
              <span className="font-bold" style={{ fontSize: '13px' }}>Name: {formData.name}</span>
            </div>
            <div className="flex items-center border-b border-black py-1">
              <span className="font-bold" style={{ fontSize: '13px' }}>Address: {formData.address}</span>
            </div>
            <div className="flex items-center border-b border-black py-1">
              <span className="font-bold" style={{ fontSize: '13px' }}>Gold Loan-A/C-No: {formData.goldLoanAcNo}</span>
            </div>
            <div className="flex items-center border-b border-black py-1">
              <span className="font-bold" style={{ fontSize: '13px' }}>Seving-A/C-No: {formData.sevingAcNo}</span>
            </div>
            <div className="flex items-center border-b border-black py-1">
              <span className="font-bold" style={{ fontSize: '13px' }}>Mobile-No: {formData.mobileNo}</span>
            </div>
          </div>

          {/* Table - This section will adjust its height */}
          <div className="overflow-x-auto" style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
            <table className="w-full border-collapse" style={{ fontSize: '10px', height: '100%' }}>
              <thead>
                <tr className="border-t border-black">
                  <th className="border border-black p-1 align-top" style={{ width: '40px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>1</div>
                    <div className="font-bold mt-1" style={{ fontSize: '11px' }}>SR</div>
                    <div className="font-bold" style={{ fontSize: '11px' }}>No</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '120px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>2</div>
                    <div className="font-bold mt-1" style={{ fontSize: '16px' }}>Description</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>of</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>Ornaments</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '50px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>3</div>
                    <div className="font-bold mt-1" style={{ fontSize: '13px' }}>No.of</div>
                    <div className="font-bold" style={{ fontSize: '13px' }}>Orna</div>
                    <div className="font-bold" style={{ fontSize: '13px' }}>ments</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '70px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>4</div>
                    <div className="font-bold mt-1" style={{ fontSize: '16px' }}>Gross</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>Weight</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>( GSM )</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '80px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>5</div>
                    <div className="mt-1" style={{ fontSize: '10px', lineHeight: '1.3' }}>
                      <div className="font-bold">Estimated weight</div>
                      <div className="font-bold">of</div>
                      <div className="font-bold">jewels, studded</div>
                      <div className="font-bold">stones</div>
                      <div className="font-bold">fitted in the</div>
                      <div className="font-bold">ornament</div>
                    </div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '70px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>6</div>
                    <div className="font-bold mt-1" style={{ fontSize: '16px' }}>Net</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>Weight</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>( GSM )</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '60px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>7</div>
                    <div className="font-bold mt-1" style={{ fontSize: '14px' }}>Pyority</div>
                    <div className="font-bold" style={{ fontSize: '14px' }}>of</div>
                    <div className="font-bold" style={{ fontSize: '14px' }}>Gold</div>
                    <div className="font-bold" style={{ fontSize: '14px' }}>(Carat)</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '70px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>8</div>
                    <div className="font-bold mt-1" style={{ fontSize: '16px' }}>Market</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>rate</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>per</div>
                    <div className="font-bold" style={{ fontSize: '16px' }}>Gram</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '80px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>9</div>
                    <div className="font-bold mt-1" style={{ fontSize: '14px' }}>Appraised</div>
                    <div className="font-bold" style={{ fontSize: '14px' }}>value of</div>
                    <div className="font-bold" style={{ fontSize: '14px' }}>Ornament</div>
                    <div className="font-bold" style={{ fontSize: '14px' }}>as</div>
                    <div className="font-bold" style={{ fontSize: '14px' }}>par Valuer</div>
                  </th>
                  <th className="border border-black p-1 align-top" style={{ width: '60px' }}>
                    <div className="font-bold mb-2" style={{ fontSize: '16px' }}>10</div>
                    <div className="font-bold mt-1 " style={{ fontSize: '11px' }}>Remarks</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.id} style={{ height: '22px' }}>
                    <td className="border border-black text-center font-bold" style={{ fontSize: '12px' }}>{index + 1}</td>
                    <td className="border border-black px-1 font-semibold" style={{ fontSize: '13px' }}>{row.description}</td>
                    <td className="border border-black text-center font-semibold" style={{ fontSize: '13px' }}>{row.noOfOrnaments}</td>
                    <td className="border border-black text-center font-semibold" style={{ fontSize: '13px' }}>{row.grossWeight}</td>
                    <td className="border border-black text-center font-semibold" style={{ fontSize: '13px' }}>{row.estimatedWeight}</td>
                    <td className="border border-black text-center font-semibold" style={{ fontSize: '13px' }}>{row.netWeight}</td>
                    <td className="border border-black text-center font-semibold" style={{ fontSize: '13px' }}>{row.purity}</td>
                    <td className="border border-black text-center font-semibold" style={{ fontSize: '13px' }}>{row.marketRate}</td>
                    <td className="border border-black text-center font-semibold" style={{ fontSize: '13px' }}>{row.appraisedValue}</td>
                    <td className="border border-black px-1 font-semibold" style={{ fontSize: '13px' }}>{row.remarks}</td>
                  </tr>
                ))}
                {/* Add empty rows to always show 10 rows total */}
                {Array.from({ length: Math.max(0, 10 - rows.length) }).map((_, index) => (
                  <tr key={`empty-${index}`} style={{ height: '22px' }}>
                    <td className="border border-black text-center font-bold" style={{ fontSize: '12px' }}>{rows.length + index + 1}</td>
                    <td className="border border-black px-1" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black text-center" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black text-center" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black text-center" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black text-center" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black text-center" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black text-center" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black text-center" style={{ fontSize: '11px' }}>&nbsp;</td>
                    <td className="border border-black px-1" style={{ fontSize: '11px' }}>&nbsp;</td>
                  </tr>
                ))}
                <tr style={{ height: '22px' }}>
                  <td colSpan="2" className="border border-black text-center font-bold" style={{ fontSize: '13px' }}>Total :</td>
                  <td className="border border-black text-center font-bold" style={{ fontSize: '13px' }}>{totals.noOfOrnaments.toFixed(0)}</td>
                  <td className="border border-black text-center font-bold" style={{ fontSize: '13px' }}>{totals.grossWeight.toFixed(2)}</td>
                  <td className="border border-black text-center font-bold" style={{ fontSize: '13px' }}>{totals.estimatedWeight.toFixed(2)}</td>
                  <td className="border border-black text-center font-bold" style={{ fontSize: '13px' }}>{totals.netWeight.toFixed(2)}</td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                  <td className="border border-black text-center font-bold" style={{ fontSize: '13px' }}>{totals.appraisedValue.toFixed(2)}</td>
                  <td className="border border-black"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bank Rate and Loan Amount Section */}
          <div className="border-t border-black flex" style={{ flexShrink: 0 }}>
            <div className="border-r border-black flex">
              <div className="p-2 flex items-center border-r border-black">
                <span className="font-bold" style={{ fontSize: '13px' }}>Bank Ret- Par caret</span>
              </div>
              <div className="p-2 font-bold flex items-center justify-center border-r border-black" style={{ minWidth: '80px' }}>
                <span style={{ fontSize: '13px' }}>18- {formData.bankRetPar18}</span>
              </div>
              <div className="p-2 flex font-bold items-center justify-center border-r border-black" style={{ minWidth: '80px' }}>
                <span style={{ fontSize: '13px' }}>20- {formData.bankRetPar20}</span>
              </div>
              <div className="p-2 flex font-bold items-center justify-center border-r border-black" style={{ minWidth: '80px' }}>
                <span style={{ fontSize: '13px' }}>22- {formData.bankRetPar22}</span>
              </div>
            </div>
            <div className="p-2 font-bold flex items-center flex-1" style={{ fontSize: '13px' }}>
              <span>Loan Amount : ₹ {formData.loanAmount}</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-3 space-y-2 border-t border-black" style={{ flexShrink: 0 }}>
            <div className="flex items-center" style={{ fontSize: '13px' }}>
              <span className="font-bold">Market Value for above Gold @100% is ₹ {totals.appraisedValue.toFixed(2) | '_______________'}</span>
            </div>
            <div className="flex items-center" style={{ fontSize: '13px' }}>
              <span className="font-bold">75% of Market value is. ₹   {(Math.round(totals.appraisedValue * formData.marketValuePercent / 100)) || '_______________'}</span>
            </div>
            <div className="flex items-center" style={{ fontSize: '13px' }}>
              <span className="font-bold">Advanced value as per banks Norma ₹ {totals.bankAppraisedTotal || '_______________'}</span>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-4">
              <div>
                <span className="font-bold" style={{ fontSize: '12px' }}>(1) Sign of Manager  __________________________</span>

              </div>
              <div>
                <span className="font-bold" style={{ fontSize: '12px' }}>(2) Sign of Assayor  __________________________</span>

              </div>
              <div>
                <span className="font-bold" style={{ fontSize: '12px' }}>(3) Sign of Officer  __________________________</span>

              </div>
              <div>
                <span className="font-bold" style={{ fontSize: '12px' }}>(4) Sign of Customer  __________________________</span>

              </div>
            </div>

            {/* Valuation Certificate */}
            <div className="mt-4 space-y-2">
              <h3 className="text-center font-bold" style={{ fontSize: '14px' }}>Valuation Certificate</h3>
              <p className="leading-relaxed" style={{ fontSize: '11px', lineHeight: '1.2' }}>
                I hereby certify that I have tested/appraised the above & the gross weight of the article, net weight of Gold, Carat
                purity of fineness, rate per gram & market value shown against the ornaments mentioned is Rs. <span className='font-bold'>{formData.certificateAmount || '_______________'}</span> the best of my knowledge correct & in order.
              </p>
              <p className="font-bold" style={{ fontSize: '15px' }}>I hereby declare that</p>
              <p style={{ fontSize: '11px', lineHeight: '1.2' }}>a)The information furnished above is true & correct to the best of my knowledge and belief.</p>
              <p style={{ fontSize: '11px', lineHeight: '1.2' }}>b)I have no director indirect interest in the jewellery valued.</p>
              <div className="flex justify-between items-end mt-2">
                <p style={{ fontSize: '11px', lineHeight: '1.2' }}>c) I have personally inspected the jewellery.</p>
                <div>
                  <span className="font-bold" style={{ fontSize: '18px' }}>(5) Sign of Assayor __________________________</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}