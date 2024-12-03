import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu cho Service
interface Service {
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
interface ServiceState {
    services: Service[];
    loading: boolean;
}

// Giá trị mặc định của state
const initialState: ServiceState = {
    services: [],
    loading: false,
};

// Tạo slice
const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices(state, action: PayloadAction<Service[]>) {
            state.services = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

// Xuất actions và reducer
export const { setServices, setLoading } = serviceSlice.actions;
export default serviceSlice.reducer;
