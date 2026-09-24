import { z } from "zod";

export const channelBoardSchema = z.object({
  type: z.literal("channel-board"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  columns: z.array(z.string()).length(4),
  rows: z.array(z.object({ name: z.string(), where: z.string(), time: z.string(), fee: z.string() })),
  balancesTitle: z.string(),
  balancesText: z.string(),
  balances: z.array(z.object({ caption: z.string(), code: z.string(), value: z.string(), theme: z.enum(["white", "blue"]).optional() })),
});

export type ChannelBoardData = z.infer<typeof channelBoardSchema>;
