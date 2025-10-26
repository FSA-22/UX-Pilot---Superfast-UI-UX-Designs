import Image from 'next/image';
import { Person } from '@/components/people/People';

type PeopleCardProps = {
  person: Person;
};

const PeopleCard = ({ person }: PeopleCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-center space-x-4">
        <Image
          src={person.image}
          alt={person.name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {person.name}
          </h3>
          <p className="text-sm text-slate-500">{person.discipline}</p>
        </div>
      </div>

      {/* Remark Below */}
      <p className="mt-4 text-sm text-slate-600 italic leading-relaxed">
        {person.remark}
      </p>
    </div>
  );
};

export default PeopleCard;
