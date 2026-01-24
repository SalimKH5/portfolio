import { Tooltip } from "antd";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import icon packs as namespaces
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as DiIcons from "react-icons/di";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as PiIcons from "react-icons/pi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";

// Icon library registry
const iconLibraries: Record<string, Record<string, React.ElementType>> = {
  Fa: FaIcons,
  Si: SiIcons,
  Ri: RiIcons,
  Di: DiIcons,
  Ai: AiIcons,
  Gi: GiIcons,
  Pi: PiIcons,
  Bi: BiIcons,
  Io: IoIcons,
};

// Dynamic icon resolver
const getIconByName = (iconName?: string): React.ElementType | null => {
  if (!iconName) return null;
  const prefix = iconName.slice(0, 2);
  const library = iconLibraries[prefix];
  return library?.[iconName] ?? null;
};

const ProjectContainer = ({ propos }: { propos: IWork }) => {
  return (
    <Tooltip title={`View details for ${propos.title}`} placement="top">
      <div className="group w-full flex flex-col gap-5 p-4 bg-white rounded-[2rem] min-h-[26rem]  dark:bg-gradient-to-br   dark:bg-slate-800 border border-slate-200 dark:border-slate-600  shadow-lg hover:shadow-xl transition-all duration-300">
        
        <a
          href={`/${propos.id}`}
          className="block relative overflow-hidden rounded-2xl h-43 w-full dark:bg-slate-800"
        >
           <LazyLoadImage
            src={propos.image}
            alt={propos.title}
            effect="opacity"
            placeholder={
              <div className="absolute inset-0 bg-slate-300 animate-pulse" />
            }
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        <div className="flex flex-col gap-3 px-2 pb-2">
          <div className="flex flex-col gap-1">
            <a
              href={`/${propos.id}`}
              className="hover:text-blue-600 transition-colors"
            >
              <h3 className="font-extrabold text-2xl tracking-tight text-slate-800 dark:text-slate-100">
                {propos.title}
              </h3>
            </a>
            <p className="text-sm leading-relaxed  line-clamp-2 min-h-[40px]">
              {propos.shortDescription}
            </p>
            <div className="w-full flex gap-4 items-center justify-center">
              {propos?.icons?.map((item, index) => {
                const Icon = getIconByName(item.icon);

                return (
                  <div key={index} className="flex items-center  text-sm">
                    {Icon && <Icon size={18} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={propos?.url}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 text-xs font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              <FaExternalLinkAlt size={12} />
              <span>Live Demo</span>
            </a>

            <a
              href={propos?.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-black text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white py-2.5 px-4 text-xs font-bold rounded-xl transition-all active:scale-95"
            >
              <FaGithub size={16} />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default ProjectContainer;
