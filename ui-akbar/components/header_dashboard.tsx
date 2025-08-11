import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Calendar, Filter } from "lucide-react";

export default function HeaderDashboard() {
    return (
        <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Title</h2>
                <p className="text-muted-foreground text-[12px]">Your current sales summary and activity.</p>
            </div>

            <div className="flex gap-2 flex-wrap items-center">
                {[1, 2, 3].map((i) => (
                    <DropdownMenu key={i}>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex items-center gap-2 text-muted-foreground border-none bg-neutral-3 text-neutral-6"
                            >
                                <Filter className="w-4 h-4 text-neutral-6" />


                                {/* Garis vertical separator */}
                                <div className="mx-2 h-5 w-px bg-neutral-5" />
        
                             <span className="text-neutral-6">Filter by</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Option 1</DropdownMenuItem>
                            <DropdownMenuItem>Option 2</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ))}

                <div className="flex items-center bg-neutral-3 px-3 py-1 rounded-[8px]">
                    <Calendar className="h-4 w-4 text-muted-foreground shrink-0 text-neutral-6" />

                    {/* Garis vertical separator */}
                    <div className="mx-2 h-5 w-px bg-neutral-5" />

                    <Input
                        type="text"
                        placeholder="dd mmm yyyy - dd mmm yyyy"
                        className="text-neutral-6 flex-1 border-none shadow-none border-0 p-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                    />
                </div>


                <Button variant={"gradien"} className="w-[76px] h-[46px]" >
                    Button
                </Button>
            </div>
        </div>
    );
}
