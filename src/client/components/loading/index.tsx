import { motion } from "motion/react";

function Loading() {
    return (
        <main className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
            <div className="relative z-10 flex flex-col items-center gap-y-5">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: .8
                    }}
                    className="text-5xl font-black tracking-wider text-white"
                >
                    DOX-ENGINE
                </motion.h1>
                <div className="mt-6 flex gap-2">
                    {[0,1,2].map(i=>(
                        <motion.div
                            key={i}
                            animate={{
                                scale:[1,1.4,1],
                                opacity:[.2,1,.2]
                            }}
                            transition={{
                                duration:1.2,
                                repeat:Infinity,
                                delay:i*0.2
                            }}
                            className="size-2 rounded-full bg-white"
                        />

                    ))}
                </div>
                <p className="mt-10 text-xs text-zinc-600 font-mono">
                    Accessing scientific knowledge...
                </p>
            </div>
        </main>
    );
};

export default Loading;