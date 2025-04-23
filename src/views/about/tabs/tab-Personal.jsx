

function Personal(props) {
    return (
        <>
            <input type="radio" name="about_tabs" className="tab" aria-label="Personal" />
            <div className="tab-content bg-base-100 p-2">
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                    <input type="radio" name="fun-fact-accordion" />
                    <div className="collapse-title font-semibold text-lg">Childhood sport</div>
                    <div className="collapse-content text-md">
                        I had an unconventional sport from the ages of 4 to 14. I traveled the east coast with a dance company doing tap, jazz, russian ballet, etc.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                    <input type="radio" name="fun-fact-accordion" />
                    <div className="collapse-title font-semibold text-lg">Favorite comic character</div>
                    <div className="collapse-content text-md">
                        Batman. It's not even close. If you ever get the chance, ask me to see some of my collection.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                    <input type="radio" name="fun-fact-accordion" />
                    <div className="collapse-title font-semibold text-lg">The kind of video games I like to play</div>
                    <div className="collapse-content text-md">
                        <ul className="list-disc m-2">   
                            <li>
                                I play table top games (<a className="link link-accent" href="https://en.wikipedia.org/wiki/Shadowrun">Shadowrun</a> & <a className="link link-accent" href="https://en.wikipedia.org/wiki/Earthdawn">Earthdawn</a>) as often as I have the time for.
                            </li>
                            <li>
                                My video game of choice tends to be <a className="link link-accent" href="https://en.wikipedia.org/wiki/Civilization_VI">Civ VI</a>. In genereal, I'm a sucker for grand startegy games.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                    <input type="radio" name="fun-fact-accordion" />
                    <div className="collapse-title font-semibold text-lg">How I learned to solder</div>
                    <div className="collapse-content text-md">I was at <a className="link link-accent" href="https://defcon.org/html/defcon-27/dc-27-index.html">DEF CON 27</a> and I had just purchased the Darknet Industries Badge when I realized it comes in pieces. Imagine my surprise when I had to learn how to assemble the badge I had just bought 😅</div>
                </div>
            </div>
        </>
    );
}

export default Personal;