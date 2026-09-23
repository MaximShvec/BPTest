import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { Placeholder } from "@/components/ui/Placeholder";
import { RichText } from "@/components/rich/RichText";
import type { ReferralBannerData } from "./schema";
import styles from "./styles.module.css";

export function ReferralBanner({ title, lead, media, items }: ReferralBannerData) {
  return (
    <Card theme="black" className={styles.banner}>
      <div className={styles.intro}>
        <h2 className="h2">{title}</h2>
        <p className={`lead muted ${styles.lead}`}>{lead}</p>
      </div>
      <div className={styles.video}>
        <Media media={media} />
      </div>
      <Grid>
        {items.map((item) => {
          const lime = item.theme === "lime";
          return (
            <GridItem key={item.title ?? item.text} span={3} spanTablet={6} spanMobile={12}>
              <Card theme={lime ? "lime" : "dark"} padding="lg" className={lime ? `${styles.tile} ${styles.lime}` : styles.tile}>
                {lime ? (
                  <>
                    <RichText as="h3" className="h4" value={item.title ?? ""} />
                    {item.cta ? (
                      <Link className={styles.arrow} href={item.cta.href} aria-label={item.cta.label}>
                        <Icon name="arrow-right" size={28} />
                      </Link>
                    ) : null}
                  </>
                ) : (
                  <>
                    <Placeholder width={56} height={56} radius={16} borderColor="#646464" />
                    <p className="body muted">{item.text}</p>
                  </>
                )}
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </Card>
  );
}
