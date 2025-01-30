import { ReactNode } from "react";

export type UserRole = "facility" | 'supplier' | null;

export interface OnboardingCardProps {
  text: string,
  icon: ReactNode,
  role: UserRole,
  selectedRole: UserRole,
  onRoleSelect: () => void
}