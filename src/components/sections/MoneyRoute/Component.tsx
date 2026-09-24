import type { MoneyRouteData } from "./schema";
import styles from "./styles.module.css";

export function MoneyRoute({ caption, title, aside, nodes, outs, foot }: MoneyRouteData) {
  const boxes = [
    { x: 20, caption: nodes[0].caption, title: nodes[0].title, fill: "#141414", ink: "#f3f5f5" },
    { x: 408, caption: nodes[1].caption, title: nodes[1].title, fill: "#dae8ee", ink: "#1f3a48" },
    { x: 796, caption: nodes[2].caption, title: nodes[2].title, fill: "#141414", ink: "#f3f5f5" },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.copy}>
          <span className={styles.caption}>{caption}</span>
          <h2 className="h2">{title}</h2>
        </div>
        <p className={styles.aside}>{aside}</p>
      </div>
      <svg className={styles.diagram} viewBox="0 0 1320 300" fill="none" role="img" aria-label={title}>
        <defs>
          <marker id="money-ar" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0 0l6 3-6 3z" fill="#FFD400" />
          </marker>
          <marker id="money-arw" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0 0l6 3-6 3z" fill="#b6c1c6" />
          </marker>
        </defs>
        <path d="M248 152 H388" stroke="#FFD400" strokeWidth="2" markerEnd="url(#money-ar)" />
        <path d="M636 152 H776" stroke="#FFD400" strokeWidth="2" markerEnd="url(#money-ar)" />
        <path d="M1024 152 H1104" stroke="#b6c1c6" strokeWidth="2" />
        <path d="M1104 152 V60 H1180" stroke="#b6c1c6" strokeWidth="2" markerEnd="url(#money-arw)" />
        <path d="M1104 152 H1180" stroke="#b6c1c6" strokeWidth="2" markerEnd="url(#money-arw)" />
        <path d="M1104 152 V244 H1180" stroke="#b6c1c6" strokeWidth="2" markerEnd="url(#money-arw)" />
        {boxes.map((box) => (
          <g key={box.title}>
            <rect x={box.x} y="96" width="228" height="112" rx="24" fill={box.fill} stroke="#b6c1c6" />
            <text x={box.x + 24} y="136" fill="#939393" fontSize="10" letterSpacing="1">
              {box.caption}
            </text>
            <text x={box.x + 24} y="172" fill={box.ink} fontSize="22" fontFamily="Space Grotesk, sans-serif" fontWeight="500">
              {box.title}
            </text>
          </g>
        ))}
        {outs.map((out, index) => (
          <g key={out.title}>
            <text x="1196" y={52 + index * 94} fill="#f3f5f5" fontSize="16">
              {out.title}
            </text>
            <text x="1196" y={66 + index * 94} fill="#939393" fontSize="12">
              {out.note}
            </text>
          </g>
        ))}
        <text x="20" y="284" fill="#646464" fontSize="14">
          {foot}
        </text>
      </svg>
      <ol className={styles.list}>
        {nodes.map((node) => (
          <li key={node.title}>
            <span>{node.caption}</span>
            {node.title}
          </li>
        ))}
        {outs.map((out) => (
          <li key={out.title}>
            <span>{out.note}</span>
            {out.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
