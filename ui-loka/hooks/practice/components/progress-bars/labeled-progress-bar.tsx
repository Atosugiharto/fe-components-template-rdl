import ProgressBar from "./progress-bar";

type LabeledProgressBarProps = {
    topLabel: string;
    bottomLabel: string;
    percentage: number;
    progress: number
};

const LabeledProgressBar = ({ topLabel, bottomLabel, percentage, progress }: LabeledProgressBarProps) => {

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between">
                <p className="text-sm font-semibold">{topLabel}</p>
                <p className="text-sm text-neutral-8">{percentage}%</p>
            </div>
            <ProgressBar
                progress={progress}
            />
            <div className="flex">
                <p className="text-xs text-neutral-7">{bottomLabel}</p>
            </div>
        </div>
    );
};

export default LabeledProgressBar;
