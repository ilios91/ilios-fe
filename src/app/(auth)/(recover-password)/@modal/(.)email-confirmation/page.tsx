import EmailConfirmation from "@/components/auth/EmailConfirmation";
import { Modal } from "@/components/ui/modals/Modal";

export default function EmailConfirmationModal() {
  return (
    <Modal>
      <EmailConfirmation/>
    </Modal>
  );
}
