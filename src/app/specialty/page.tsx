'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setSpecialties, setLoading } from '@/redux/store/specialtySlice';
import axios from 'axios';
import SpecialtyDetail from '@/components/ui/specialtydetail';
import Contact from '@/components/ui/contact';
import Footer from '@/components/ui/footer';

// Component
const SpecialtyPage = () => {
    const dispatch = useDispatch();

    // Lấy dữ liệu từ Redux store
    const { specialties, loading } = useSelector((state: RootState) => state.specialties);
    const error = !specialties.length && !loading ? 'Failed to fetch specialties' : null;

    useEffect(() => {
        const fetchSpecialties = async () => {
            dispatch(setLoading(true)); // Bắt đầu trạng thái loading
            try {
                const response = await axios.get('http://13.211.141.240:8080/api/v1/specialties');

                const specialtyList = response.data.result;
                dispatch(setSpecialties(specialtyList)); // Lưu specialties vào Redux
            } catch (err) {
                console.error('Error fetching specialties:', err);
            } finally {
                dispatch(setLoading(false)); // Kết thúc trạng thái loading
            }
        };

        fetchSpecialties();
    }, [dispatch]);

    // Hiển thị loading
    if (loading) {
        return <div>Loading...</div>;
    }

    // Hiển thị lỗi
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Hiển thị dữ liệu
    return (
        <div>
            <SpecialtyDetail
                bannerImage="/banner.jpg" // Nếu có banner, thay thế giá trị mặc định
                title="Specialties"
                description="Explore our specialties"
                cards={specialties.map((specialty) => ({
                    image: '/banner.jpg', // Thay thế bằng `specialty.image` nếu có
                    title: specialty.name,
                    description: specialty.description.introduction,
                    link: `/specialty/${specialty._id}`, // Đường dẫn chi tiết
                }))}
            />
            <Contact />
            <Footer />
        </div>
    );
};

export default SpecialtyPage;
