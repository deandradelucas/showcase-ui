import "./dock-social.css"

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4H20V20H4V4Z M6 6V18H18V6H6Z M12 8a4 4 0 100 8 4 4 0 000-8Z M12 10a2 2 0 100 4 2 2 0 000-4Z"
      />
      <circle cx="17" cy="7" r="1.3" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z"
      />
    </svg>
  )
}

function CodepenIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3 21 8.5 21 15.5 12 21 3 15.5 3 8.5Z M12 7.5 16.5 10.2 16.5 13.8 12 16.5 7.5 13.8 7.5 10.2Z"
      />
    </svg>
  )
}

function UiverseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <defs>
        <linearGradient id="dock-social-uiverse-gradient" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0" stopColor="#bf66ff" />
          <stop offset="0.5" stopColor="#6248ff" />
          <stop offset="1" stopColor="#00ddeb" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="7" fill="url(#dock-social-uiverse-gradient)" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6a7 5.5 0 00-7 5.5v.5a7 5.5 0 0014 0v-.5a7 5.5 0 00-7-5.5zM9 12.4a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zm6 0a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.2-.5-1.3.1-2.8 0 0 .9-.3 2.9 1a10 10 0 0 1 5.2 0c2-1.3 2.9-1 2.9-1 .6 1.5.2 2.6.1 2.8a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.6 5 .3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <circle className="telegram-bg" cx="12" cy="12" r="10" />
      <path
        className="telegram-fg"
        d="m6 12.4 12-4.6-2 11.5-3.3-2.6-1.7 1.6-.3-3z"
      />
      <path className="telegram-fg" d="m10.7 15.3 6-6.9-7.6 5.2z" />
    </svg>
  )
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <g>
        <circle cx="12" cy="12" r="10" />
        <path d="M17.5 12a2 2 0 0 0-3.4-1.4c-1-.6-2.3-1-3.6-1.1l.6-2.7 1.9.4a1.4 1.4 0 1 0 .2-.9l-2.2-.5a.4.4 0 0 0-.5.3l-.7 3.3c-1.4.1-2.7.5-3.7 1.1A2 2 0 1 0 5 13.9a2.9 2.9 0 0 0 0 .4c0 2 2.3 3.7 5.2 3.7s5.2-1.6 5.2-3.7a2.9 2.9 0 0 0 0-.4 2 2 0 0 0 2.1-1.9zM8.4 13.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.6 2.9c-.6.6-1.5.8-2 .8s-1.4-.2-2-.8a.3.3 0 0 1 .4-.4c.4.4 1.1.6 1.6.6s1.2-.2 1.6-.6a.3.3 0 0 1 .4.4zm-.3-1.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </g>
    </svg>
  )
}

interface DockSocialProps {
  label?: string
  links?: {
    instagram?: string
    twitter?: string
    dribbble?: string
    codepen?: string
    uiverse?: string
    discord?: string
    github?: string
    telegram?: string
    reddit?: string
  }
}

function DockSocial({ label = "SOCIAL", links = {} }: DockSocialProps) {
  const items = [
    { href: links.instagram, icon: <InstagramIcon /> },
    { href: links.twitter, icon: <TwitterIcon /> },
    { href: links.dribbble, icon: <DribbbleIcon /> },
    { href: links.codepen, icon: <CodepenIcon /> },
    { href: links.uiverse, icon: <UiverseIcon /> },
    { href: links.discord, icon: <DiscordIcon /> },
    { href: links.github, icon: <GithubIcon /> },
    { href: links.telegram, icon: <TelegramIcon /> },
    { href: links.reddit, icon: <RedditIcon /> },
  ]

  return (
    <div className="dock-social">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href ?? "#"}
          className="dock-social__item"
          aria-label={`social-link-${index}`}
        >
          {item.icon}
        </a>
      ))}
      <div className="dock-social__back" />
      <span className="dock-social__text">{label}</span>
    </div>
  )
}

export { DockSocial }
