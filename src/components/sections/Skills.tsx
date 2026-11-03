import { skills } from "@/data/content";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="What I work with">
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.group}
              className="card-hover rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-6"
            >
              <h3 className="font-serif text-lg font-semibold">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-tag-bg px-3 py-1 text-sm text-tag-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
