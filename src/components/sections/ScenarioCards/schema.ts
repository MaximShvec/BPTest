import { z } from "zod";

export const scenarioCardsSchema = z.object({
  type: z.literal("scenario-cards"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  items: z.array(z.object({ index: z.string(), title: z.string(), text: z.string() })),
});

export type ScenarioCardsData = z.infer<typeof scenarioCardsSchema>;
