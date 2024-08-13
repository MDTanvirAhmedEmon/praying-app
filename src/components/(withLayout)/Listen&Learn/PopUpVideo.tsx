import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const PopUpVideo = ({ isModalOpen, handleOk, handleCancel }: any) => {
    const [playing, setPlaying] = useState(false); 

    useEffect(() => {

        setPlaying(isModalOpen);


        return () => {
            setPlaying(false);
        };
    }, [isModalOpen, handleCancel, handleOk]);

    return (
        <Modal
            width={"650px"}
            footer={null}
            title="Video title"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <ReactPlayer
                playing={playing}
                controls={true}
                width={"600px"}
                url='https://www.youtube.com/watch?v=NgrljB7UU34'
            />
        </Modal>
    );
};

export default PopUpVideo;
