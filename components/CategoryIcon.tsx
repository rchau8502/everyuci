import {
  Sparkles,
  GraduationCap,
  CircleDollarSign,
  Home,
  UtensilsCrossed,
  Bus,
  Users,
  HeartPulse,
  Briefcase,
  Award,
  BookOpen,
  CalendarPlus,
  Receipt,
  Coins,
  LayoutDashboard,
  Car,
  Library,
  Mail,
  FileText,
  CheckCircle2,
  HelpCircle,
  LucideIcon
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  GraduationCap,
  CircleDollarSign,
  Home,
  UtensilsCrossed,
  Bus,
  Users,
  HeartPulse,
  Briefcase,
  Award,
  BookOpen,
  CalendarPlus,
  Receipt,
  Coins,
  LayoutDashboard,
  Car,
  Library,
  Mail,
  FileText,
  CheckCircle2,
};

export default function CategoryIcon({
  name,
  className = 'w-5 h-5',
  color
}: {
  name: string;
  className?: string;
  color?: string;
}) {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent className={className} style={color ? { color } : undefined} />;
}
