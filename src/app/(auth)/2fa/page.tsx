"use client";

import { useState } from "react";
import Modal from "@/components/common/Modal";
import Button from "@/components/common/buttons/Button";
import FormGroup from "@/components/common/input/FormGroup";

export default function TwoFactorAuth() {
  const [code, setCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle 2FA code submission
  };

  return (
    <Modal>
      <div className="p-4">
        <h2 className="text-xl font-bold">Two-Factor Authentication</h2>
        <p>Please enter your 2FA code to continue.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 mt-4">
          <FormGroup
            name="2fa_code"
            id="2fa_code"
            label="2FA Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your 2FA code"
          />
          <Button
            type="submit"
            className="mt-4 text-sm w-full h-10 rounded-lg text-white bg-blue-normal"
            text="Verify"
          />
        </form>
      </div>
    </Modal>
  );
}