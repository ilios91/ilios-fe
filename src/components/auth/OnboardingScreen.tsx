import { ReactNode } from "react";
import FacilityIcon from "../icons/FacilityIcon";

type UserRole = "facility" | 'supplier';
  interface RoleCard {
    role: UserRole,
    icon: ReactNode
  }
function OnboardingScreen() {

  return (
    <section>
      <FacilityIcon />
    </section>
  );
}

export default OnboardingScreen;