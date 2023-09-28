import React from "react";

const Reels = () => {

    const videos = [
        "https://www.youtube.com/watch?v=tYSrY4iPX6w",
        "https://www.youtube.com/watch?v=unQlCp-lL6I",
        "https://www.youtube.com/watch?v=Ic1yHHjujAo",
    ];

    return (
        <div className="container mx-auto mt-4 ">
            <div className="flex flex-col w-[600px] py-10 gap-3 ml-20 items-center justify-center">
                <iframe width="400" height="579" src="https://www.youtube.com/embed/Rl5m-LY2494" ></iframe>
                <iframe width="400" height="579" src="https://www.youtube.com/embed/5AMGhf4Zavw" ></iframe>
                <iframe width="400" height="579" src="https://www.youtube.com/embed/_Tp8zfdggnw" ></iframe>
                <iframe width="400" height="579" src="https://www.youtube.com/embed/lVgjUWFSR6w" ></iframe>
                
            </div>
        </div>
    );
};

export default Reels;
