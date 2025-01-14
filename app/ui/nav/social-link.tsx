import { SocialLink } from '@/app/lib/definitions';

interface SocialLinkProps {
  socialLink: SocialLink;
}

export default function SocialLink({ socialLink }: SocialLinkProps) {
  return (
    <a
      href={socialLink.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 hover:text-gray-900 transition-colors"
      aria-label={socialLink.ariaLabel}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={socialLink.icon} />
      </svg>
    </a>
  );
} 