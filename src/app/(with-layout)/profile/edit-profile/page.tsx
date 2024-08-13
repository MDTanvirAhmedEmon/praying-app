import EditProfileForm from "@/components/(withLayout)/Profile/EditProfile/EditProfileForm";
import dynamic from "next/dynamic";


const EditProfile = () => {
    return (
        <div className=" mx-auto">
            <EditProfileForm></EditProfileForm>
        </div>
    );
};

// export default EditProfile;
export default dynamic(() => Promise.resolve(EditProfile), {
    ssr: false
})