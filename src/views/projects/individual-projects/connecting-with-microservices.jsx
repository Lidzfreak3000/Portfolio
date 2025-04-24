function ConnectingWithMicroservices() {
    return (
        <div className="flex flex-col size-full">
            <h1 className="text-xl md:text-2xl text-center">Using Microservices to Connect Production Applications</h1>
            <div className="flex flex-wrap mt-2 w-full place-content-center gap-2">
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Microservices</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">C#</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">JS</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Python</div>
                <div className="badge badge-accent badge-sm md:badge-md lg:badge-lg">Azure</div>
            </div>
            <div className="divider" />
            <div className="size-full flex flex-col gap-2 overflow-y-scroll">
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">Problem</h3>
                        <p className="text-base">A series of unconnected tools caused manual work to export/import information from one system to another.</p>
                    </div>
                    <div className="border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">Solution</h3> {/* Tech Stack (Bullet points for scannability) */}
                        <p className="text-base">
                            Implemented a series of microservices that connected the production payroll systems, Ledger (Quickbooks), Human Capital Management, and proprietary applications for tracking employee’s labor.
                            <br /><br />
                            This was made via Azure Functions written in C#, Python, and Javascript.
                        </p>
                    </div>
                </div>
                <div className="w-full flex-1/2 flex flex-col md:flex-row gap-2">
                    <div className="border border-neutral rounded-box p-2">
                        <h3 className="text-lg md:text-xl italic">My Role</h3>
                        <p className="text-base">Architected and delivered a microservices solution. Managed the offshore dev team through buildout, eliminating manual processes.</p>
                    </div>
                    <div className="min-w-1/2 grow flex flex-col border border-neutral rounded-box p-2 order-4">
                        <h3 className="text-lg md:text-xl italic">Quantified Results</h3>
                        <div className="size-full flex flex-wrap gap-4">
                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Time Saved</div>
                                <div className="stat-value text-primary text-center">676 Hours</div>
                                <div className="stat-desc text-secondary text-center capitalize">Measured Yearly</div>
                            </div>

                            <div className="grow flex-1 flex flex-col p-2 place-content-center border-1 border-dashed border-neutral rounded-box">
                                <div className="stat-title text-secondary text-center capitalize">Administrative Error Rate</div>
                                <div className="stat-value text-primary text-center">↘︎ 63.63%</div>
                                <div className="stat-desc text-secondary text-center capitalize">11 to 4 errors per quarter</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectingWithMicroservices