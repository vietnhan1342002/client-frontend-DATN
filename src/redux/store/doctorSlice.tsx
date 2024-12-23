import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu cho Doctor
interface Doctor {
    _id: string;
    avatar: string;
    userId: {
        _id: string;
        fullName: string;
        phoneNumber: string;
    };
    licenseNumber: string;
    yearsOfExperience: number;
    specialtyId: {
        _id: string;
        name: string;
    };

}

// Định nghĩa state
interface DoctorState {
    doctors: Doctor[];
    selectedDoctor: Doctor | null; // Lưu trữ bác sĩ được chọn
    loading: boolean;
}

// Giá trị mặc định của state
const initialState: DoctorState = {
    doctors: [],
    selectedDoctor: null,
    loading: false,
};

// Tạo slice
const doctorSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        setDoctors(state, action: PayloadAction<Doctor[]>) {
            state.doctors = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        selectDoctor(state, action: PayloadAction<string>) {
            state.selectedDoctor = state.doctors.find(
                (doctor) => doctor._id === action.payload
            ) || null;
        },
    },
});

// Xuất actions và reducer
export const { setDoctors, setLoading, selectDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;