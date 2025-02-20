import TwoFactorAuth from "@/components/auth/TwoFactorAuth";
import { Modal } from "@/components/ui/modals/Modal";

export default function TwoFactorAuthModal() {
  return (
    <Modal>
      <TwoFactorAuth />
    </Modal>
  );
}
