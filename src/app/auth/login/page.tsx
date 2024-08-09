import LoginForm from '@/components/auth/Login/LoginForm';
import loginImg from '../../../assets/login/login-image.png'

const LogIn = () => {
    const imageStyle = {
        backgroundImage: `URL(${loginImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
    };


    return (
        <div style={imageStyle}>
            <div className='w-full h-full bg-[#59015efa]'>
                <div className=' h-full flex items-center justify-center'>
                    <LoginForm></LoginForm>
                </div>

            </div>
        </div>
    );
};

export default LogIn;