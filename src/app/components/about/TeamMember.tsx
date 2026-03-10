import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className="group rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08070b] via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {[Linkedin, Twitter, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
      <div className="p-5 flex-grow">
        <h3
          className="text-[15px] text-white mb-0.5"
          style={{ fontWeight: 600 }}
        >
          {name}
        </h3>
        <p
          className="text-[#00A82D] mb-3 text-[14px]"
          style={{ fontWeight: 500 }}
        >
          {role}
        </p>
        <p className="text-[14px] text-[#6b6f76] leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}