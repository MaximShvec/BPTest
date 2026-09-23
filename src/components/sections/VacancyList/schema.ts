import { z } from "zod";

export const vacancyListSchema = z.object({
  type: z.literal("vacancy-list"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  filters: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
    }),
  ).min(1),
  columns: z.object({
    role: z.string(),
    team: z.string(),
    location: z.string(),
    employment: z.string(),
  }),
  items: z.array(
    z.object({
      title: z.string(),
      team: z.string(),
      location: z.string(),
      employment: z.string(),
      slug: z.string(),
      groups: z.array(z.string()),
    }),
  ),
});

export type VacancyListData = z.infer<typeof vacancyListSchema>;
