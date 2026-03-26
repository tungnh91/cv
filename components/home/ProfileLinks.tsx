import { profileLinks } from 'data/home';

import ExternalLinkCard from 'components/ExternalLinkCard';

export default function ProfileLinks() {
  return (
    <div className="mx-auto grid w-full max-w-2xl gap-5 md:grid-cols-2">
      {profileLinks.map(({ title, link, icon }) => (
        <ExternalLinkCard
          key={title}
          title={title}
          link={link}
          icon={icon}
        />
      ))}
    </div>
  );
}
