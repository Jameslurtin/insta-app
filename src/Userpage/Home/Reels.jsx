import React from "react";

const Reels = () => {

    const videos = [
        "https://www.youtube.com/watch?v=tYSrY4iPX6w",
        "https://www.youtube.com/watch?v=unQlCp-lL6I",
        "https://www.youtube.com/watch?v=Ic1yHHjujAo",
    ];

    return (
        <div className="container mx-auto mt-4 ">
            <div className="flex flex-col w-[600px] py-10 gap-3 ml-20">
                <iframe width="400" height="800" src="https://www.youtube.com/embed/gB2zKZxESTg" ></iframe>
                <iframe width="400" height="800" src="https://www.youtube.com/embed/gB2zKZxESTg" ></iframe>
                <iframe width="400" height="800" src="https://www.youtube.com/embed/gB2zKZxESTg" ></iframe>
                <iframe width="400" height="800" src="https://www.youtube.com/embed/gB2zKZxESTg" ></iframe>
                
            </div>
        </div>
    );
};

export default Reels;
