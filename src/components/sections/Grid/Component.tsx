import type { Section } from "@/components/sections/schemas";
import { renderSections } from "@/components/sections/renderSections";
import { Grid, GridItem } from "@/components/ui/Grid";
import type { GridSectionData } from "./schema";

export function GridSection({ items }: GridSectionData) {
  return (
    <Grid>
      {items.map((item, index) => (
        <GridItem
          key={item.section.id ?? index}
          span={item.span ?? 12}
          spanTablet={item.spanTablet}
          spanMobile={item.spanMobile ?? 12}
        >
          {renderSections([item.section as Section])}
        </GridItem>
      ))}
    </Grid>
  );
}
