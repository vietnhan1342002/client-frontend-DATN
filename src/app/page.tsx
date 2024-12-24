'use client'
import { useEffect, useState } from 'react';
import { RootState } from '@/redux/store';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setServices, setLoading as setServiceLoading } from '@/redux/store/serviceSlice';
import { setDoctors, setLoading as setDoctorLoading } from '@/redux/store/doctorSlice';
import Banner from "@/components/ui/banner";
import ChatBox from "@/components/ui/chatbox";
import CareSection from "@/components/ui/caresection";
import Service from "@/components/ui/service";
import Specialty from "@/components/ui/specialty";
import Footer from "@/components/ui/footer";
import Doctors from '@/components/ui/doctor';
import Navbar from '@/components/ui/navbar';

export default function Home() {
  const dispatch = useDispatch();
  const { doctors, loading: doctorsLoading } = useSelector((state: RootState) => state.doctors);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // set default state to false

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('accessToken');
      if (storedToken) {
        setIsLoggedIn(true);
      }
    }
  }, [isLoggedIn]);

  const fetchServices = async () => {
    dispatch(setServiceLoading(true));
    try {
      const response = await axios.get('http://localhost:8080/api/v1/specialties?pageSize=30');
      const serviceList = response.data.result;
      dispatch(setServices(serviceList));
    } catch (err) {
      console.error('Error:', err);
    } finally {
      dispatch(setServiceLoading(false));
    }
  };

  const fetchDoctors = async () => {
    dispatch(setDoctorLoading(true));
    try {
      const response = await axios.get('http://localhost:8080/api/v1/doctors');
      const doctorList = response.data.result;
      dispatch(setDoctors(doctorList));
    } catch (err) {
      console.error('Error:', err);
    } finally {
      dispatch(setDoctorLoading(false));
    }
  };

  useEffect(() => {
    fetchServices();
    fetchDoctors();
  }, [dispatch, isLoggedIn]); // Không cần thêm 'isLoggedIn' vào deps nếu không thay đổi state trong effect

  const handleSelectDoctor = (id: string) => {
    console.log("Doctor ID:", id);
  };

  return (
    <main className="container mx-auto">
      <Banner />
      <ChatBox />
      <CareSection />
      <Specialty />
      <Service />
      <Doctors doctors={doctors} loading={doctorsLoading} onSelectDoctor={handleSelectDoctor} />
      <Footer />
    </main>
  );
}
