import "./tab-Professional.css";

import { useState, useEffect } from "react"

function Professional(props) {
    const startDate = new Date("01 Aug 2014 00:09:00 EST");

    const [time, setTime] = useState({
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        setInterval(() => {
            const dateNow = new Date();

            const years = dateNow.getFullYear() - startDate.getFullYear()
            const days = dateNow.getDate() - startDate.getDate()
            const hours = dateNow.getHours() - startDate.getHours()
            const minutes = dateNow.getMinutes() - startDate.getMinutes()
            const seconds = dateNow.getSeconds() - startDate.getSeconds()

            const currentTime = {
                years: years,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }

            setTime(currentTime)

        }, 1000)

    }, [])

    return (
        <>
            <input type="radio" name="my_tabs_1" className="tab" aria-label="Professional" defaultChecked />
            <div className="tab-content bg-base-100 p-6">
                <div className="w-full h-full">
                    <div className="stats relative w-full overflow-auto">
                        <div className="stat">
                            <div className="stat-title">Created Serverless API</div>
                            <div className="stat-value text-primary"> 1M+</div>
                            <div className="stat-desc">Monthly Requests</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Modernized SQL DBs</div>
                            <div className="stat-value text-secondary">All 100</div>
                            <div className="stat-desc">NC counties</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Directed IT For</div>
                            <div className="stat-value text-accent">6</div>
                            <div className="stat-desc">Portfolio Companies</div>
                        </div>
                    </div>
                    <div className="divider divider-neutral" />
                    <div className="stats relative w-full">
                        <div className="stat">
                            <div className="stat-title">Total Career Length</div>
                            <div className="stat-value">
                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                    <div className="flex flex-col font-normal">
                                        <span className="countdown font-extrabold text-5xl">
                                            <span style={{ "--value": time.years }} aria-live="polite" aria-label={time.years}>{time.years}</span>
                                        </span>
                                        yrs
                                    </div>
                                    <div className="flex flex-col font-normal">
                                        <span className="countdown font-extrabold text-5xl">
                                            <span style={{ "--value": time.days }} aria-live="polite" aria-label={time.days}>{time.days}</span>
                                        </span>
                                        days
                                    </div>
                                    <div className="flex flex-col font-normal">
                                        <span className="countdown font-extrabold text-5xl">
                                            <span style={{ "--value": time.hours }} aria-live="polite" aria-label={time.hours}>{time.hours}</span>
                                        </span>
                                        hrs
                                    </div>
                                    <div className="flex flex-col font-normal">
                                        <span className="countdown font-extrabold text-5xl">
                                            <span style={{ "--value": time.minutes }} aria-live="polite" aria-label={time.minutes}>{time.minutes}</span>
                                        </span>
                                        min
                                    </div>
                                    <div className="flex flex-col font-normal">
                                        <span className="countdown font-extrabold text-5xl">
                                            <span style={{ "--value": time.seconds }} aria-live="polite" aria-label={time.seconds}>{time.seconds}</span>
                                        </span>
                                        sec
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Professional;