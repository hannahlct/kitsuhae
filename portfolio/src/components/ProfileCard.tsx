/* ═══════════════════════════════════════════════════════════════
   components/ProfileCard.tsx
═══════════════════════════════════════════════════════════════ */

import type { Profile } from "@/types";
import { SocialIcon } from "@/components/SocialIcon";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  /** Splits bio text and wraps bioTag matches in <span class="tag"> */
  function renderBio(bio: string, tags: string[]): React.ReactNode[] {
    const escapedTags = tags.map((t) =>
      t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    if (escapedTags.length === 0) return [bio];

    const pattern = new RegExp(`(${escapedTags.join("|")})`, "g");
    return bio.split(pattern).map((part, i) =>
      tags.includes(part) ? (
        <span key={i} className="tag">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  }

  return (
    <article className={styles.card}>
      {/* Avatar */}
      <div className={styles.avatar}>
        {profile.avatarSrc ? (
          <img src={profile.avatarSrc} alt={profile.name} />
        ) : (
          <div className={styles.avatarPlaceholder} aria-hidden />
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <h1 className={`${styles.name} text-display`}>{profile.name}</h1>
          <span className={`${styles.handle} text-mono text-muted`}>
            {profile.handle}
          </span>
        </div>

        <p className={styles.bio}>
          <span className="tag">{profile.pronouns}</span>{" "}
          {renderBio(profile.bio, profile.bioTags)}
        </p>

        {profile.discord && (
          <p className={`${styles.discord} text-mono text-muted`}>
            <span className={styles.discLabel}>disc:</span> {profile.discord}
          </p>
        )}
      </div>

      {/* Social icons */}
      <div className={styles.socials}>
        {profile.socials.map((link) => (
          <a
            key={link.platform}
            href={link.href}
            aria-label={link.label}
            className={styles.socialLink}
          >
            <SocialIcon platform={link.platform} />
          </a>
        ))}
      </div>
    </article>
  );
}
