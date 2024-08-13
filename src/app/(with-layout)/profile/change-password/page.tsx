import ChangePasswordForm from "@/components/(withLayout)/Profile/ChangePassword/ChangePasswordForm";
import dynamic from "next/dynamic";


const ChangePassword = () => {
    return (
        <div className=" mx-auto">
           <ChangePasswordForm></ChangePasswordForm>
        </div>
    );
};

// export default ChangePassword;
export default dynamic(() => Promise.resolve(ChangePassword), {
    ssr: false
})