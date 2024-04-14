import avatar from "@/assets/img/avatar.jpeg";
import mailIcon from "@/assets/svg/mail.svg";
import phoneIcon from "@/assets/svg/phone.svg";
import globeIcon from "@/assets/svg/globe.svg";
import githubIcon from "@/assets/svg/github.svg";
import linkedInIcon from "@/assets/svg/linkedin.svg";
import DiamondDivider from "@/components/commons/dividers/diamond-divider";
import data from "@/data";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col w-full bg-black/75 p-4">
      <Image
        alt="Avatar"
        className="rounded-full self-center mb-2"
        src={avatar}
        priority={true}
        height={150}
        width={150}
      />
      {/* Phone */}
      <div className="flex flex-row gap-2 py-2">
        <Image alt="Phone Icon" className="w-3.5 h-3.5 mt-px" src={phoneIcon} />
        <div className="flex flex-col gap-2 overflow-clip">
          {data.profile.phones.map((phone) => (
            <a
              key={phone.value}
              className="font-mont text-white text-xs underline"
              href={phone.value}
            >
              {phone.label}
            </a>
          ))}
        </div>
      </div>
      <DiamondDivider />
      {/* Email */}
      <div className="flex flex-row gap-2 py-2">
        <Image alt="Mail Icon" className="w-3.5 h-3.5 mt-px" src={mailIcon} />
        <div className="flex flex-col gap-2 overflow-clip">
          {data.profile.emails.map((email) => (
            <a
              key={email.value}
              className="font-mont text-white text-xs break-words underline"
              href={email.value}
            >
              {email.label}
            </a>
          ))}
        </div>
      </div>
      <DiamondDivider />
      {/* Website */}
      <div className="flex flex-row gap-2 py-2">
        <Image alt="Mail Icon" className="w-3.5 h-3.5 mt-px" src={globeIcon} />
        <div className="flex flex-col gap-2 overflow-clip">
          {data.profile.websites.map((website) => (
            <a
              key={website.value}
              className="font-mont text-white text-xs break-words underline"
              href={website.value}
            >
              {website.label}
            </a>
          ))}
        </div>
      </div>
      <DiamondDivider />
      {/* GitHub */}
      <div className="flex flex-row gap-2 py-2">
        <Image alt="Mail Icon" className="w-3.5 h-3.5 mt-px" src={githubIcon} />
        <div className="flex flex-col gap-2 overflow-clip">
          {data.profile.githubs.map((github) => (
            <a
              key={github.value}
              className="font-mont text-white text-xs break-words underline"
              href={github.value}
            >
              {github.label}
            </a>
          ))}
        </div>
      </div>
      <DiamondDivider />
      {/* LinkedIn */}
      <div className="flex flex-row gap-2 py-2">
        <Image
          alt="Mail Icon"
          className="w-3.5 h-3.5 mt-px"
          src={linkedInIcon}
        />
        <div className="flex flex-col gap-2 overflow-clip">
          <a
            className="font-mont text-white text-xs break-words underline"
            href={data.profile.linkedin.value}
          >
            {data.profile.linkedin.label}
          </a>
        </div>
      </div>
    </div>
  );
}
