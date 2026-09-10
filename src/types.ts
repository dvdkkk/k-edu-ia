export interface CourseSummary {
  badge: string;
  campus: string;
  title: string;
  courseTitle: string;
  capacity: string;
  duration: string;
  schedule: string;
  originalPrice: string;
  discountedPrice: string;
  stipendNote: string;
}

export interface MetricCard {
  value: string;
  label: string;
  description?: string;
  iconName: string;
}

export interface KeyPoint {
  id: string;
  title: string;
  shortTag: string;
  content: string;
  iconName: string;
}

export interface TargetAudienceCard {
  id: number;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  imageUrl?: string;
  highlights?: string[];
}

export interface AlumniEmployment {
  id: number;
  cohort: string;
  courseName: string;
  companyName: string;
}

export interface CareerStep {
  step: string;
  title: string;
  items: string[];
}

export interface CurriculumStepItem {
  stepNumber: number;
  stepTitle: string;
  details: string;
  category: 'core' | 'web' | 'backend' | 'cloud' | 'ai' | 'project';
  durationWeeks?: string;
  skills: string[];
}

export interface StudentInterview {
  id: number;
  headline: string;
  courseName: string;
  studentName: string;
  avatarBg?: string;
  quote: string;
  storyDetails: string;
  categoryTag?: string;
  campus?: string;
  imageUrl?: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface CompanyInfo {
  companyName: string;
  ceo: string;
  businessRegNumber: string;
  licenseNumber: string;
  email: string;
  privacyOfficer: string;
  operationsManager: string;
  address: string;
  phone: string;
  copyright: string;
}

export interface ApplicationFormData {
  name: string;
  phone: string;
  email: string;
  cardStatus: 'has_card' | 'applying' | 'need_info';
  techBackground: 'non_major' | 'major' | 'self_taught';
  questions: string;
}
