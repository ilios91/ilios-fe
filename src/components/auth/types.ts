import { ReactNode } from "react";

export type Role = "facility" | 'supplier' | null;

export interface OnboardingCardProps {
  text: string,
  icon: ReactNode,
  userRole: Role,
  selectedRole: Role,
  handleRoleSelect: () => void
}