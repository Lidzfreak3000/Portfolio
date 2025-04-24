function BatteryManagementDashboard() {
    return (
        <div className="flex flex-col size-full">
            <h1 className="text-xl md:text-2xl text-center">Battery Management Dashboard</h1>
            <div className="flex flex-wrap mt-2 w-full place-content-center gap-2">
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">React</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">C#</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">SCADA</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Azure</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">SPA</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Microservices</div>
            </div>
            <div className="divider" />
            <div className="size-full flex flex-col gap-2 overflow-y-scroll">
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2 order-1">
                        <h3 className="text-lg md:text-xl italic">Problem</h3>
                        <p className="text-base">A battery storage startup needed a status dashboard that was available 24X7 and posted in common spaces at their main operating office. This was both for regulatory compliance and their own internal needs.</p>
                    </div>
                    <div className="border border-neutral rounded-box p-2 order-2">
                        <h3 className="text-lg md:text-xl italic">Solution</h3> {/* Tech Stack (Bullet points for scannability) */}
                        <p className="text-base">Use microservices (Azure Functions written in C#) to fetch the statuses from the main SCADA controllers every 30 seconds. Then, create a react app so that the requests are only being triggered if someone is actually using the dashboard.
                            I decided to use microservices so that the usage would scale with the number of active monitors rather than the number of sites. Live monitoring can also only be done for one site at a time.
                            Part of the solution was also configuring a Raspberry Pi Zero to boot directly to the web app into a specific site. We configured one of the Raspberry Pi's for each site that needed monitoring and then mounted them to the rear of a mounted TV at each site.
                        </p>
                    </div>
                </div>
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2 order-3">
                        <h3 className="text-lg md:text-xl italic">My Role</h3>
                        <p className="text-base">I led development on the project, designing the architecture and building the initial version of the app myself. I kept the codebase modular and scalable, which allowed the team to smoothly grow.</p>
                    </div>
                    <div className="min-w-1/2 grow flex flex-col border border-neutral rounded-box p-2 order-4">
                        <h3 className="text-lg md:text-xl italic">Quantified Results</h3>
                        <div className="size-full flex flex-wrap gap-4">
                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Total Hosting Costs</div>
                                <div className="stat-value text-primary text-center">$10</div>
                                <div className="stat-desc text-secondary text-center capitalize">Paid Per Month</div>
                            </div>

                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Alert Timeline</div>
                                <div className="stat-value text-primary text-center">500 ms</div>
                                <div className="stat-desc text-secondary text-center capitalize">↘︎ 99.98% (10 min to 500 ms)</div>
                            </div>

                            <div className="grow flex-2 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Total Development Time</div>
                                <div className="stat-value text-primary text-center">35 hours</div>
                                <div className="stat-desc text-secondary text-center capitalize">inception to go-live</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BatteryManagementDashboard