import type { FC } from "react";

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

interface ModalComponentProps {
  Skill?: ISkills;
}

const ModalComponent: FC<ModalComponentProps> = ({ Skill }) => {
  return (
    <div className="w-full h-auto px-5 py-2 rounded-lg bg-white min-h-[21rem] shadow-lg">
      <div className="flex items-center justify-center  h-16 font-bold rounded-lg">
        <p>{Skill?.title}</p>
      </div>
      <div className="w-full flex items-center justify-center py-2 ">
        <div className="w-full grid grid-cols-4  gap-3 ">
          {Skill?.details?.map((item, index) => {
            const Icon = getIconByName(item.icon);

            return (
              <div key={index} className="flex flex-col text-center items-center gap-2 text-sm">
                  {Icon && <Icon style={{ color: item.color || "#555" }} size={30} />}
                  <span className="text-[10px]">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
