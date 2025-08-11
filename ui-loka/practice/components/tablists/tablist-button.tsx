import { useState } from "react";
import { Button } from "../../../../components/ui/buttons/button";

type TablistButtonProps = {
    tabs: string[];
};

const TablistButton = ({ tabs }: TablistButtonProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="flex gap-5 bg-gray-50 px-[6px] py-1 rounded-lg w-fit">
            {tabs.map((tab) => (
                <Button
                    key={tab}
                    variant={activeTab === tab ? "gradien" : "plain"}
                    size="sm"
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </Button>
            ))}
        </div>
    );
};

export default TablistButton;
