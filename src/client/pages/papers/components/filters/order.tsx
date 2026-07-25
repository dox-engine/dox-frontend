// Importing global ui components
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/client/components/ui/select";

function PapersFilterOrder() {
    return (
        <div className="bg-card py-3 px-4 flex flex-col justify-center rounded-[8px] items-center gap-y-4 border border-border w-full lg:w-auto">
            <Select>
                <SelectTrigger className="w-full lg:max-w-48">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default PapersFilterOrder;