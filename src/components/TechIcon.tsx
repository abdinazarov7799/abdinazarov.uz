import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiNginx,
  SiGitlab,
  SiLinux,
  SiFigma,
  SiExpo,
} from "react-icons/si";
import { IconType } from "react-icons";

const map: Record<string, IconType> = {
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  Zustand: SiReact, // fallback
  NestJS: SiNestjs,
  Express: SiExpress,
  "Socket.IO": SiSocketdotio,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Sequelize: SiPostgresql, // fallback
  Docker: SiDocker,
  Jenkins: SiJenkins,
  NGINX: SiNginx,
  "GitLab CI": SiGitlab,
  Portainer: SiDocker, // fallback
  Linux: SiLinux,
  PM2: SiLinux, // fallback
  Figma: SiFigma,
  Expo: SiExpo,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}


