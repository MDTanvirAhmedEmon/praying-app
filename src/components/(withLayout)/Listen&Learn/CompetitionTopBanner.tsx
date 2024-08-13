import image from "../../../assets/training-workshop/workshop.jpg"
const CompetitionTopBanner = () => {

    const imgStyle = {
        backgroundImage: `URL(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "full",
    }
    return (
        <div className=" w-full h-[300px] rounded-md" style={imgStyle}>
            <div className=" h-full w-full bg-[#0000009c] rounded-md">
                <div className=" h-full flex items-center justify-center">
                    <div className=" text-center">
                        <h2 className=" text-white text-3xl font-semibold">Dance Competition</h2>
                        <p className=" text-secondary text-lg font-thin mt-2">Graphics Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitionTopBanner;