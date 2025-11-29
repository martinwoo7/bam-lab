import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  PreviousPeople,
  PreviousPeopleProps,
  People,
  PeopleProps,
} from "./people";

import { Publications } from "./publications";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function chunkAlternating(items: string[]) {
  const result = [];
  let i = 0;
  let toggle = true;

  while (i < items.length) {
    const chunkSize = toggle ? 3 : 2;
    result.push(items.slice(i, i + chunkSize));
    i += chunkSize;
    toggle = !toggle;
  }

  return result;
}

export function splitIntoTwoRows(items: string[]) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

function normalize(name: string): string {
  return name.toLowerCase().trim();
}

export function getAllLabMemberNames(
  currentPeople: PeopleProps,
  alumni: PreviousPeopleProps
): Set<string> {
  const currentArrays = Object.values(currentPeople);
  const alumniArrays = Object.values(alumni);
  const allMembers = [...currentArrays, ...alumniArrays].flat();
  const names = allMembers.map((member) => normalize(member.name));

  return new Set(names);
}

export async function getPublications() {
  const labMemberSet = getAllLabMemberNames(
    People as PeopleProps,
    PreviousPeople as PreviousPeopleProps
  );

  const processedData = Publications.map((pub) => ({
    ...pub,
    enrichedAuthors: pub.authors.map((authorName) => {
      const isMember = Array.from(labMemberSet).some((memberFullName) => {
        // 1. Get the last name of the lab member (e.g. "Smith" from "Jane Smith")
        const memberLastName = memberFullName.split(" ").pop();

        // 2. Check if that last name appears in the publication author string
        // (e.g. check if "Smith" is inside "Smith, J.")
        return authorName.toLowerCase().includes(memberLastName!);
      });

      return {
        name: authorName,
        isLabMember: isMember,
      };
    }),
  }));
  return processedData;
}
