import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const verifyToken = async (token: string): Promise<boolean> => {
    try {
        const response = await axios.get('http://13.211.141.240:8080/api/v1/user-auth/verify-token', {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.status === 200;

    } catch (error) {
        console.error('Error verifying token:', error);
        return false;
    }
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                router.push('/login');
                return;
            }

            const isValid = await verifyToken(accessToken);
            if (!isValid) {
                localStorage.removeItem('accessToken');
                router.push('/login');
                return;
            }

            setIsVerified(true);
        };

        checkToken();
    }, [router]);

    if (!isVerified) {
        return null;
    }

    return <>{children}</>;
};

export default PrivateRoute;
