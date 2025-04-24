function BPMS() {
    return (
        <div className="flex flex-col size-full">
            <h1 className="text-xl md:text-2xl text-center">Department Specific BPMS (Business Process Management Systems)</h1>
            <div className="flex flex-wrap mt-2 w-full place-content-center gap-2">
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">WPF</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">C#</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">MSSQL</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">T-SQL</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">AWS</div>
            </div>
            <div className="divider" />
            <div className="size-full flex flex-col gap-2 overflow-y-scroll">
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="md:w-1/2 border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">Problem</h3>
                        <p className="text-base">For nearly 60 years, an internal team has been tracking the obsolesence work required for fulfilling multi-decade support contracts in spread sheets. Now, non-technical employees have to get engineering laptops just to use the afore spread sheet.</p>
                    </div>
                    <div className="md:w-1/2 border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">Solution</h3> {/* Tech Stack (Bullet points for scannability) */}
                        <p className="text-base">Create a desktop app with a gov cloud based SQL server that can be a case manager for the obsolesence work going forward, as well as make the historical data more accessible.</p>
                    </div>
                </div>
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="md:w-1/2 border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">My Role</h3>
                        <p className="text-base">As the lead developer, I owned the app’s architecture and built the first production version solo. I focused on making foundational decisions that kept the system flexible—which allowed the product to scale smoothly.</p>
                    </div>
                    <div className="min-w-1/2 grow flex flex-col border border-neutral rounded-box p-2 order-4">
                        <h3 className="text-lg md:text-xl italic">Quantified Results</h3>
                        <div className="size-full flex flex-wrap gap-4">
                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Hardware Costs Saved</div>
                                <div className="stat-value text-primary text-center">$8,000</div>
                                <div className="stat-desc text-secondary text-center capitalize">↘︎ 45%</div>
                            </div>
                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Meetings Eliminated</div>
                                <div className="stat-value text-primary text-center">12 Hours</div>
                                <div className="stat-desc text-secondary text-center capitalize">Every Month</div>
                            </div>
                            <div className="grow flex-2 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">TAT (Turn Around Time)</div>
                                <div className="stat-value text-primary text-center">↘︎ 67%</div>
                                <div className="stat-desc text-secondary text-center capitalize">from 2 months to 3 weeks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BPMS