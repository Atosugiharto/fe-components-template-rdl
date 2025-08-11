import { useState } from "react";

type TablistTextProps = {
    texts: string[];
    amount: number;
};

const TablistText = ({ texts, amount }: TablistTextProps) => {
    const [activeTab, setActiveTab] = useState(texts[0]);

    return (
        <div className="flex">
            {texts.map((tab) => {
                const isActive = activeTab === tab;
                return (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="cursor-pointer relative flex flex-col items-center min-w-[110px] py-1 px-[6px]"
                    >
                        <div className="py-[6px] px-5 w-auto">
                            <div className="flex gap-2">
                                <span
                                    className={`text-sm font-medium flex items-center justify-center ${
                                        isActive
                                            ? "bg-[linear-gradient(90deg,#1874A5,#A31AF2)] bg-clip-text text-transparent"
                                            : "text-neutral-500"
                                    }`}
                                >
                                    {tab}
                                </span>
                                {isActive ? 
                                    <div className="h-5 w-5 bg-[linear-gradient(90deg,#1874A5,#A31AF2)] p-2 flex justify-center items-center rounded-sm">
                                        <p className="text-[10px] text-white">{amount}</p>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <span
                                className={`absolute bottom-0 left-0 h-[1px] w-full rounded-full ${
                                    isActive
                                        ? "bg-[linear-gradient(90deg,#1874A5,#A31AF2)]"
                                        : "bg-neutral-5"
                                }`}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TablistText;
