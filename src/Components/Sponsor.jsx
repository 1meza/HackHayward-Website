export default function Sponsor() {
    return (
        <>
            <div className="relative ">
                <section className="flex flex-col items-center justify-items-center gap-10 text-white max-w-screen-2xl mx-auto">
                    <div className="text-white text-center font-exo2 flex flex-col gap-9 ">
                        <h2 className=" text-5xl text-balance max-lg:mx-28 font-bold">
                            SPONSOR
                        </h2>

                        <p className="lg:text-xl sm:text-lg font-grotesk text-pretty px-10">
                            Your sponsorship is crucial in bringing this event
                            to life. Every contribution you make will be
                            allocated to cover essential expenses, including
                            meals, branded apparel, and all necessary resources
                            for hosting a successful hackathon. By taking care
                            of these logistics, we will create an environment
                            where participants can fully immerse themselves in
                            the creative process. This support allows hackers to
                            develop and launch their innovative ideas, without
                            worrying about any concerns.
                        </p>
                    </div>
                    <a
                        href=""
                        className="btn rounded-full px-6 bg-[#c593e9] hover:bg-[#cfb0e8] hover:scale-[1.1] duration-200		 text-white  h-14 text-center text-[20px] font-grotesk"
                    >
                        Sponsor Us
                    </a>
                </section>
            </div>
        </>
    );
}