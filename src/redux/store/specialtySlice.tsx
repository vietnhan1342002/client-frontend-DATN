import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu cho specialty
interface Specialty {
    _id: string;
    name: string;
    departmentId: string;
    description: {
        introduction: string;
        qualifications: string;
        relatedDiseases: string;
    };
}

// Định nghĩa state
interface SpecialtyState {
    specialties: Specialty[];
    loading: boolean;
}

// Giá trị mặc định của state
const initialState: SpecialtyState = {
    specialties: [],
    loading: false,
};

// Tạo slice
const specialtySlice = createSlice({
    name: 'specialties',
    initialState,
    reducers: {
        setSpecialties(state, action: PayloadAction<Specialty[]>) {
            state.specialties = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

// Xuất actions và reducer
export const { setSpecialties, setLoading } = specialtySlice.actions;
export default specialtySlice.reducer;
