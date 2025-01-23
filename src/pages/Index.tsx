import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/PhoneInput";
import SaveUserCheckbox from "@/components/SaveUserCheckbox";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [saveUser, setSaveUser] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center py-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-vk-blue hover:text-vk-blue-hover"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1 flex justify-center">
            <img
              src="/lovable-uploads/d544bf60-8c34-443a-b1ce-c1fd6dc1cef6.png"
              alt="VK ID"
              className="h-8"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold text-vk-text">
              Enter phone number
            </h1>
            <p className="text-vk-text-secondary text-lg">
              You'll use your phone number to sign in to your account
            </p>
          </div>

          <div className="space-y-4">
            <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />
            <SaveUserCheckbox checked={saveUser} onCheckedChange={setSaveUser} />
          </div>

          <div className="space-y-3">
            <Button
              className="w-full bg-vk-blue hover:bg-vk-blue-hover text-white rounded-xl py-6 text-lg font-medium"
            >
              Continue
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-vk-gray hover:bg-vk-gray-hover text-vk-text rounded-xl py-6 text-lg font-medium"
            >
              Sign in through app
            </Button>
          </div>

          <p className="text-center text-sm text-vk-text-secondary">
            By pressing Continue, you agree to the{" "}
            <a href="#" className="text-vk-blue hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-vk-blue hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;