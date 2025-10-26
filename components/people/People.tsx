'use client';

import PeopleCard from '../cards/People';
import { peopleData } from '@/costants';

export type Person = {
  id: string;
  image: string;
  name: string;
  discipline: string;
  remark: string;
};

const PeopleSection = () => {
  return (
    <section className="w-full py-20 px-6 flex justify-center bg-white">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Built by People, for People
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {peopleData.map((person) => (
            <PeopleCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
