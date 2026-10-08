import { LabelZzz } from "./kape/LabelZzz";

export function SectionLabel({
  num,
  title,
  hint,
}: {
  num: string;
  title: string;
  hint?: string;
}) {
  return (
    <p className="font-mono text-sm text-muted">
      <span className="text-accent">{num}</span> / {title}
      {hint && <span className="text-faint"> — {hint}</span>}
      <LabelZzz />
    </p>
  );
}
