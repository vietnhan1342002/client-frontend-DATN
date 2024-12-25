'use client';
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface DetailMedicalRecord {
    _id: string;
    disease: string;
    medicalRecordId: {
        diagnosis: string;
        note: string;
    }
    symptoms: string;
    treatmentPlan: string;
}

interface Medication {
    _id: string;
    name: string;
    description: string;
    price: number;
    sideEffects: string;
    unit: string;
    usageInstructions: string;
}

interface PrescriptionDetail {
    _id: string;
    medicationId: Medication;
    prescriptionId: string;
    quantityPrescribed: number;
}

function MedicalRecordContent() {
    const router = useRouter();
    const [detailMedicalRecord, setDetailMedicalRecord] = useState<DetailMedicalRecord | null>(null);
    const [prescriptions, setPrescriptions] = useState<PrescriptionDetail[]>([]);
    const searchParams = useSearchParams();
    const medicalId = searchParams.get('id');

    const fetchDetailMedicalRecord = async (medicalId: string) => {
        const res = await axios.get(`http://13.211.141.240:8080/api/v1/detail-medical-record/medical-record/${medicalId}`);
        const detailMedicalRecord = res.data;
        if (res.data) {
            setDetailMedicalRecord(detailMedicalRecord);
            fetchPrescription(detailMedicalRecord._id);
        }
    }

    const fetchPrescription = async (medicalDetailId: string) => {
        const res = await axios.get(`http://13.211.141.240:8080/api/v1/prescriptions/detail-medical-record/${medicalDetailId}`);
        if (res.data && res.data.length > 0) {
            const prescriptionId = res.data[0]._id;
            if (prescriptionId) {
                fetchMedicationByPrescriptionId(prescriptionId);
            }
        }
    };

    const fetchMedicationByPrescriptionId = async (prescriptionId: string) => {
        const res = await axios.get(`http://13.211.141.240:8080/api/v1/prescription-details/prescription/${prescriptionId}`);
        setPrescriptions(res.data);
    }

    useEffect(() => {
        if (medicalId) {
            fetchDetailMedicalRecord(medicalId);
        }
    }, [medicalId])

    if (!detailMedicalRecord) {
        return (
            <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
                <div className="max-w-lg bg-white shadow-lg rounded-lg p-6 animate-pulse">
                    <p className="text-center text-gray-500">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div className="flex items-center mb-6 relative">
                    <button
                        onClick={() => router.back()}  // Quay lại trang trước
                        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none"
                    >
                        Back
                    </button>
                    <h1 className="text-3xl font-extrabold text-gray-700 absolute left-1/2 transform -translate-x-1/2">Medical Record Detail</h1>
                </div>


                <h2 className="text-3xl text-center font-semibold text-indigo-800 mb-3">Disease: {detailMedicalRecord.disease}</h2>

                {/* Chia màn hình thành 2 cột */}
                <div className="flex gap-8">
                    <div className="flex-1 space-y-6">
                        {/* Disease and Diagnosis/Note Group */}
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="space-y-2">
                                <p className="text-lg text-blue-700 font-medium">Diagnosis:</p>
                                <p className="text-gray-700 bg-white p-4 rounded-lg">{detailMedicalRecord.medicalRecordId.diagnosis}</p>
                            </div>
                            <div className="space-y-2 mt-4">
                                <p className="text-lg text-blue-700 font-medium">Note:</p>
                                <p className="text-gray-700 bg-white p-4 rounded-lg">{detailMedicalRecord.medicalRecordId.note}</p>
                            </div>
                        </div>

                        {/* Symptoms and Treatment Plan Group */}
                        <div className="bg-green-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-green-700 mb-3">Symptoms</h2>
                            <p className="text-gray-700 bg-white p-4 rounded-lg">{detailMedicalRecord.symptoms}</p>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Treatment Plan</h2>
                            <p className="text-gray-700 bg-white p-4 rounded-lg">{detailMedicalRecord.treatmentPlan}</p>
                        </div>
                    </div>

                    {/* Medication List */}
                    <div className="flex-1 space-y-6">
                        {prescriptions.length > 0 && (
                            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-yellow-700 mb-3">Medications Prescribed</h2>
                                <div className="space-y-4">
                                    {prescriptions.map((prescription) => (
                                        <div key={prescription._id} className="border-b pb-4">
                                            <h3 className="text-xl font-semibold text-yellow-600">{prescription.medicationId.name}</h3>
                                            <p className="text-gray-700"><strong>Description:</strong> {prescription.medicationId.description}</p>
                                            <p className="text-gray-700"><strong>Price:</strong> {prescription.medicationId.price} VND</p>
                                            <p className="text-gray-700"><strong>Side Effects:</strong> {prescription.medicationId.sideEffects}</p>
                                            <p className="text-gray-700"><strong>Usage Instructions:</strong> {prescription.medicationId.usageInstructions}</p>
                                            <p className="text-gray-700"><strong>Quantity Prescribed:</strong> {prescription.quantityPrescribed} {prescription.medicationId.unit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MedicalRecordDetail() {
    return (
        <Suspense fallback={<p>Loading medical record details...</p>}>
            <MedicalRecordContent />
        </Suspense>
    );
}