import React from "react";
import { Input } from "@/components/ui/input";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  return (
    <div className="relative w-full">
      <div className="flex items-center border rounded-lg p-3 bg-white focus-within:border-vk-blue">
        <div className="flex items-center gap-2 pr-2 border-r">
          <img 
            src="/lovable-uploads/d544bf60-8c34-443a-b1ce-c1fd6dc1cef6.png" 
            alt="Russian flag" 
            className="w-6 h-4 object-cover"
          />
          <span className="text-lg">+7</span>
        </div>
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 ml-2 outline-none text-lg"
          placeholder="Phone number"
        />
      </div>
    </div>
  );
};

export default PhoneInput;