import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu cho department
interface Department {
    _id: string;
    departmentName: string;
    description: string;

}

// Định nghĩa state
interface DepartmentState {
    departments: Department[];
    loading: boolean;
}

// Giá trị mặc định của state
const initialState: DepartmentState = {
    departments: [],
    loading: false,
};

// Tạo slice
const departmentSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {
        setDepartments(state, action: PayloadAction<Department[]>) {
            state.departments = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

// Xuất actions và reducer
export const { setDepartments, setLoading } = departmentSlice.actions;
export default departmentSlice.reducer;
