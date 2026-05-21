export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  checklistItems: string[];
  suitableLabel: string;
  tags: string[];
  delay?: number;
}

export interface QualityCardProps {
  icon: string;
  title: string;
  text: string;
}

export interface BookingFeatureProps {
  icon: string;
  title: string;
  text: string;
}
