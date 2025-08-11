import { useState } from "react";

import { Search } from "lucide-react";
import { cn } from "@/utils/cn";
import SearchInputWrapper from "./search-wrapper";

type SearchInputProps = {
    disabled?: boolean
}

const SearchInput = ({disabled = false}: SearchInputProps) => {

    const [value, setValue] = useState("");

    return (
        <div>
            <SearchInputWrapper
                leftIcon={ 
                    <Search 
                        size={24}
                        className={cn(
                            `text-neutral-6`,
                            disabled || value ? 'text-neutral-9' : null
                        )}
                    />
                }
                centerIcon={ 
                    <div className={cn(
                        "w-[1px] h-5 bg-neutral-5",
                        disabled || value ? 'bg-neutral-9' : null
                    )}/>
                }
            >
                <input
                    type="text"
                    placeholder="Input some text..."
                    disabled={disabled}
                    className={cn(
                        disabled ? "bg-[#D0D3D9] placeholder:text-neutral-9" : "bg-neutral-3"
                    )}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </SearchInputWrapper>
        </div>
    );
};

export default SearchInput;
