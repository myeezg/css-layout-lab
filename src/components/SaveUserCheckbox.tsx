import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SaveUserCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const SaveUserCheckbox = ({ checked, onCheckedChange }: SaveUserCheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="save-user"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="w-5 h-5 border-2 border-vk-blue data-[state=checked]:bg-vk-blue"
      />
      <label
        htmlFor="save-user"
        className="text-base text-vk-text-secondary font-medium cursor-pointer"
      >
        Save user
      </label>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <HelpCircle className="w-4 h-4 text-vk-text-secondary" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Save your login information for next time</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SaveUserCheckbox;