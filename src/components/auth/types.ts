import { ReactNode } from "react";

export type Role = "facility" | 'supplier' ;

export interface OnboardingCardProps {
  text: string,
  icon: ReactNode,
  userRole: Role | null,
  selectedRole: Role | null,
  handleRoleSelect: () => void
}