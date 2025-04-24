function HardwareDataLogger() {
    return (
        <div className="flex flex-col size-full">
            <h1 className="text-xl md:text-2xl text-center">Hardware Data Logger - Exoskeleton</h1>
            <div className="flex flex-wrap mt-2 w-full place-content-center gap-2 overflow-wrap">
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">L.A.M.P.</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Angular.js</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">ChartJS</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">PHP</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Android</div>
            </div>
            <div className="divider" />
            <div className="size-full flex flex-col gap-2 overflow-y-scroll">
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2 order-1">
                        <h3 className="text-lg md:text-xl italic">Problem</h3>
                        <p className="text-base">A lower body exoskeleton cannot be centrally managed or even tracked. A method of monitoring the robotics to identify issues without being able to physically touch the skeletal system was also needed.</p>
                    </div>
                    <div className="border border-neutral rounded-box p-2 order-2">
                        <h3 className="text-lg md:text-xl italic">Solution</h3> {/* Tech Stack (Bullet points for scannability) */}
                        <p className="text-base">
                            Integrated with the existing controller via the GPIO of a Raspberry Pi. Then, created a linux iso with a PHP API and MySQL DB.
                            A python script adds the electrical data from the GPIO directly to the MySQL DB, which is then uploaded to a gov cloud hosted MSSQL DB.
                            In order to access the data, you can either use a specially configured tablet that reads the data from skeletons that are close enough, or
                            you can use the web app if the skeletons have internet access.
                        </p>
                    </div>
                </div>
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2 order-3">
                        <h3 className="text-lg md:text-xl italic">My Role</h3>
                        <p className="text-base">I focused on the software for recording and making available the sensor data.</p>
                    </div>
                    <div className="min-w-1/2 grow flex flex-col border border-neutral rounded-box p-2 order-4">
                        <h3 className="text-lg md:text-xl italic">Quantified Results</h3>
                        <div className="size-full flex flex-wrap gap-4">
                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Max Local Skeletons</div>
                                <div className="stat-value text-primary text-center">14</div>
                                <div className="stat-desc text-secondary text-center capitalize">Intended for one squad of soldiers</div>
                            </div>

                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Sensor Readings</div>
                                <div className="stat-value text-primary text-center">117</div>
                                <div className="stat-desc text-secondary text-center capitalize">Per second</div>
                            </div>

                            <div className="grow flex-2 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Cloud Based Lag</div>
                                <div className="stat-value text-primary text-center">500-10,000 ms</div>
                                <div className="stat-desc text-secondary text-center capitalize">Subject to the skeleton's connectivity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HardwareDataLogger