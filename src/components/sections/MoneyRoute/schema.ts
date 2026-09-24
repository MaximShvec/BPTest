import { z } from "zod";

const nodeSchema = z.object({ caption: z.string(), title: z.string(), tone: z.enum(["ink", "blue"]) });

export const moneyRouteSchema = z.object({
  type: z.literal("money-route"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  nodes: z.array(nodeSchema).length(3),
  outs: z.array(z.object({ title: z.string(), note: z.string() })).length(3),
  foot: z.string(),
});

export type MoneyRouteData = z.infer<typeof moneyRouteSchema>;
