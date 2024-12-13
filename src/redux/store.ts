import { configureStore } from '@reduxjs/toolkit';
import specialtyReducer from './store/specialtySlice';
import serviceReducer from './store/serviceSlice';
import departmentReducer from './store/departmentSlice';
import doctorReducer from './store/doctorSlice';

// Tạo store với reducers
export const makeStore = () =>
    configureStore({
        reducer: {
            specialties: specialtyReducer,
            services: serviceReducer,
            departments: departmentReducer,
            doctors: doctorReducer,// Thêm slice ở đây
        },
    });

// Định nghĩa các loại (types) cho store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
