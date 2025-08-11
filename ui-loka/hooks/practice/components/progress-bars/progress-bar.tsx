type ProgressBarProps = {
    progress: number;
    maxValue?: number;
};

const ProgressBar = ({ progress, maxValue = 100 }: ProgressBarProps) => {

    const clampedProgress = Math.max(0, Math.min(progress, maxValue));
    const percentage = Math.round((clampedProgress / maxValue) * 100);

    return (
        <div>
            <div className={`w-[320px] max-w-[320px] bg-neutral-4 h-[6px] rounded-full overflow-hidden`}>
                <div 
                    className={`rounded-full bg-[#1874A5] h-[6px] transition-all duration-300 ease-in-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
