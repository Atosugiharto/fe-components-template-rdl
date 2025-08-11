import ProgressBar from "./progress-bar";

type BottomLabelProgressBarProps = {
    bottomLabel: string;
    percentage: number;
    progress: number
};

const BottomLabelProgressBar = ({ bottomLabel, percentage, progress }: BottomLabelProgressBarProps) => {

    return (
        <div className="flex flex-col gap-1">
            <ProgressBar
                progress={progress}
            />
            <div className="flex justify-between">
                <p className="text-sm font-semibold">{bottomLabel}</p>
                <p className="text-sm text-neutral-8">{percentage}%</p>
            </div>
        </div>
    );
};

export default BottomLabelProgressBar;
