import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu cho Patient
interface Patient {
    _id: string;
    userId: {
        _id: string;
        fullName: string;
        phoneNumber: string;
        avatar?: string;
    };
    dateOfBirth: string;
    gender: string;
    address: string;
}

// Định nghĩa state
interface PatientState {
    patients: Patient[];
    selectedPatient: Patient | null; // Lưu trữ bệnh nhân được chọn
    loading: boolean;
}

// Giá trị mặc định của state
const initialState: PatientState = {
    patients: [],
    selectedPatient: null,
    loading: false,
};

// Tạo slice
const patientSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        setPatients(state, action: PayloadAction<Patient[]>) {
            state.patients = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        selectPatient(state, action: PayloadAction<string>) {
            state.selectedPatient = state.patients.find(
                (patient) => patient._id === action.payload
            ) || null;
        },
    },
});

// Xuất actions và reducer
export const { setPatients, setLoading, selectPatient } = patientSlice.actions;
export default patientSlice.reducer;
