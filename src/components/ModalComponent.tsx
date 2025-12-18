import { Popover } from 'antd';
import type { FC } from 'react';

// Import icon packs as namespaces
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';
import * as DiIcons from 'react-icons/di';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as PiIcons from 'react-icons/pi';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';

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
  

  const popoverContent = (
    <div className="flex flex-col gap-2 min-w-[180px]">
      {Skill?.details?.map((item, index) => {
        const Icon = getIconByName(item.icon);

        return (
          <div
            key={index}
            className="flex items-center gap-2 text-sm"
          >
            {Icon && <Icon size={18} />}
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <Popover
      content={popoverContent}
      trigger="hover"
      placement="bottom"
    >
      <button
        type="button"
        className="w-full py-2 bg-transparent border-none cursor-pointer text-center"
      >
        {Skill?.title}
      </button>
    </Popover>
  );
};

export default ModalComponent;
