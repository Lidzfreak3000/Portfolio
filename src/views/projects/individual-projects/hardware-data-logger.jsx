function HardwareDataLogger() {
    return (
        <div className="flex flex-col size-full">
            <h1 className="text-xl text-center">Hardware Data Logger - Exoskeleton</h1>
            <div className="flex flex-wrap mt-2 w-full place-content-center gap-2 overflow-wrap">
                <div className="badge badge-accent">L.A.M.P.</div>
                <div className="badge badge-accent">Angular.js</div>
                <div className="badge badge-accent">ChartJS</div>
                <div className="badge badge-accent">PHP</div>
                <div className="badge badge-accent">Android</div>
            </div>
            <div className="divider" />
            <div className="grow grid gris-cols-1 md:grid-cols-2 md:grid-rows-3 gap-2 overflow-y-scroll">
                <div className="border border-neutral rounded-box p-2 order-1">
                    <h3 className="text-lg italic">Problem</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio numquam laudantium nemo inventore alias neque, officiis, reprehenderit eius perferendis quo aliquid eos aut iste consectetur incidunt ut tempora obcaecati.</p>
                </div>
                <div className="border border-neutral rounded-box p-2 order-2">
                    <h3 className="text-lg italic">Solution</h3> {/* Tech Stack (Bullet points for scannability) */}
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio numquam laudantium nemo inventore alias neque, officiis, reprehenderit eius perferendis quo aliquid eos aut iste consectetur incidunt ut tempora obcaecati.</p>
                </div>
                <div className="border border-neutral rounded-box p-2 order-3">
                    <h3 className="text-lg italic">My Role</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio numquam laudantium nemo inventore alias neque, officiis, reprehenderit eius perferendis quo aliquid eos aut iste consectetur incidunt ut tempora obcaecati.</p>
                </div>
                <div className="border border-neutral rounded-box p-2 order-4">
                    <h3 className="text-lg italic">Quantified Results</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio numquam laudantium nemo inventore alias neque, officiis, reprehenderit eius perferendis quo aliquid eos aut iste consectetur incidunt ut tempora obcaecati.</p>
                </div>
                <div className="border border-neutral rounded-box p-2 order-5 md:col-start-1 md:row-start-3 md:col-span-2">
                    <h3 className="text-lg italic">Visuals & Links</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio numquam laudantium nemo inventore alias neque, officiis, reprehenderit eius perferendis quo aliquid eos aut iste consectetur incidunt ut tempora obcaecati.</p>
                </div>
            </div>
        </div>
    );
}

export default HardwareDataLogger