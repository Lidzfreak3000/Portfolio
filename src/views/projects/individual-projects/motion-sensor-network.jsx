function MotionSensorNetwork() {
    return (
        <div className="flex flex-col size-full">
            <h1 className="text-xl md:text-2xl text-center">Motion Sensor Network</h1>
            <div className="flex flex-wrap mt-2 w-full place-content-center gap-2">
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">PIR Sensor</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Python</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">MSSQL</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Azure</div>
            </div>
            <div className="divider" />
            <div className="grow flex flex-col gap-2 overflow-y-scroll">
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2 order-1">
                        <h3 className="text-lg md:text-xl italic">Problem</h3>
                        <p className="text-base">A haunted history museum wanted a way of tracking and live streaming suspected paranormal activity.</p>
                    </div>
                    <div className="border border-neutral rounded-box p-2 order-2">
                        <h3 className="text-lg md:text-xl italic">Solution</h3> {/* Tech Stack (Bullet points for scannability) */}
                        <p className="text-base">
                            First, I created a mesh network of Raspberry Pi Zeros with motion sensors and infrared cameras attached. 
                            After the museum closes, the motion detectors are in control of which camera is the 'primary' video feed as well as
                            records notable timestamps. All the cameras feeds are streamed to azure storage and kept for a week. There is also 
                            a SQL DB that records the motion events and associates it to the blob storage link for the primary feed.</p>
                    </div>
                </div>
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2 order-3">
                        <h3 className="text-lg md:text-xl italic">My Role</h3>
                        <p className="text-base">I developed the project solo as I used to volunteer there during halloween for the haunted house.</p>
                    </div>
                    <div className="min-w-1/2 flex flex-col border border-neutral rounded-box p-2 order-4">
                        <h3 className="text-lg md:text-xl italic">Quantified Results</h3>
                        <div className="size-full flex gap-4">
                            <div className="grow flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Total Cameras</div>
                                <div className="stat-value text-primary text-center">18</div>
                                <div className="stat-desc text-secondary text-center capitalize">each with 2 sensors</div>
                            </div>

                            <div className="grow flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Video Data Processed</div>
                                <div className="stat-value text-primary text-center">25.2 GB</div>
                                <div className="stat-desc text-secondary text-center capitalize">~300GB of video per day</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MotionSensorNetwork