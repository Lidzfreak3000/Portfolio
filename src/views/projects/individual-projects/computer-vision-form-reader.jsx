function ComputerVisionFormReader() {
    return (
        <div className="flex flex-col size-full">
            <h1 className="text-xl md:text-2xl text-center">Computer Vision Form Reader</h1>
            <div className="flex flex-wrap mt-2 w-full place-content-center gap-2">
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Python</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">React Native</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">OpenCV</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">OCR</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">AI</div>
            </div>
            <div className="divider" />
            <div className="size-full flex flex-col gap-2 overflow-y-scroll">
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">Problem</h3>
                        <p className="text-base">Every time a door hanger was filled out by a company representative, they then had to repeat the form in the app. Quite literally doubling the amount of work that folks needed to do per apartment.</p>
                    </div>
                    <div className="border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">Solution</h3> {/* Tech Stack (Bullet points for scannability) */}
                        <p className="text-base">Trained an OCR model using python and OpenCV to recognize the form and output the form's contents as JSON. The JSON was then uploaded to an API endpoint written in C# and then uploaded as a record into the SQL DB.</p>
                    </div>
                </div>
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">My Role</h3>
                        <p className="text-base">I designed and implemented the complete form processing solution—training the Python/OpenCV OCR model to extract form data into JSON, building the C# API endpoint to handle submissions, and implementing the SQL database integration.</p>
                    </div>
                    <div className="min-w-1/2 grow flex flex-col border border-neutral rounded-box p-2 order-4">
                        <h3 className="text-lg md:text-xl italic">Quantified Results</h3>
                        <div className="size-full flex flex-wrap gap-4">
                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Forms Processed Daily</div>
                                <div className="stat-value text-primary text-center">+500</div>
                                <div className="stat-desc text-secondary text-center capitalize">~1/10 doors serviced</div>
                            </div>

                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Field Accuracy</div>
                                <div className="stat-value text-primary text-center">72%</div>
                                <div className="stat-desc text-secondary text-center capitalize">28/100 needed correction</div>
                            </div>

                            <div className="grow flex-2 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Time Saved Every Day</div>
                                <div className="stat-value text-primary text-center">1,100 Hours</div>
                                <div className="stat-desc text-secondary text-center capitalize">5 Seconds Per Door, Per Employee, Per Day</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComputerVisionFormReader