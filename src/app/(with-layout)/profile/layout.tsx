import ProfileTopBar from "@/components/(withLayout)/Profile/ProfileTopBar";


export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" bg-[#1D242D] py-10 rounded-b-lg">
            <ProfileTopBar></ProfileTopBar>
            <div>{children}</div>
        </div>
    );
}
